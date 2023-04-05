import { Provider } from "@preact/prerender-data-provider";
import { Component, h } from "preact";
import { Router } from "preact-router";
import Header from "./header";

// Code-splitting is automated for routes
import Contact from "../routes/contact";
import ContactSuccess from "../routes/contact-success";
import Home from "../routes/home";
import NotFoundPage from "../routes/notfound";
import Product from "../routes/product";
import Products from "../routes/products";

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
            <Products path="/products/" />
            <Product path="/product/:name" />
            <Contact path="/contact/" />
            <ContactSuccess path="/contact/success" />
            <NotFoundPage type="404" default />
          </Router>
        </div>
      </Provider>
    );
  }
}
