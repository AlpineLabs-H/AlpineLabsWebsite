import { A } from "@solidjs/router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div class="grid-bg" />
      <Nav />

      {/* HERO */}
      <section class={styles.hero}>
        <div class={styles.badge}>
          <div class={styles.badgeDot} />
          open source software · AlpineLabs-H
        </div>
        <h1>
          Tools built for<br />
          <em class={styles.accent}>developers.</em>
        </h1>
        <p class={styles.sub}>
          Alpine Labs is a personal open source org. Small, focused tools that solve real problems — starting with the Neovim ecosystem.
        </p>
        <div class={styles.ctas}>
          <A href="/products" class="btn-lg btn-lg-blue">See products →</A>
          <a href="https://github.com/AlpineLabs-H" target="_blank" rel="noopener" class="btn-lg btn-lg-ghost">GitHub org</a>
        </div>
      </section>

      <hr class="divider" />

      {/* PRODUCTS */}
      <section class="section" id="products">
        <div class="sec-eyebrow">// products</div>
        <h2 class="sec-title">What we're building.</h2>
        <p class="sec-sub">Each project is a standalone tool with its own docs and subdomain.</p>

        <div class={styles.productGrid}>
          <a href="https://nvp.alpine-labs.net" target="_blank" rel="noopener" class={styles.productCard} style="border-color: rgba(74,158,255,0.25)">
            <div class={styles.prodHeader}>
              <div class={`${styles.prodIcon} ${styles.piGreen}`}>NV</div>
              <span class="badge b-live">● live</span>
            </div>
            <div class={styles.prodName}>NVP</div>
            <p class={styles.prodDesc}>A package manager for Neovim plugins and configs. GitHub OAuth, typed C# API, C++ CLI — install and publish packages from the terminal.</p>
            <div class={styles.prodStack}>
              <span class="tag">.NET 9</span>
              <span class="tag">C++</span>
              <span class="tag">RavenDB</span>
              <span class="tag">CMake</span>
            </div>
            <span class={styles.prodLink}>nvp.alpine-labs.net →</span>
          </a>

          <div class={styles.productCard}>
            <div class={styles.prodHeader}>
              <div class={`${styles.prodIcon} ${styles.piMuted}`}>?</div>
              <span class="badge b-soon">coming soon</span>
            </div>
            <div class={styles.prodName}>Next project</div>
            <p class={styles.prodDesc}>Something new is in the works. Watch the GitHub org for updates.</p>
            <div class={styles.prodStack}>
              <span class="tag">TBD</span>
            </div>
            <span class={`${styles.prodLink} ${styles.prodLinkMuted}`}>github.com/AlpineLabs-H →</span>
          </div>
        </div>
      </section>

      <hr class="divider" />

      {/* ABOUT */}
      <section class="section" id="about">
        <div class="sec-eyebrow">// about</div>
        <h2 class="sec-title">Who's behind this.</h2>
        <div class={styles.aboutGrid}>
          <div class={styles.aboutText}>
            <p>Alpine Labs is a personal open source org run by a developer with a focus on systems programming, tooling, and developer experience.</p>
            <p>Projects are built with C#, C++, Python, and whatever fits the job. The goal is simple: write tools that are actually useful and release them openly.</p>
            <p>If you find something useful, a star on GitHub goes a long way.</p>
            <a href="https://github.com/AlpineLabs-H" target="_blank" rel="noopener" class="btn-lg btn-lg-ghost" style="font-size:13px;padding:9px 18px;margin-top:1.5rem">github.com/AlpineLabs-H →</a>
          </div>
          <div class={styles.statCol}>
            <div class={styles.statBox}>
              <div class={styles.statNum}>1<span>+</span></div>
              <div class={styles.statLabel}>active projects</div>
            </div>
            <div class={styles.statBox}>
              <div class={styles.statNum}>3<span>+</span></div>
              <div class={styles.statLabel}>languages used (C#, C++, Python)</div>
            </div>
            <div class={styles.statBox}>
              <div class={styles.statNum}>100<span>%</span></div>
              <div class={styles.statLabel}>open source</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div class={styles.cta}>
        <div class={styles.ctaGlow} />
        <div>
          <h2>Check out NVP.</h2>
          <p>The first Alpine Labs product · nvp.alpine-labs.net</p>
        </div>
        <div class={styles.ctaBtns}>
          <a href="https://github.com/AlpineLabs-H/NVP" target="_blank" rel="noopener" class="btn-lg btn-lg-ghost">GitHub</a>
          <a href="https://nvp.alpine-labs.net" target="_blank" rel="noopener" class="btn-lg btn-lg-blue">nvp.alpine-labs.net →</a>
        </div>
      </div>

      <Footer />
    </>
  );
}
