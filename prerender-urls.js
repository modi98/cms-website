const { generateFileList } = require('./src/crawler');
const { join } = require('path');
const fs = require('fs');
const parseMD = require('parse-md').default;

const [categories, images, products] = generateFileList(join(__dirname, 'content')).nodes;
module.exports = () => {
	const pages = [
		{
			url: '/',
			seo: {
				cover: '/assets/profile.jpg'
			}
		},
		{ url: '/contact/' },
		{ url: '/contact/success' }
	];

	// adding products list posts page
	pages.push({
		url: '/products/',
		products: products,
		categories: categories,
	});

	return pages;
};
