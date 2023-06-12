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
        cover: "/assets/logo.png",
      },
    },
    {
      url: "/contact/",
      seo: {
        cover: "/assets/logo.png",
      },
    },
    {
      url: "/contact/success",
      seo: {
        cover: "/assets/logo.png",
      },
    },
  ];

  // adding products list posts page
  pages.push({
    url: "/",
    products: products,
    categories: categories,
    seo: {
      cover: "/assets/logo.png",
    },
  });

  const filterData = {
    condition: {},
    manufacturers: {},
  };

  products.edges.forEach((product) => {
    if (product.details.condition in filterData.condition)
      filterData.condition[product.details.condition] += 1;
    else filterData.condition[product.details.condition] = 1;

    if (product.details.manufacturer in filterData.manufacturers)
      filterData.manufacturers[product.details.manufacturer] += 1;
    else filterData.manufacturers[product.details.manufacturer] = 1;
  });

  pages.push({
    url: "/inventario",
    products: products.edges,
    filters: filterData,
    seo: {
      cover: "/assets/logo.png",
    },
  });

  pages.push(
    ...categories.edges.map((category) => {
      const title = category.details.title;
      const filteredProducts = products.edges.filter(
        (product) => product.details.category === category.details.title
      );

      const filters = {
        condition: {},
        manufacturers: {},
      };

      filteredProducts.forEach((product) => {
        if (product.details.condition in filters.condition)
          filters.condition[product.details.condition] += 1;
        else filters.condition[product.details.condition] = 1;

        if (product.details.manufacturer in filters.manufacturers)
          filters.manufacturers[product.details.manufacturer] += 1;
        else filters.manufacturers[product.details.manufacturer] = 1;
      });

      return {
        url: `/inventario/${title.toLowerCase().replaceAll(" ", "-")}`,
        products: products.edges.filter(
          (product) => product.details.category === category.details.title
        ),
        filters,
        seo: {
          cover: "/assets/logo.png",
        },
      };
    })
  );

  pages.push(
    ...products.edges.map((product) => {
      return {
        url: `/product/${product.id}`,
        seo: product.details,
        product: product,
        seo: {
          cover: "/assets/logo.png",
        },
      };
    })
  );

  return pages;
};
