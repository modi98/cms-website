import { useEffect } from "preact/hooks";
import ItemCard from "../../components/itemCard";
import CarouselComponent from "../../components/carousel";
import SearchBar from "../../components/searchBar";
import ItemButton from "../../components/button"

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
    "https://picsum.photos/2000/801",
    "https://picsum.photos/2000/802",
    "https://picsum.photos/2000/803",
  ];

  return (
    <div>
      <div className="mb-2">
        <CarouselComponent images={carouselImages} />
      </div>
      
      <div className="mb-2 d-flex">
        <div className="p-2 flex-grow-1">
          <SearchBar />
        </div>
        <div className="p-2">
          <ItemButton title={"Buscar"} />
        </div>
        
      </div>

      <div className="products-container mb-2">
        <div className="m-2">
          <ItemCard title={"Test"} description={"This is a test"} image={"https://picsum.photos/2000/801"} />
        </div>
        <div className="m-2">
          <ItemCard title={"Test"} description={"This is a test"} image={"https://picsum.photos/2000/802"} />
        </div>
        <div className="m-2">
          <ItemCard title={"Test"} description={"This is a test"} image={"https://picsum.photos/2000/803"} />
        </div>
        <div className="m-2">
          <ItemCard title={"Test"} description={"This is a test"} image={"https://picsum.photos/2000/803"} />
        </div>
        <div className="m-2">
          <ItemCard title={"Test"} description={"This is a test"} image={"https://picsum.photos/2000/803"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
