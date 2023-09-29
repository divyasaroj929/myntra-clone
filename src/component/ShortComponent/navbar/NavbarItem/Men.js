import React from "react";

import MenNavbarShop from "../../../mensection/Shop/MenNavbarShop";
import Filter from "../../../mensection/filter/Filter";
import mens from "../../../Image/mens.jpg";
import Picture from "../../../mensection/Shop/Picture";

import "../../navbar/NavbarItem/menindex.css";
const Men = () => {
  const row = [
    {
      name: "chamistey",
      price: 55,
      size: "sm,s,l,xl,xxl,xxxl",
      img: mens,
      para: "XS, S, M, L, XL, XXL, 3X",
    },
    {
      name: "chamistey",
      price: "385$",
      size: "s,m,l,xl,xxl,xxxl",
      img: mens,
    },
    {
      name: "chamistey",
      price: "35$",
      size: "sm,s,l,xl,xxl,xxxl",
      img: mens,
    },
    { name: "chamistey", price: "59$", img: mens, size: "sm,s,l,xl,xxl,xxxl" },

    {
      name: "chamistey",
      price: "85$",
      img: mens,
      size: "sm,s,l,xl,xxl,xxxl",
    },
    {
      img: mens,
      // img: six,

      price: "05$",
    },
    // {
    //   name: "chamistey",
    //   price: "35$",
    //   size: "sm,s,l,xl,xxl,xxxl",
    //   img: Tops,
    // },
    // { name: "chamistey", price: "59$", size: "sm,s,l,xl,xxl,xxxl" },

    // { name: "chamistey", price: "85$", size: "sm,s,l,xl,xxl,xxxl", img: six },
    // {
    //   price: "05$",
    // },
    // { name: "chamistey", price: "59$", size: "sm,s,l,xl,xxl,xxxl" },

    // { name: "chamistey", price: "85$", size: "sm,s,l,xl,xxl,xxxl", img: six },
  ];

  const List = [
    { title: "T-shirt", className: "list" },
    {
      title: "jeans",
      className: "list",
    },
    {
      title: "Trousers",
      className: "list",
    },
    {
      title: "Sweaters",
      className: "list",
    },
    {
      title: "jeckets",
      className: "list",
    },
    {
      title: "Shorts",
      className: "list",
    },
    {
      title: "turck-Pants",
      className: "list",
    },
    {
      title: "Trousers",
      className: "list",
    },
  ];

  const list2 = [
    {
      title: "jeans",
      className: "list",
    },
    {
      title: "Trousers",
      className: "list",
    },
    {
      title: "Sweaters",
      className: "list",
    },
    {
      title: "jeckets",
      className: "list",
    },
  ];

  return (
    <>
      <div className="middle">
        <MenNavbarShop
          // crumbs={crumbs}
          // selected={selected}
          gendername="Mens Casual Wear  "
          count="6789$"
          heading="Filter"
          clearall="Clear-all"
          shortby="short-by"
          recommended="recommended"
        />
        <div className="first-div-filter">
          <div className="filter-border">
            <Filter FilterList={List} categroy="categroy" />
            <Filter FilterList={list2} categroy="data" />
          </div>
          <Picture priceData={row} />
        </div>
      </div>
    </>
  );
};

export default Men;
