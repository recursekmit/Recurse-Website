import styles from "./page.module.css";

const ENCODED_RESULTS_LINK =
  "aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNjNaZ21oUkdzWmExSWI1Sk9PNUpWMElUSm9fdjRkWkIvdmlldz91c3A9c2hhcmluZw";

export const metadata = {
  title: "Round 1 Access — Recurse",
  description: "A private Recurse recruitment checkpoint.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  alternates: {
    canonical: "/recruitment/round-1",
  },
};

export default function RoundOneAccessPage() {
  const hiddenSignal = `
    <!-- don't see. definitely don't decode the value below. -->
    <span hidden aria-hidden="true" data-results-token="${ENCODED_RESULTS_LINK}">
      ${ENCODED_RESULTS_LINK}
    </span>
  `;

  return (
    <main className={styles.page}>
      <section className={styles.shell} aria-labelledby="access-title">
        <div className={styles.signal} aria-hidden="true" />

        <header className={styles.header}>
          <div className={styles.brand}>
            <span className={styles.logo} aria-hidden="true">
              R/
            </span>
            <span className={styles.brandCopy}>
              <strong>RECURSE</strong>
              <small>KMIT Technical Club</small>
            </span>
          </div>
          <span className={styles.badge}>Recruitment / R1</span>
        </header>

        <div className={styles.body}>
          <article className={styles.card}>
            <div className={styles.cardAccent} aria-hidden="true" />
            <div className={styles.cardContent}>
              <p className={styles.kicker}>Candidate channel · Round 01</p>
              <h1 id="access-title">
                Something is
                <br />
                <span>waiting.</span>
              </h1>
              <p className={styles.copy}>
                The first round is complete. Your next checkpoint will reveal
                itself when you know where to look.
              </p>

              <div className={styles.status}>
                <span className={styles.statusDot} aria-hidden="true" />
                <span className={styles.statusCopy}>
                  <small>Channel status</small>
                  <strong>Signal embedded</strong>
                </span>
              </div>
            </div>
          </article>

          <div className={styles.note}>
            <span>01</span>
            <p>Keep your Round 1 credentials close.</p>
          </div>
        </div>

        <footer className={styles.footer}>
          <span>RECURSE · ROUND 1</span>
          <span>21 / 06 / 2026</span>
        </footer>
      </section>

      <div
        className={styles.hiddenSignal}
        dangerouslySetInnerHTML={{ __html: hiddenSignal }}
      />
    </main>
  );
}
