import ItemCategory from "../itemCategory";
import "./style.css";

const CategoryMenu = ({ prefix, categories }) => {
  return (
    <div>
      <divn className="category-container mt-2">
        <ItemCategory prefix={prefix} categories={categories} />
      </divn>
    </div>
  );
};

export default CategoryMenu;
