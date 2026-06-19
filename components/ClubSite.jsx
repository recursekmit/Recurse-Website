"use client";

import { useSiteInteractions } from "./useSiteInteractions";

export default function ClubSite() {
  useSiteInteractions();

  return (
    <>
    <a className="skip-link" href="#main-content">Skip to content</a>

    <div className="boot-screen" aria-hidden="true">
      <div className="boot-screen__inner">
        <p>RECURSE BOOTLOADER // 2026</p>
        <div className="boot-line"><span>Loading curiosity</span><b>[OK]</b></div>
        <div className="boot-line"><span>Mounting ideas</span><b>[OK]</b></div>
        <div className="boot-line"><span>Starting community</span><b>[OK]</b></div>
        <div className="boot-progress"><span></span></div>
      </div>
    </div>

    <header className="site-header" data-header>
      <a className="brand" href="#top" aria-label="Recurse home">
        <span className="brand__mark" aria-hidden="true">R/</span>
        <span className="brand__name">RECURSE</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#impact">Impact</a>
        <a href="#gallery">Gallery</a>
      </nav>

      <a className="header-cta" href="#join">Join the loop <span>↗</span></a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded="false"
        data-menu-toggle
      >
        <span></span><span></span>
      </button>

      <nav className="mobile-nav" aria-label="Mobile navigation" data-mobile-nav>
        <a href="#about">01 / About</a>
        <a href="#events">02 / Events</a>
        <a href="#impact">03 / Impact</a>
        <a href="#gallery">04 / Gallery</a>
        <a href="#join">05 / Join</a>
      </nav>
    </header>

    <main id="main-content">
      <section className="hero" id="top">
        <canvas className="hero-network" data-network aria-hidden="true"></canvas>
        <div className="hero-grid" aria-hidden="true"></div>

        <div className="hero__eyebrow">
          <span className="status-dot"></span>
          KMIT TECHNICAL CLUB / SYSTEM ONLINE
        </div>

        <div className="hero__content">
          <p className="hero__prompt">recurse@kmit:~$ run the_future</p>
          <h1>
            TOO CURIOUS
            <span>TO STOP.</span>
          </h1>
          <div className="hero__bottom">
            <p>
              We code, build, compete, experiment, and turn curiosity into
              things that exist beyond the classroom.
            </p>
            <div className="hero__actions">
              <a className="button button--solid" href="#events">
                Explore the chaos <span>↓</span>
              </a>
              <a className="button button--ghost" href="#about">What is Recurse?</a>
            </div>
          </div>
        </div>

        <div className="hero__meta">
          <div>
            <span>FOCUS</span>
            <b>CS + ECE</b>
          </div>
          <div>
            <span>MODE</span>
            <b>BUILD / BREAK / REPEAT</b>
          </div>
          <div>
            <span>SCROLL</span>
            <b className="scroll-glyph">↓</b>
          </div>
        </div>

        <div className="hero-ticker" aria-label="Club focus areas">
          <div className="hero-ticker__track">
            <span>CODE</span><i>+</i><span>CREATE</span><i>+</i><span>COMPETE</span
            ><i>+</i><span>CONNECT</span><i>+</i><span>CODE</span><i>+</i
            ><span>CREATE</span><i>+</i><span>COMPETE</span><i>+</i
            ><span>CONNECT</span><i>+</i>
          </div>
        </div>
      </section>

      <section className="section manifesto" id="about">
        <div className="section-label reveal">
          <span>01</span>
          <p>Why we exist</p>
        </div>

        <div className="manifesto__statement reveal">
          <p className="terminal-kicker">&gt; recurse.mission</p>
          <h2>
            THE CURRICULUM IS<br />
            <span>ONLY THE START.</span>
          </h2>
        </div>

        <div className="manifesto__grid">
          <div className="manifesto__copy reveal">
            <p className="lead">
              Recurse gives students the room, resources, and people to pursue
              computer science and electronics outside the limits of a
              classroom.
            </p>
            <p>
              It is a place to get technically dangerous—in the best way.
              Learn from peers. Ship ambitious ideas. Compete at a higher
              level. Find the people who care about the same obscure problem
              you do.
            </p>
          </div>

          <div className="manifesto__stats reveal" aria-label="Club overview">
            <article>
              <strong data-count="7">00</strong><sup>+</sup>
              <p>Event formats</p>
            </article>
            <article>
              <strong data-count="2">00</strong>
              <p>Core disciplines</p>
            </article>
            <article>
              <strong data-count="1">00</strong>
              <p>National flagship</p>
            </article>
            <article>
              <strong>∞</strong>
              <p>Reasons to build</p>
            </article>
          </div>
        </div>

        <div className="discipline-track reveal">
          <div className="discipline">
            <span>01A</span>
            <h3>COMPUTE</h3>
            <p>Programming · AI/ML · Web · Security · Competitive coding</p>
          </div>
          <div className="merge-node" aria-hidden="true">
            <span></span><b>MERGE</b><span></span>
          </div>
          <div className="discipline">
            <span>01B</span>
            <h3>ENGINEER</h3>
            <p>Electronics · IoT · Circuits · Embedded systems · Hardware</p>
          </div>
        </div>
      </section>

      <section className="flagship">
        <div className="flagship__visual reveal">
          <div className="flagship__noise"></div>
          <div className="flagship__rings" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <div className="flagship__code" aria-hidden="true">
            <p>01 &nbsp; DEFINE PROBLEM</p>
            <p>02 &nbsp; FIND YOUR PEOPLE</p>
            <p>03 &nbsp; BUILD THE IMPOSSIBLE</p>
            <p>04 &nbsp; SHIP BEFORE DAWN</p>
          </div>
          <p className="flagship__stamp">NATIONAL<br />FLAGSHIP<br />HACKATHON</p>
          <h2>CODE<span>NOVATE</span></h2>
        </div>

        <div className="flagship__info reveal">
          <div>
            <p className="terminal-kicker">&gt; featured_event.exe</p>
            <span className="live-tag"><i></i> FLAGSHIP</span>
          </div>
          <h3>ONE PROBLEM.<br />A THOUSAND WAYS IN.</h3>
          <p>
            Codenovate is KMIT's national flagship hackathon: a high-pressure
            arena for ambitious ideas, sharp execution, and teams that refuse
            to settle for the obvious answer.
          </p>
          <a className="text-link" href="#join">
            Track the next edition <span>↗</span>
          </a>
        </div>
      </section>

      <section className="section events" id="events">
        <div className="section-label reveal">
          <span>02</span>
          <p>What we run</p>
        </div>

        <div className="section-heading reveal">
          <div>
            <p className="terminal-kicker">&gt; events --all</p>
            <h2>NOT YOUR STANDARD<br />CLUB CALENDAR.</h2>
          </div>
          <p>
            From national hackathons to campus-scale games, every format is
            designed to make people think, move, build, and remember.
          </p>
        </div>

        <div className="event-filters reveal" role="group" aria-label="Filter events">
          <button className="is-active" type="button" data-filter="all">ALL_07</button>
          <button type="button" data-filter="flagship">FLAGSHIP</button>
          <button type="button" data-filter="community">COMMUNITY</button>
          <button type="button" data-filter="play">PLAY</button>
        </div>

        <div className="event-grid" data-event-grid>
          <article className="event-card event-card--large reveal" data-category="flagship">
            <div className="event-card__top">
              <span>001 / FLAGSHIP</span><span>↗</span>
            </div>
            <div className="event-card__art event-card__art--code">
              <span>&lt;/&gt;</span>
              <div className="code-lines" aria-hidden="true">
                <i></i><i></i><i></i><i></i>
              </div>
            </div>
            <div className="event-card__body">
              <p>National Hackathon</p>
              <h3>CODENOVATE</h3>
              <span>Ideas meet execution. Sleep becomes optional.</span>
            </div>
          </article>

          <article className="event-card reveal" data-category="play">
            <div className="event-card__top">
              <span>002 / SAANJH '26</span><span>↗</span>
            </div>
            <div className="event-card__art event-card__art--kbc">
              <div className="kbc-orbit"><i></i><i></i><i></i><i></i></div>
              <b>?</b>
            </div>
            <div className="event-card__body">
              <p>Code Quiz</p>
              <h3>KBC</h3>
              <span>Kaun Banega Codepati. Lock kiya jaye?</span>
            </div>
          </article>

          <article className="event-card reveal" data-category="play">
            <div className="event-card__top">
              <span>003 / SAANJH '26</span><span>↗</span>
            </div>
            <div className="event-card__art event-card__art--runner">
              <div className="runner" aria-hidden="true">
                <i></i><i></i><i></i>
              </div>
              <div className="runner-track"></div>
            </div>
            <div className="event-card__body">
              <p>IRL Challenge</p>
              <h3>SUBWAY SURFERS</h3>
              <span>The game escaped the screen and took over campus.</span>
            </div>
          </article>

          <article className="event-card reveal" data-category="play">
            <div className="event-card__top">
              <span>004 / QUEST</span><span>↗</span>
            </div>
            <div className="event-card__art event-card__art--coin">
              <div className="coin">$</div>
              <div className="radar" aria-hidden="true"></div>
            </div>
            <div className="event-card__body">
              <p>Strategy Event</p>
              <h3>COINQUEST</h3>
              <span>Clues, logic, pressure, and the next smart move.</span>
            </div>
          </article>

          <article className="event-card event-card--wide reveal" data-category="community">
            <div className="event-card__top">
              <span>005 / WORKSHOP SERIES</span><span>↗</span>
            </div>
            <div className="event-card__art event-card__art--reboot">
              <p>WHEN STUCK:</p>
              <strong>REBOOT<span className="blink">_</span></strong>
              <div className="load-bar"><i></i></div>
            </div>
            <div className="event-card__body">
              <p>Hands-on Workshops</p>
              <h3>REBOOT</h3>
              <span>Practical sessions. Useful skills. Zero passive learning.</span>
            </div>
          </article>

          <article className="event-card reveal" data-category="community">
            <div className="event-card__top">
              <span>006 / ALWAYS ON</span><span>↗</span>
            </div>
            <div className="event-card__art event-card__art--cig">
              <div className="cluster" aria-hidden="true">
                <i></i><i></i><i></i><i></i><i></i>
              </div>
              <span>CIG</span>
            </div>
            <div className="event-card__body">
              <p>Peer Community</p>
              <h3>COMMON INTEREST GROUPS</h3>
              <span>Find your niche. Then find your people.</span>
            </div>
          </article>

          <article className="event-card reveal" data-category="play">
            <div className="event-card__top">
              <span>007 / FUN × TECH</span><span>↗</span>
            </div>
            <div className="event-card__art event-card__art--engine">
              <div className="gear" aria-hidden="true">✣</div>
              <span>ENGINEER'D</span>
            </div>
            <div className="event-card__body">
              <p>Tech Playground</p>
              <h3>ENGINEER'D</h3>
              <span>Engineering instincts, chaotic challenges.</span>
            </div>
          </article>
        </div>
      </section>

      <section className="impact" id="impact">
        <div className="impact__header reveal">
          <div className="section-label section-label--light">
            <span>03</span>
            <p>The output</p>
          </div>
          <h2>WE DON'T COUNT<br />ATTENDANCE.<br /><span>WE COUNT IMPACT.</span></h2>
        </div>

        <div className="impact__content">
          <div className="impact__copy reveal">
            <p className="terminal-kicker">&gt; impact.log</p>
            <p>
              The real metric is what happens after an event: a first project
              shipped, a teammate found, a competition entered, a skill that
              finally clicks.
            </p>
            <a className="text-link text-link--dark" href="#gallery">
              See the evidence <span>↓</span>
            </a>
          </div>

          <div className="impact__log reveal">
            <article>
              <span>01</span>
              <div>
                <h3>EXPOSURE</h3>
                <p>Students meet tools, domains, and possibilities beyond class.</p>
              </div>
              <b>→</b>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>EXPERIENCE</h3>
                <p>Ideas become prototypes through real constraints and deadlines.</p>
              </div>
              <b>→</b>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>COMMUNITY</h3>
                <p>People with the same interests stop building alone.</p>
              </div>
              <b>→</b>
            </article>
            <article>
              <span>04</span>
              <div>
                <h3>MOMENTUM</h3>
                <p>The event ends. The ambition does not.</p>
              </div>
              <b>↗</b>
            </article>
          </div>
        </div>
      </section>

      <section className="section cig-section">
        <div className="section-label reveal">
          <span>04</span>
          <p>Find your people</p>
        </div>

        <div className="section-heading section-heading--cig reveal">
          <div>
            <p className="terminal-kicker">&gt; groups.connect()</p>
            <h2>OBSESS OVER<br />SOMETHING TOGETHER.</h2>
          </div>
          <p>
            Common Interest Groups are smaller circles for people exploring
            similar topics. Learn together, share resources, and turn
            half-formed ideas into actual work.
          </p>
        </div>

        <div className="cig-list reveal">
          <article>
            <span>GROUP_01</span>
            <h3>WEB / APP</h3>
            <p>Interfaces, systems, products.</p>
            <i>↗</i>
          </article>
          <article>
            <span>GROUP_02</span>
            <h3>AI / ML</h3>
            <p>Models, data, experiments.</p>
            <i>↗</i>
          </article>
          <article>
            <span>GROUP_03</span>
            <h3>COMPETITIVE CODE</h3>
            <p>Problems, patterns, speed.</p>
            <i>↗</i>
          </article>
          <article>
            <span>GROUP_04</span>
            <h3>CIRCUITS / IoT</h3>
            <p>Hardware that talks back.</p>
            <i>↗</i>
          </article>
          <article>
            <span>GROUP_05</span>
            <h3>CYBERSECURITY</h3>
            <p>Break it. Understand it. Secure it.</p>
            <i>↗</i>
          </article>
        </div>
        <p className="content-note reveal">
          <span>CONTENT NOTE</span> CIG names above are editable placeholders
          until the active group roster is confirmed.
        </p>
      </section>

      <section className="gallery" id="gallery">
        <div className="gallery__heading reveal">
          <div className="section-label section-label--overlay">
            <span>05</span>
            <p>Proof we were here</p>
          </div>
          <h2>THE BUILD.<br />THE BUZZ.<br /><span>THE PEOPLE.</span></h2>
          <p>Photo placeholders ready for your real event archive.</p>
        </div>

        <div className="gallery-grid">
          <figure className="gallery-item gallery-item--tall reveal">
            <div className="gallery-placeholder gallery-placeholder--one">
              <span>ADD PHOTO</span><b>01</b>
            </div>
            <figcaption>Codenovate / Finale stage</figcaption>
          </figure>
          <figure className="gallery-item reveal">
            <div className="gallery-placeholder gallery-placeholder--two">
              <span>ADD PHOTO</span><b>02</b>
            </div>
            <figcaption>KBC / Saanjh '26</figcaption>
          </figure>
          <figure className="gallery-item gallery-item--wide reveal">
            <div className="gallery-placeholder gallery-placeholder--three">
              <span>ADD PHOTO</span><b>03</b>
            </div>
            <figcaption>Reboot / Workshop in progress</figcaption>
          </figure>
          <figure className="gallery-item reveal">
            <div className="gallery-placeholder gallery-placeholder--four">
              <span>ADD PHOTO</span><b>04</b>
            </div>
            <figcaption>Subway Surfers / On the run</figcaption>
          </figure>
          <figure className="gallery-item gallery-item--tall reveal">
            <div className="gallery-placeholder gallery-placeholder--five">
              <span>ADD PHOTO</span><b>05</b>
            </div>
            <figcaption>Recurse / The people behind it</figcaption>
          </figure>
        </div>
      </section>

      <section className="join" id="join">
        <div className="join__rings" aria-hidden="true">
          <i></i><i></i><i></i>
        </div>
        <p className="terminal-kicker reveal">&gt; next_member --you</p>
        <h2 className="reveal">DON'T JUST<br />WATCH THE LOOP.</h2>
        <p className="join__accent reveal">ENTER IT<span className="blink">_</span></p>
        <p className="join__copy reveal">
          Bring the curiosity. We’ll bring the people, the problems, and a
          reason to build something bigger.
        </p>
        <div className="join__actions reveal">
          <a
            className="button button--dark"
            href="https://www.instagram.com/recurse.official/"
            target="_blank"
            rel="noreferrer"
          >
            Follow @recurse.official <span>↗</span>
          </a>
          <a className="button button--line" href="mailto:recurse@kmit.in">
            Talk to the team
          </a>
        </div>
        <p className="content-note content-note--join reveal">
          Replace the email and add the recruitment form URL before launch.
        </p>
      </section>

      <section className="terminal-section" aria-label="Interactive Recurse terminal">
        <div className="terminal-window reveal">
          <div className="terminal-window__bar">
            <div><i></i><i></i><i></i></div>
            <p>visitor@recurse: ~</p>
            <span>⌁</span>
          </div>
          <div className="terminal-window__body" data-terminal-output>
            <p className="terminal-response">RECURSE CLI v1.0. Type <b>help</b> to explore.</p>
          </div>
          <form className="terminal-form" data-terminal-form>
            <label htmlFor="terminal-input">visitor@recurse:~$</label>
            <input
              id="terminal-input"
              name="command"
              type="text"
              autoComplete="off"
              spellCheck="false"
              aria-label="Terminal command"
            />
            <span className="terminal-caret" aria-hidden="true"></span>
          </form>
        </div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="footer__brand">
        <a className="brand brand--footer" href="#top">
          <span className="brand__mark">R/</span>
          <span className="brand__name">RECURSE</span>
        </a>
        <p>KMIT's technical club.<br />Built by the terminally curious.</p>
      </div>
      <div className="footer__links">
        <div>
          <span>NAVIGATE</span>
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#impact">Impact</a>
          <a href="#gallery">Gallery</a>
        </div>
        <div>
          <span>CONNECT</span>
          <a
            href="https://www.instagram.com/recurse.official/"
            target="_blank"
            rel="noreferrer"
            >Instagram ↗</a
          >
          <a href="mailto:recurse@kmit.in">Email ↗</a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© <span data-year></span> RECURSE / KMIT</p>
        <p>CODE. BUILD. BREAK. REPEAT.</p>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>

    </>
  );
}
