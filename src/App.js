import React from "react";

import Routes from "./routes/routes";
import Header from "./components/Header/Header";


// TODO - Github
// TODO - Close SideBar, if Open, when resizing and NavBar appears
// TODO - CSS Shapes (eg. waves)
// TODO - Swippeable Menu
// TODO - Change Burger Animation
// TODO - Hover Button
// TODO - Logo with Side Menu
// TODO - Semantic HTML
// TODO - Animation : Pages Transition
// TODO - Popper



const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes />
    </React.Fragment>
  );
};

export default App;
