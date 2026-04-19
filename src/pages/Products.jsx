import { createSignal, For } from "solid-js";
import { A } from "@solidjs/router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "./Products.module.css";

const GithubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const FILTERS = ["All", "Live", "In progress", "Coming soon"];

const PRODUCTS = [
  {
    id: "nvp",
    icon: "NV",
    iconClass: "piGreen",
    name: "NVP",
    subdomain: "nvp.alpine-labs.net",
    status: "live",
    badgeClass: "b-live",
    badgeLabel: "● live",
    desc: "A package manager for Neovim plugins and configs. Authenticate with GitHub, search the registry, and install packages directly to your Neovim config path — on Linux, WSL, or Windows. Backed by a .NET 9 Minimal API and a C++ CLI client.",
    tags: ["C# · .NET 9", "C++ CLI", "RavenDB", "GitHub OAuth", "CMake · vcpkg", "Linux · WSL · Windows"],
    href: "https://nvp.alpine-labs.net",
    github: "https://github.com/AlpineLabs-H/NVP",
  },
];

export default function Products() {
  const [filter, setFilter] = createSignal("All");

  const filtered = () => {
    if (filter() === "All") return PRODUCTS;
    const map = { Live: "live", "In progress": "wip", "Coming soon": "soon" };
    return PRODUCTS.filter(p => p.status === map[filter()]);
  };

  return (
    <>
      <div class="grid-bg" />
      <Nav />

      <div class={styles.pageHeader}>
        <div class={styles.breadcrumb}>
          <A href="/">alpine-labs.net</A>
          <span>/</span>
          <span style="color:var(--muted2)">products</span>
        </div>
        <h1>All products.</h1>
        <p>Open source tools built under the Alpine Labs org. Each project lives at its own subdomain.</p>
      </div>

      <div class={styles.filterRow}>
        <span class={styles.filterLabel}>filter:</span>
        <For each={FILTERS}>
          {(f) => (
            <button
              class={`${styles.filterBtn} ${filter() === f ? styles.filterBtnActive : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          )}
        </For>
      </div>

      <div class={styles.productList}>
        <For each={filtered()}>
          {(p) => (
            <div class={styles.prodRow} onClick={() => window.open(p.href, "_blank")}>
              <div class={styles.prodRowLeft}>
                <div class={`${styles.prodRowIcon} ${styles[p.iconClass]}`}>{p.icon}</div>
                <div class={styles.prodRowInfo}>
                  <div class={styles.prodRowTop}>
                    <span class={styles.prodRowName}>{p.name}</span>
                    <span class={styles.prodRowSub}>{p.subdomain}</span>
                    <span class={`badge ${p.badgeClass}`}>{p.badgeLabel}</span>
                  </div>
                  <p class={styles.prodRowDesc}>{p.desc}</p>
                  <div class={styles.prodRowTags}>
                    <For each={p.tags}>{(t) => <span class="tag">{t}</span>}</For>
                  </div>
                </div>
              </div>
              <div class={styles.prodRowRight}>
                <span class={styles.prodRowLink}>Visit site →</span>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener"
                  class={styles.prodRowGh}
                  onClick={(e) => e.stopPropagation()}
                >
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>
          )}
        </For>

        <div class={styles.comingSoonRow}>
          <div class={styles.csIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--muted)">
              <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
            </svg>
          </div>
          <div class={styles.csText}>
            <strong>More projects coming</strong>
            Watch github.com/AlpineLabs-H for new releases
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
