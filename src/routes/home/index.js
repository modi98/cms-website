import { usePrerenderData } from "@preact/prerender-data-provider";
import { useEffect } from "preact/hooks";
import CarouselComponent from "../../components/carousel";
import CategoryMenu from "../../components/categoryMenu";
import SearchMenu from "../../components/searchMenu";
import InventoryMeny from "../../components/inventoryMenu";

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
    "/assets/cover-1.jpg",
    "/assets/cover-2.webp",
    "/assets/cover-3.webp",
  ];

  return (
    <div>
      <div className="mb-2">
        <CarouselComponent images={carouselImages} />
      </div>
      <SearchMenu />
      <InventoryMeny />
      {!isLoading && data ? (
        <CategoryMenu categories={data?.categories?.edges} />
      ) : null}
    </div>
  );
};

export default Home;
