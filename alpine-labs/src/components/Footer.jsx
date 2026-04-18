import { A } from "@solidjs/router";

export default function Footer() {
  return (
    <footer>
      <div class="footer-brand">
        <div class="logo-icon" style="width:20px;height:20px;border-radius:4px;font-size:9px">AL</div>
        alpine-labs
      </div>
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
