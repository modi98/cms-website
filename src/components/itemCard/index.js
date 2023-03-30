import { Link } from 'preact-router/match';
import ReactMarkdown from "react-markdown";

const ItemCard = ({ title, description, image, itemLink }) => (
	<div class="card" style="width: 18rem;">
    <img class="card-img-top card-image-container" src={image} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">
        <ReactMarkdown children={description}></ReactMarkdown>
      </p>
      <Link href={itemLink} class="btn btn-primary">Go somewhere</Link>
    </div>
  </div>
);

export default ItemCard;
