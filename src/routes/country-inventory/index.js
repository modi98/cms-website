import { usePrerenderData } from "@preact/prerender-data-provider";
import CarouselComponent from "../../components/carousel";
import SearchMenu from "../../components/searchMenu";
import CategoryMenu from "../../components/categoryMenu";
import InventoryMeny from "../../components/inventoryMenu";

const CountryInventory = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  const carouselImages = [
    "/assets/cover-1.jpg",
    "/assets/cover-2.webp",
    "/assets/cover-3.webp",
  ];

  return (
    <>
      <div className="mb-2">
        <CarouselComponent images={carouselImages} />
      </div>
      <SearchMenu />
      <InventoryMeny />
      {!isLoading && data ? (
        <CategoryMenu prefix={data.prefix} categories={data?.categories} />
      ) : null}
    </>
  );
};

export default CountryInventory;
