import { h } from 'preact';
import style from './style';

const contact = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>Contactanos</h1>
			<div class={style.formWrapper}>
				<p class={style.pageBody}>
					Contacto
				</p>
				<form name="contact" method="POST" data-netlify="true" action="/contact/success" data-netlify-honeypot="bot-field">
					<input type="hidden" name="form-name" value="contact" />
					<p>
						<input type="text" name="name" placeholder="Nombre" required />
					</p>
					<p>
						<input type="email" name="email" placeholder="E-Mail" required />
					</p>
					<p>
						<textarea name="message" placeholder="Mensaje" />
					</p>
					<p>
						<button type="submit">Enviar</button>
					</p>
				</form>
			</div>
		</div>
	);
};

export default contact;
