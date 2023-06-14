import { Provider } from "@preact/prerender-data-provider";
import { Component, h } from "preact";
import { Router } from "preact-router";
import Header from "./header";
import Footer from "./footer";

// Code-splitting is automated for routes
import Contact from "../routes/contact";
import ContactSuccess from "../routes/contact-success";
import Home from "../routes/home";
import NotFoundPage from "../routes/notfound";
import Product from "../routes/product";
import Products from "../routes/products";
import CountryInventory from "../routes/country-inventory";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](https://github.com/preactjs/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render(props) {
    return (
      <Provider value={props}>
        <div id="app">
          <Header />
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <Products path="/inventario/" />
            <Products path="/inventario/:category" />
            <Products path="/mexico/inventario/:category" />
            <Products path="/usa/inventario/:category" />
            <Product path="/producto/:name" />
            <Contact path="/contacto/" />
            <ContactSuccess path="/contacto/success" />
            <CountryInventory path="/mexico/" />
            <CountryInventory path="/usa/" />
            <NotFoundPage type="404" default />
          </Router>
          <Footer />
        </div>
      </Provider>
    );
  }
}
