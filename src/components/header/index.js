import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style";

const Header = () => (
  <header class={style.header}>
    <Link href="/">
      <img style={{height: "100%"}} src="/assets/logo.png" alt="Logo" />
    </Link>
    <nav>
      <Link activeClassName={style.active} href="/inventario">
        Inventario
      </Link>
      <Link activeClassName={style.active} href="/contacto">
        Contacto
      </Link>
    </nav>
  </header>
);

export default Header;
