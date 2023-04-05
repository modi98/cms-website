import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style";

const Header = () => (
  <header class={style.header}>
    <Link href="/">
      <h1>Logo</h1>
    </Link>
    <nav>
      <Link activeClassName={style.active} href="/products">
        Inventario
      </Link>
      <Link activeClassName={style.active} href="/contact">
        Contacto
      </Link>
    </nav>
  </header>
);

export default Header;
