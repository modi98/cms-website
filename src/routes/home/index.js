import { usePrerenderData } from "@preact/prerender-data-provider";
import { useEffect } from "preact/hooks";
import ItemButton from "../../components/button";
import CarouselComponent from "../../components/carousel";
import ItemCard from "../../components/itemCard";
import SearchBar from "../../components/searchBar";
import ProductsComponent from "../../components/searchProducts";


const Home = (props) => {
  /**
   * Netlify CMS's accept invite link land on home page.
   * This redirection takes it to the right place(/admin).
   */
  const [data, isLoading] = usePrerenderData(props);

  useEffect(() => {
    if (
      window !== undefined &&
      window.location.href.includes("#invite_token")
    ) {
      const { href } = window.location;
      window.location.href = `${href.substring(
        0,
        href.indexOf("#")
      )}admin${href.substring(href.indexOf("#"))}`;
    }
  }, []);

  const carouselImages = [
    "https://picsum.photos/2000/801",
    "https://picsum.photos/2000/802",
    "https://picsum.photos/2000/803",
  ];

  return (
    <div>
      <div className="mb-2">
        <CarouselComponent images={carouselImages} />
      </div>
    </div>
  );
};

export default Home;
