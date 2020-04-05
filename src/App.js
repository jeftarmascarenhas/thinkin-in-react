import React from "react";

import { shoes } from "./mocks";
import NavigationMenu from "./components/NavigationMenu";
import FilteredProduct from "./components/FilteredProduct";

// render navigation header [ok]
// render navigation menu [ok]
// render filtered product [] receive shoesData

function App() {
  return (
    <>
      <h1 className="logo">Nike</h1>
      <NavigationMenu />
      <FilteredProduct products={shoes} />
    </>
  );
}

export default App;
