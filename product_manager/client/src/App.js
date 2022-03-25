import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import NewProduct from "./views/NewProduct";
import ProductDescription from "./views/ProductDescription";
import EditProduct from "./views/EditProduct";

function App() {
  return (
    // this will show up on the website when it loads
    <BrowserRouter>
      <div class="container mt-5">
        <h1>Product Manager</h1>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/product/new">
            <NewProduct />
          </Route>
          <Route exact path="/product/edit/:id">
            <EditProduct />
          </Route>
          <Route exact path="/product/:id">
            <ProductDescription />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
