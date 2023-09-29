import React from "react";

import { NavLink } from "react-router-dom";

import DropDown from "../../DropDown/DropDown";

import "../navbar/mediaQ.css";

import "../navbar/navbar.css";
const navData = [
  {
    name: "Man",
    path: "/man",
    data: [
      [
        {
          className: "man",
          heading: "Indian & Fusion Wear",
          title: [
            "Kurtas & Suits",
            "Kurtis, Tunics & Tops",
            "Sarees",
            " Ethnic Wear",
            " Leggings",
            "Salwars & Churidars",
            "Skirts & Palazzos",
            "Dress Materials",
            "Lehenga Cholis",
            "Dupattas & Shawls",
            "Jackets",
          ],
        },
        {
          className: "man",
          heading: "Belts, Scarves & More",
          title: [],
        },
        { className: "man", heading: "Watches & Wearables", title: [] },
      ],
      [
        {
          className: "orange",
          className: "man",
          heading: "Western Wear",
          title: [
            "Dresses",
            "Tops",
            "Tshirts",
            "Jeans",
            "Trousers & Capris",
            "Shorts & Skirts",
            "Co-ords",
            "Playsuits",
            "Jumpsuits",
            "Shrugs",
            "Sweaters & Sweatshirts",
            "Jackets & Coats",
            "Blazers & Waistcoats",
          ],
        },
        { className: "man", heading: "Plus Size", title: [] },
      ],
      [
        {
          heading: "Maternity",
          className: "man",
          title: [],
        },
        {
          className: "man",
          heading: "Sunglasses & Frames",
          title: [],
        },
        {
          className: "man",
          heading: "Footwear",
          title: [
            "Flats",
            "Casual Shoes",
            "Heels",
            "Boots",
            "Sports Shoes & Floaters",
          ],
        },
        {
          className: "man",
          heading: "Sports & Active Wear",
          title: [
            "Clothing",
            "Footwear",
            "Sports Accessories",
            "Sports Equipment",
          ],
        },
      ],
      [
        {
          className: "man",
          heading: "Lingerie & Sleepwear",
          title: [
            "Bra",
            "Briefs",
            "Shapewear",
            "Sleepwear & Loungewear",
            "Swimwear",
            "Camisoles & Thermals",
          ],
        },
        {
          className: "man",
          heading: "Beauty & Personal",
          title: [
            "Care",
            "Makeup",
            "Skincare",
            "Premium Beauty",
            "Lipsticks",
            "Fragrances",
          ],
        },
      ],
      [
        {
          className: "man",
          heading: "Gadgets",
          title: [
            "Smart Wearables",
            "Fitness Gadgets",
            "Headphones",
            "Speakers",
          ],
        },
        {
          className: "man",
          heading: "Jewellery",
          title: ["Fashion Jewellery", "Fine Jewellery", "Earrings"],
        },
        {
          className: "man",
          heading: "Backpacks",
          title: [],
        },
        {
          className: "man",
          heading: "Handbags, Bags & Wallets",
          title: [],
        },
        {
          className: "man",
          heading: "Luggages & Trolleys",
          title: [],
        },
      ],
    ],
  },
  {
    name: "Woman",
    path: "/Woman",
    data: [
      [
        {
          className: "woman",
          heading: "Makeup",
          title: [
            "Lipstick",
            "Lip Gloss",
            "Lip Liner",
            "Mascara",
            "Eyeliner",
            "Kajal",
            "Eyeshadow",
            "Foundation",
            "Primer",
            "Concealer",
            "Compact",
            "Nail Polish",
          ],
        },
      ],
      [
        {
          className: "woman",
          heading: "Skincare, Bath & Body",
          title: [
            "Face Moisturiser",
            "Cleanser",
            "Masks & Peel",
            "Sunscreen",
            "Serum",
            "Face Wash",
            "Eye Cream",
            "Lip Balm",
            "Body Lotion",
            "Body Wash",
            "Body Scrub",
            "Hand Cream",
          ],
        },
        {
          heading: "Baby Care",
          className: "woman",
          title: [],
        },
        {
          heading: "Masks",
          className: "woman",
          title: [],
        },
      ],
      [
        {
          heading: "Haircare",
          className: "woman",
          title: [
            "Shampoo",
            "Conditioner",
            "Hair Cream",
            "Hair Oil",
            "Hair Gel",
            "Hair Color",
            "Hair Serum",
            "Hair Accessory",
          ],
        },
        {
          heading: "Fragrances",
          className: "woman",
          title: ["Perfume", "Deodorant", "Body Mist"],
        },
      ],
      [
        {
          heading: "Appliances",
          className: "woman",
          title: ["Hair Straightener", "Hair Dryer", "Epilator"],
        },
        {
          heading: "Men's Grooming",
          className: "woman",
          title: ["Trimmers", "Beard Oil", "Hair Wax"],
        },
        {
          heading: "Beauty Gift & Makeup Set",
          className: "woman",
          title: ["Beauty Gift ", "Makeup Set"],
        },
        {
          heading: "Premium Beauty",
          className: "woman",
          title: [],
        },
        {
          heading: "Wellness & Hygiene",
          className: "woman",
          title: [],
        },
      ],
      [
        {
          heading: "Top Brands",
          className: "woman",
          title: [
            "Lakme",
            "Maybelline",
            "LOreal",
            "Philips",
            "Bath & Body Works",
            "THE BODY SHOP",
            "Mamaearth",
            "MCaffeine",
          ],
        },
      ],
    ],
  },

  {
    name: "Kids",
    path: "/Kids",
    data: [
      [
        {
          className: "kids",
          heading: "Topwear",
          title: ["T-Shirts", "Casual Shirts", "Formal Shirts", "Sweatshirts"],
        },
        {
          className: "kids",
          heading: "Indian & Festive Wear",
          title: [
            "Kurtas & Kurta Sets",
            "Sherwanis",
            "Nehru Jackets",
            "Dhotis",
          ],
        },
      ],
      [
        {
          className: "kids",

          heading: "Bottomwear",
          title: [
            "Jeans",
            "Casual Trousers",
            "Formal Trousers",
            "Shorts",
            "Track Pants & Joggers",
          ],
        },
        {
          className: "kids",

          heading: "",
          title: [""],
        },
        {
          heading: "",
          title: [""],
        },
      ],
      [
        {
          className: "kids",

          heading: "Bottomwear",
          title: [
            "Jeans",
            "Casual Trousers",
            "Formal Trousers",
            "Shorts",
            "Track Pants & Joggers",
          ],
        },
        {
          className: "kids",

          heading: "",
          title: [""],
        },
        {
          heading: "",
          title: [""],
        },
      ],

      [
        {
          className: "kids",

          heading: "Footwear",
          title: [
            "Casual Shoes",
            "Sports Shoes",
            "Formal Shoes",
            "Sneakers",
            "Sandals & Floaters",
            "Flip Flops",
            "Socks",
          ],
        },
        {
          className: "kids",

          heading: "Personal Care & Grooming",

          title: [""],
        },
        {
          className: "kids",

          heading: "  Sunglasses & Frames",
          title: [""],
        },
        {
          className: "kids",

          heading: "Watches",
          title: [""],
        },
      ],
    ],
  },
  {
    name: "HomeLiving",
    path: "/HomeLiving",
    data: [
      [
        {
          className: "HomeLiving",
          heading: "Topwear",
          title: ["T-Shirts", "Casual Shirts", "Formal Shirts", "Sweatshirts"],
        },
        {
          className: "HomeLiving",
          heading: "Indian & Festive Wear",
          title: [
            "Kurtas & Kurta Sets",
            "Sherwanis",
            "Nehru Jackets",
            "Dhotis",
          ],
        },
      ],
      [
        {
          heading: "Bottomwear",
          className: "HomeLiving",
          title: [
            "Jeans",
            "Casual Trousers",
            "Formal Trousers",
            "Shorts",
            "Track Pants & Joggers",
          ],
        },
        {
          className: "HomeLiving",
          heading: "",
          title: [""],
        },
        {
          className: "HomeLiving",
          heading: "",
          title: [""],
        },
      ],
      [
        {
          heading: "Footwear",
          className: "HomeLiving",
          title: [
            "Casual Shoes",
            "Sports Shoes",
            "Formal Shoes",
            "Sneakers",
            "Sandals & Floaters",
            "Flip Flops",
            "Socks",
          ],
        },
        {
          heading: "Personal Care & Grooming",
          className: "HomeLiving",
          title: [""],
        },
        {
          heading: "  Sunglasses & Frames",
          className: "HomeLiving",
          title: [""],
        },
        {
          heading: "Watches",
          className: "HomeLiving",
          title: [""],
        },
      ],
    ],
  },
  {
    name: "Beauty",
    path: "/Beauty",
    data: [
      [
        {
          className: "Beauty ",
          heading: "Makeup",
          title: [
            "Lipstick",
            "Lip Gloss",
            "Lip Liner",
            "Mascara",
            "Eyeliner",
            "Kajal",
            "Eyeshadow",
            "Foundation",
            "Primer",
            "Concealer",
            "Compact",
            "Nail Polish",
          ],
        },
      ],
      [
        {
          className: "Beauty ",
          heading: "Skincare, Bath & Body",
          title: [
            "Face Moisturiser",
            "Cleanser",
            "Masks & Peel",
            "Sunscreen",
            "Serum",
            "Face Wash",
            "Eye Cream",
            "Lip Balm",
            "Body Lotion",
            "Body Wash",
            "Body Scrub",
            "Hand Cream",
          ],
        },
        {
          heading: "Baby Care",
          className: "Beauty ",

          title: [],
        },
        {
          heading: "Masks",
          className: "Beauty ",

          title: [],
        },
      ],
      [
        {
          heading: "Haircare",
          className: "Beauty ",
          title: [
            "Shampoo",
            "Conditioner",
            "Hair Cream",
            "Hair Oil",
            "Hair Gel",
            "Hair Color",
            "Hair Serum",
            "Hair Accessory",
          ],
        },
        {
          heading: "Fragrances",
          className: "Beauty ",
          title: ["Perfume", "Deodorant", "Body Mist"],
        },
      ],
      [
        {
          heading: "Appliances",
          className: "Beauty ",
          title: ["Hair Straightener", "Hair Dryer", "Epilator"],
        },
        {
          heading: "Men's Grooming",
          className: "Beauty ",
          title: ["Trimmers", "Beard Oil", "Hair Wax"],
        },
        {
          heading: "Beauty Gift & Makeup Set",
          className: "Beauty ",
          title: ["Beauty Gift ", "Makeup Set"],
        },
        {
          heading: "Premium Beauty",
          className: "Beauty ",
          title: [],
        },
        {
          heading: "Wellness & Hygiene",
          className: "Beauty ",
          title: [],
        },
      ],
      [
        {
          heading: "Top Brands",
          className: "Beauty ",
          title: [
            "Lakme",
            "Maybelline",
            "LOreal",
            "Philips",
            "Bath & Body Works",
            "THE BODY SHOP",
            "Mamaearth",
            "MCaffeine",
          ],
        },
      ],
    ],
  },

  {
    name: "Studio",
    path: "/Studio",
    data: [
      [
        {
          heading: "Makeup",
          title: [
            "Lipstick",
            "Lip Gloss",
            "Lip Liner",
            "Mascara",
            "Eyeliner",
            "Kajal",
            "Eyeshadow",
            "Foundation",
            "Primer",
            "Concealer",
            "Compact",
            "Nail Polish",
          ],
        },
      ],
      [
        {
          heading: "Skincare, Bath & Body",
          title: [
            "Face Moisturiser",
            "Cleanser",
            "Masks & Peel",
            "Sunscreen",
            "Serum",
            "Face Wash",
            "Eye Cream",
            "Lip Balm",
            "Body Lotion",
            "Body Wash",
            "Body Scrub",

            "Hand Cream",
          ],
        },
        {
          heading: "Baby Care",

          title: [],
        },
        {
          heading: "Masks",
          title: [],
        },
      ],
      [
        {
          heading: "Haircare",
          title: [
            "Shampoo",
            "Conditioner",
            "Hair Cream",
            "Hair Oil",
            "Hair Gel",
            "Hair Color",
            "Hair Serum",
            "Hair Accessory",
          ],
        },
        {
          heading: "Fragrances",
          title: ["Perfume", "Deodorant", "Body Mist"],
        },
      ],
      [
        {
          heading: "Appliances",
          title: ["Hair Straightener", "Hair Dryer", "Epilator"],
        },
        {
          heading: "Men's Grooming",
          title: ["Trimmers", "Beard Oil", "Hair Wax"],
        },
        {
          heading: "Beauty Gift & Makeup Set",
          title: ["Beauty Gift ", "Makeup Set"],
        },
        {
          heading: "Premium Beauty",
          title: [],
        },
        {
          heading: "Wellness & Hygiene",
          title: [],
        },
      ],
      [
        {
          heading: "Top Brands",
          title: [
            "Lakme",
            "Maybelline",
            "LOreal",
            "Philips",
            "Bath & Body Works",
            "THE BODY SHOP",
            "Mamaearth",
            "MCaffeine",
          ],
        },
      ],
    ],
  },
];
const Navbar = () => {
  return (
    <>
      <nav className="nav-element">
        <ul className="navbar1">
          {navData.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.path} className="a">
                  {item.name}
                  <div className="Drop-down-first-container">
                    <DropDown data={item.data} />
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
console.log();
export default Navbar;
