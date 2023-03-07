import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<Link href="/"><h1>Logo empresa</h1></Link>
		<nav>
			<Link activeClassName={style.active} href="/inventario">Inventario</Link>
			<Link activeClassName={style.active} href="/contacto">Contacto</Link>
		</nav>
	</header>
);

export default Header;
