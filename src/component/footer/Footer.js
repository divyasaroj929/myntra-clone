import React from "react";
import FooterData from "../footer/FooterData";
const list = [
  [
    {
      heading: "ONLINE SHOPPING",
      list: [
        "Men",
        "Women",
        "Kids",
        "Home & Living",
        "Beauty",
        "Gift Cards",
        "Myntra Insider",
      ],
    },
    {
      heading: "USEFUL LINKS",
      list: [
        "Blog",
        "Careers",
        "Site Map",
        "Corporate Information",
        "Whitehat",
      ],
    },
  ],
  [
    {
      heading: "CUSTOMER POLICIES",
      list: [
        "Contact Us",
        "FAQ",
        "T&C",
        "Terms Of Use",
        "Track Orders",
        "Shipping",
        "Cancellation",
        "Returns",
        "Privacy policy",
        "Grievance Office",
      ],
    },
  ],
  [
    {
      heading: "EXPERIENCE MYNTRA APP ON MOBILE",
      list: [],
    },
  ],
  [
    {
      heading: "CUSTOMER POLICIES",
      list: [
        "Contact Us",
        "FAQ",
        "T&C",
        "Terms Of Use",
        "Track Orders",
        "Shipping",
        "Cancellation",
        "Returns",
        "Privacy policy",
        "Grievance Office",
      ],
    },
  ],
];

const List = [
  "Contact Us",
  "FAQ",
  "T&C",
  "Terms Of Use",
  "Track Orders",
  "Shipping",
  "Cancellation",
  "Returns",
  "Privacy policy",
  "Grievance Office",
  "Men",
  "Women",
  "Kids",
  "Home & Living",
  "Beauty",
  "Gift Cards",
  "Myntra Insider",
];
const Footer = () => {
  return (
    <>
      <div className="footer-component">
        <div className="div-footer-container">
          <FooterData footdata={list} data={List} />
          {/* <FooterData list={data} /> */}
        </div>
      </div>
    </>
  );
};
export default Footer;
