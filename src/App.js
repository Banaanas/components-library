import React from "react";

import Routes from "./routes/routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


// TODO - Github
// TODO - Make submenu appear in SideBar
// TODO - Close SideBar, if Open, when resizing and NavBar appears
// TODO - CSS Shapes (eg. waves)
// TODO - Swipeable Menu
// TODO - Change Burger Animation
// TODO - Toggle Theme Colors - https://jxnblk.com/
// TODO - Hover Button
// TODO - Logo with Side Menu
// TODO - Semantic HTML
// TODO - Accessibility
// TODO - Animation : Pages Transition
// TODO - Popper
// TODO - Icons - Tooltip
// TODO - DarkTheme - ArcoIris Theme
// TODO - Multilingual
// TODO - Aum Icon
// TODO - Footer's Links
// TODO - Close Side Menu ( !== display : none / visibility : hidden) when screen resizes (up)
// TODO - Read.me
// TODO - Header - Position fixed ?
// TODO - Modify max-width: ${({ theme }) => theme.breakpoints.sm
// where it is, and chose precise value
// TODO - CSS will-change property



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
