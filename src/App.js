import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./component/ShortComponent/navbar/NavbarItem/Home";

import Men from "./component/ShortComponent/navbar/NavbarItem/Men";

import Kids from "./component/ShortComponent/navbar/NavbarItem/Kids";

import Women from "./component/ShortComponent/navbar/NavbarItem/Women";

import HomeLiving from "./component/ShortComponent/navbar/NavbarItem/Home&Living";

import Beauty from "./component/ShortComponent/navbar/NavbarItem/Beauty";

import Bag from "./component/ShortComponent/navbar/NavbarItem/Bag";

import Proflie from "./component/ShortComponent/navbar/NavbarItem/Proflie";

import Studio from "./component/ShortComponent/navbar/NavbarItem/Studio";

import Wishlist from "./component/ShortComponent/navbar/NavbarItem/Wishlist";

import NavRouterPage from "./component/ShortComponent/navRouterPage/NavRouterPage";
import Footer from "./component/footer/Footer";

import "./App.css";
const App = () => {
  return (
    <>
      <div className="parent-container-of-myntraclone">
        <NavRouterPage />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Man" element={<Men />}></Route>
          <Route path="/Woman" element={<Women />}></Route>
          <Route path="/Kids" element={<Kids />}></Route>
          <Route path="/HOMELiving" element={<HomeLiving />}></Route>
          <Route path="/Studio" element={<Studio />}></Route>
          <Route path="/Beauty" element={<Beauty />}></Route>
          {/* {rightSideNavbar} */}
          <Route path="/Profile" element={<Proflie />}></Route>
          <Route path="/Bag" element={<Bag />}></Route>
          <Route path="/Wishlist" element={<Wishlist />}></Route>
          <Route path="/order"></Route>
        </Routes>
        {/* <RightSideOffer /> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
