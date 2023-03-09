import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";

const Home = () => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	return (
		<div>
			<div id="logo-carousel" class="carousel slide">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img style={{maxHeight: "70vh", objectFit: "cover"}} src="https://picsum.photos/2000" class="d-block w-100" />
					</div>
					<div class="carousel-item">
						<img style={{maxHeight: "70vh", objectFit: "cover"}} src="https://picsum.photos/2000" class="d-block w-100" />
					</div>
					<div class="carousel-item">
						<img style={{maxHeight: "70vh", objectFit: "cover"}} src="https://picsum.photos/2000" class="d-block w-100" />
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#logo-carousel" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#logo-carousel" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};

export default Home;
