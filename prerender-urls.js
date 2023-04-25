const { generateFileList } = require("./src/crawler");
const { join } = require("path");

const [categories, images, products] = generateFileList(
  join(__dirname, "content")
).nodes;
module.exports = () => {
  const pages = [
    {
      url: "/",
      seo: {
        cover: "/assets/profile.jpg",
      },
    },
    { url: "/contact/" },
    { url: "/contact/success" },
  ];

  // adding products list posts page
  pages.push({
    url: "/",
    products: products,
    categories: categories,
  });

  pages.push({
    url: "/products/",
    products: products,
    categories: categories,
  });

  pages.push(
    ...products.edges.map((product) => {
      return {
        url: `/product/${product.id}`,
        seo: product.details,
        product: product,
      };
    })
  );

  return pages;
};
