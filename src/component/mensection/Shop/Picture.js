import React from "react";

import { SlHeart } from "react-icons/sl";

import { useNavigate } from "react-router-dom";

const Picture = ({ priceData }) => {
  const navigate = useNavigate();

  const turnProfile = () => {
    navigate("/Profile");
  };

  return (
    <>
      <div className="Wrapper">
        <div className="img-wrapper">
          <div className="img-second-wrapper">
            {priceData.map((value, index) => {
              // console.log(value);
              return (
                <div className="Cards" key={index}>
                  <div className="cards-img-container">
                    <img src={value.img} alt="" className="Tops" />
                  </div>

                  <div className="img-info">
                    <div className="img-first-name">
                      <h1>{value.name}</h1>
                    </div>

                    <div className="hidden-wishlist">
                      <div className="wishlist-container" onClick={turnProfile}>
                        <SlHeart style={{ marginRight: "20px" }} />
                        Wishlist
                      </div>

                      <div className="size-chart">
                        <div className="size">{value.size}</div>
                      </div>
                    </div>

                    <div className="img-second-row-info">
                      <p> {value.para}</p>
                      <div className="price-info">{value.price}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Picture;
