import { useEffect } from "preact/hooks";
import ItemCard from "../../components/itemCard";
import CarouselComponent from "../../components/carousel";
import SearchBar from "../../components/searchBar";

const Home = () => {
  /**
   * Netlify CMS's accept invite link land on home page.
   * This redirection takes it to the right place(/admin).
   */

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
    "https://picsum.photos/2000/800",
    "https://picsum.photos/2000/800",
    "https://picsum.photos/2000/800",
  ];

  return (
    <div>
      <div className="mb-2">
        <CarouselComponent images={carouselImages} />
      </div>
      
      <div className="mb-2">
        <SearchBar />
      </div>

      <div className="d-flex justify-content-evenly flex-wrap mb-2">
        <div className="m-2">
          <ItemCard title={"Test"} description={"This is a test"} />
        </div>
        <div className="m-2">
          <ItemCard title={"Test"} description={"This is a test"} />
        </div>
        <div className="m-2">
          <ItemCard title={"Test"} description={"This is a test"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
