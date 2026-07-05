"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const selectedStudents = [
  { name: "Sai Maanvita", rollNo: "24BD1A050G" },
  { name: "Nandigama Sravanthi", rollNo: "24BD1A0516" },
  { name: "Anagha A", rollNo: "24BD1A0521" },
  { name: "Anoosh Dhamshetty", rollNo: "24BD1A052B" },
  { name: "Harika Kukkadapu", rollNo: "24BD1A052Y" },
  { name: "Bhargavi Pabbathi", rollNo: "24BD1A0539" },
  { name: "M. Sudeeptha", rollNo: "24BD1A0571" },
  { name: "Vineeth", rollNo: "24BD1A05AL" },
  { name: "Madichetty Suchay Srinischal", rollNo: "24BD1A660Y" },
  { name: "Sogalapalli Manjunath Reddy", rollNo: "24BD1A665N" },
  { name: "Baddam Srujan Reddy", rollNo: "25BD1A0507" },
  { name: "Kandhikonda Abhiram", rollNo: "25BD1A050T" },
  { name: "Vivek Varma", rollNo: "25BD1A0528" },
  { name: "Aditya Sai Katrapalli", rollNo: "25BD1A052U" },
  { name: "Anirudh", rollNo: "25BD1A0534" },
  { name: "P. L. Venkateswara Reddy", rollNo: "25BD1A0536" },
  { name: "Sreesaketh Tangella", rollNo: "25BD1A053N" },
  { name: "Tavva Bhavitha", rollNo: "25BD1A053P" },
  { name: "Shridhar Udayagiri", rollNo: "25BD1A053R" },
  { name: "Acham Karthikeya", rollNo: "25BD1A0542" },
  { name: "Keshav Acham", rollNo: "25BD1A0543" },
  { name: "Konduru Bhavyasri", rollNo: "25BD1A054V" },
  { name: "Sai Aditya Datta Tipirneni", rollNo: "25BD1A055W" },
  { name: "Chinmayee Wuriti", rollNo: "25BD1A056A" },
  { name: "M. Vijay", rollNo: "25BD1A0575" },
  { name: "Tedla Saikeertan", rollNo: "25BD1A057T" },
  { name: "Perni Kiran Kumar", rollNo: "25BD1A05DJ" },
  { name: "K Sai Praneeth Reddy", rollNo: "25BD1A05GQ" },
  { name: "Priyansu Mohanty", rollNo: "25BD1A05HJ" },
  { name: "Abhishek Srivatsasa", rollNo: "25BD1A660G" },
  { name: "Kondepudi Sri Nikhitha", rollNo: "25BD1A660Y" },
  { name: "Akhil Tangudu", rollNo: "25BD1A669T" },
];

function normalizeRollNo(value) {
  return value.replace(/\s+/g, "").toUpperCase();
}

export default function ResultsClient() {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeRollNo(query);

  const selectedMap = useMemo(() => {
    return new Map(
      selectedStudents.map((student) => [
        normalizeRollNo(student.rollNo),
        student,
      ])
    );
  }, []);

  const matchedStudent = normalizedQuery
    ? selectedMap.get(normalizedQuery)
    : undefined;
  const hasSearch = normalizedQuery.length > 0;

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="results-title">
        <div className={styles.glowOne} aria-hidden="true" />
        <div className={styles.glowTwo} aria-hidden="true" />

        <header className={styles.header}>
          <Link className={styles.brand} href="/" aria-label="Recurse home">
            <Image
              src="/recurse-logo-white.png"
              alt="Recurse"
              width={464}
              height={135}
              priority
            />
          </Link>
          <span className={styles.badge}>Final recruitment results</span>
        </header>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Recurse intake · 2026</p>
            <h1 id="results-title">
              Welcome to
              <span> the club.</span>
            </h1>
            <p>
              Search your roll number to check the final selection list. If you
              made it in, this is the start of building, shipping, debugging,
              learning, and showing up with the Recurse crew.
            </p>
          </div>

          <aside className={styles.searchPanel} aria-label="Search results">
            <div className={styles.panelTop}>
              <span>RESULT LOOKUP</span>
              <b>{selectedStudents.length} selected</b>
            </div>

            <label className={styles.searchBox}>
              <span>Enter roll number</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Ex: 25BD1A0507"
                autoCapitalize="characters"
                spellCheck="false"
              />
            </label>

            <div
              className={[
                styles.resultCard,
                matchedStudent ? styles.resultCardSuccess : "",
                hasSearch && !matchedStudent ? styles.resultCardMuted : "",
              ].join(" ")}
              aria-live="polite"
            >
              {!hasSearch && (
                <>
                  <span className={styles.resultStatus}>Awaiting input</span>
                  <h2>Search with your roll number.</h2>
                  <p>
                    We normalize the roll number to all caps before checking the
                    final list.
                  </p>
                </>
              )}

              {hasSearch && matchedStudent && (
                <>
                  <span className={styles.resultStatus}>Selected</span>
                  <h2>Congratulations, {matchedStudent.name}.</h2>
                  <p>
                    You are officially part of Recurse. Bring your curiosity,
                    your consistency, and your willingness to build in public.
                    The loop starts now.
                  </p>
                  <div className={styles.rollPill}>{matchedStudent.rollNo}</div>
                </>
              )}

              {hasSearch && !matchedStudent && (
                <>
                  <span className={styles.resultStatus}>No match found</span>
                  <h2>Roll number not found.</h2>
                  <p>
                    We could not find {normalizedQuery} in the final selected
                    list. Please re-check the roll number formatting once.
                  </p>
                </>
              )}
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.listSection} aria-labelledby="selected-title">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Final selected candidates</p>
          <h2 id="selected-title">The new Recurse batch</h2>
          <p>
            Every name here earned a place in the club. Keep the momentum high;
            the next step is contribution.
          </p>
        </div>

        <div className={styles.studentGrid}>
          {selectedStudents.map((student, index) => (
            <article className={styles.studentCard} key={student.rollNo}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{student.name}</h3>
              <p>{student.rollNo}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
