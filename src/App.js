import React from "react";

import Routes from "./routes/routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


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
// TODO - Icons - Tooltip
// TODO - DarkTheme - ArcoIris Theme
// TODO - Multilingual
// TODO - Aum Icon
// TODO - Footer's Links
// TODO - Close Side Menu ( !== display : none / visibility : hidden) when screen resizes (up)
// TODO - Read.me



const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes />
      <Footer/>
    </React.Fragment>
  );
};

export default App;
