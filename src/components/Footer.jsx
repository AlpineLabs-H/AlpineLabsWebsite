import { A } from "@solidjs/router";
import logoUrl from "../assets/logo-blue.svg?url";

export default function Footer() {
  return (
    <footer>
      <A href="/" class="footer-brand" aria-label="Alpine Labs home">
        <img src={logoUrl} alt="" class="footer-logo-mark" width="400" height="223" />
      </A>
      <ul class="footer-links">
        <li><A href="/products">Products</A></li>
        <li><A href="/#about">About</A></li>
        <li><a href="https://github.com/AlpineLabs-H" target="_blank" rel="noopener">GitHub</a></li>
        <li><a href="https://nvp.alpine-labs.net" target="_blank" rel="noopener">NVP</a></li>
      </ul>
      <span class="footer-copy">© 2026 AlpineLabs-H</span>
    </footer>
  );
}
