// Minimal PDF writer for the Ghost Process completions table: A4, the PDF built-in fonts
// (nothing embedded), ASCII text only. Small enough to run inside the Worker.

const W = 595;
const H = 842;
const M = 42;
const ROW = 15;
const CHAR = 5.4; // Courier advance at 9 pt

// Width of each column in characters, in Courier.
const columns = [
  ["#", 5],
  ["ROLL NO", 13],
  ["SOLVED AT (IST)", 23],
  ["COMPLETION CODE", 27],
  ["KEY", 17],
  ["FAILED", 6],
];

const clean = (text) => String(text ?? "").replace(/[^\x20-\x7e]/g, "?");
const esc = (text) => clean(text).replace(/([\\()])/g, "\\$1");
const text = (font, size, x, y, value) =>
  `BT /${font} ${size} Tf ${x.toFixed(1)} ${y.toFixed(1)} Td (${esc(value)}) Tj ET`;

const ist = (date) =>
  new Date(date).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

function tableHeader(y) {
  let x = M;
  const ops = ["0.03 0.04 0.035 rg", `${M - 6} ${y - 5} ${W - 2 * M + 12} ${ROW + 2} re f`, "0.66 1 0.21 rg"];
  for (const [label, width] of columns) {
    ops.push(text("F4", 8, x, y, label));
    x += width * CHAR;
  }
  return ops;
}

function row(y, cells, shaded) {
  const ops = shaded ? ["0.95 0.96 0.94 rg", `${M - 6} ${y - 5} ${W - 2 * M + 12} ${ROW} re f`] : [];
  ops.push("0.1 0.1 0.1 rg");
  let x = M;
  cells.forEach((cell, i) => {
    ops.push(text("F3", 9, x, y, cell));
    x += columns[i][1] * CHAR;
  });
  return ops;
}

// rows: [{ roll, key, code, solved_at, failed_attempts }] in solve order.
export function completionsPdf(rows, players, generatedAt = new Date()) {
  const firstTop = H - 128;
  const top = H - M - 10;
  const bottom = M + 30;
  const perFirst = Math.floor((firstTop - ROW - bottom) / ROW);
  const perPage = Math.floor((top - ROW - bottom) / ROW);

  const pages = [];
  let index = 0;
  do {
    const first = pages.length === 0;
    const count = first ? perFirst : perPage;
    pages.push({ first, rows: rows.slice(index, index + count), start: index });
    index += count;
  } while (index < rows.length);

  const streams = pages.map((page, p) => {
    const ops = [];
    let y = page.first ? firstTop : top;
    if (page.first) {
      ops.push("0.03 0.04 0.035 rg", `0 ${H - 96} ${W} 96 re f`);
      ops.push("1 1 1 rg", text("F1", 20, M, H - 50, "GHOST PROCESS // COMPLETIONS"));
      ops.push("0.66 1 0.21 rg", text("F2", 9.5, M, H - 72, `Recurse KMIT  |  Generated ${ist(generatedAt)} IST`));
      ops.push(
        "0.1 0.1 0.1 rg",
        text("F2", 10.5, M, H - 116, `${rows.length} completion${rows.length === 1 ? "" : "s"} out of ${players} player${players === 1 ? "" : "s"}, in solve order.`),
      );
      y -= 8;
    }
    ops.push(...tableHeader(y));
    y -= ROW + 2;
    if (!rows.length) ops.push("0.4 0.4 0.4 rg", text("F2", 10, M, y, "No completions yet."));
    page.rows.forEach((r, i) => {
      const n = page.start + i + 1;
      ops.push(...row(y, [n, r.roll, ist(r.solved_at), r.code, r.key, r.failed_attempts ?? 0], n % 2 === 0));
      y -= ROW;
    });
    ops.push("0.45 0.45 0.45 rg", text("F2", 8, M, M - 10, "recursekmit.in/ghost-process"));
    ops.push(text("F2", 8, W - M - 50, M - 10, `Page ${p + 1} of ${pages.length}`));
    return ops.join("\n");
  });

  // Objects: 1 catalog, 2 page tree, 3-6 fonts, then a page and its content stream per page.
  const fonts = ["Helvetica-Bold", "Helvetica", "Courier", "Courier-Bold"];
  const pageIds = streams.map((_, i) => 7 + i * 2);
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`,
    ...fonts.map((name) => `<< /Type /Font /Subtype /Type1 /BaseFont /${name} /Encoding /WinAnsiEncoding >>`),
  ];
  streams.forEach((stream, i) => {
    objects.push(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Contents ${pageIds[i] + 1} 0 R ` +
        "/Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R /F4 6 0 R >> >> >>",
      `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
    );
  });

  let pdf = "%PDF-1.4\n";
  const offsets = objects.map((body, i) => {
    const offset = pdf.length;
    pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
    return offset;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  pdf += offsets.map((o) => `${String(o).padStart(10, "0")} 00000 n \n`).join("");
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return new TextEncoder().encode(pdf);
}
