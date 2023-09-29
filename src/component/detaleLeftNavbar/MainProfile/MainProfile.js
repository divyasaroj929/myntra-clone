import React, { useState } from "react";
import ProflieIMG from "../../Image/ProflieIMG.webp";
// import MensShop from "../shop/MensShop";
import ContainerOfDiv from "../../ShortComponent/SimpleComponent/ContainerOfDiv";
import "./index.css";

const MainProfile = () => {
  const [clickbtn, setClickbtn] = useState(false);

  const continueButton = () => {
    let number = document.getElementById("num").value;
    if (number === "" || number === null) {
      alert(" number must be fullfil");
    } else {
      document.getElementById("num").value = "";
      setClickbtn(true);
    }
  };
  if (clickbtn === false) {
    return (
      <>
        <div className="main-land-page-profile">
          <div className="svg-img">
            <img src={ProflieIMG} alt="" className="img" />
          </div>
          <div className="Profile-land-page">
            <ContainerOfDiv
              className="complete-header"
              value={["login", <span className="span">or</span>, "signup"]}
            />
            <input
              type="text"
              placeholder="+91 | mobile number"
              className="input-type"
              id="num"
              autoComplete="off"
            />

            <ContainerOfDiv
              className="terms-condition"
              value={[
                "By countinuing I agree to the",
                <a href="/" className="terms">
                  Terms of use
                </a>,
                <span className="span">&</span>,
                <a href="/">Privacy policy</a>,
              ]}
            />
            <input
              type="button"
              className="button-continue"
              value="continue"
              onClick={() => {
                continueButton();
              }}
            />

            <ContainerOfDiv
              className="terms-condition"
              value={[
                "Have trobluelogging in ",
                <span className="span">?</span>,
                <a href="/">Get help</a>,
              ]}
            />
          </div>
        </div>
      </>
    );
  }
  return;
  //  <MensShop />;
};

export default MainProfile;
