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
						<img style={{maxHeight: "70vh", objectFit: "cover"}} src="https://picsum.photos/2005" class="d-block w-100" />
					</div>
					<div class="carousel-item">
						<img style={{maxHeight: "70vh", objectFit: "cover"}} src="https://picsum.photos/2006" class="d-block w-100" />
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
			<div class="row row-cols-1 row-cols-md-3 g-4" style={{marginTop: "10px"}}>
				<div class="col">
					<div class="card h-100">
						<img src="https://picsum.photos/2001" class="card-img-top" alt="..."></img>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100">
						<img src="https://picsum.photos/2002" class="card-img-top" alt="..."></img>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100">
						<img src="https://picsum.photos/2003" class="card-img-top" alt="..."></img>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	);
};

export default Home;
