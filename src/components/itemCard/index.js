import { Link } from "preact-router/match";
import ReactMarkdown from "react-markdown";

const ItemCard = ({ title, description, image, itemLink }) => {
  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  return (
    <div class="card" style="width: 18rem;">
      <img
        class="card-img-top card-image-container"
        src={image}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">
          <ReactMarkdown children={truncatedDescription}></ReactMarkdown>
        </p>
        <Link href={itemLink} class="btn btn-primary">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};
export default ItemCard;
