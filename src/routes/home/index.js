import { useEffect } from "preact/hooks";
import ItemCard from "../../components/itemCard";
import CarouselComponent from "../../components/carousel";

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
		'https://picsum.photos/2000/800',
		'https://picsum.photos/2000/800',
		'https://picsum.photos/2000/800',
	]

  return (
    <div>
			<CarouselComponent images={carouselImages} />
      <ItemCard title={"Test"} description={"This is a test"} />
    </div>
  );
};

export default Home;
