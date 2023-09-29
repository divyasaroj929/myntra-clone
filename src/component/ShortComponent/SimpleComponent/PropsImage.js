import React from "react";

const PropsImage = (Props) => {
  return (
    <>
      <div className="five">
        {<img src={Props.imgname} alt="img2" className="five" />}
      </div>
    </>
  );
};
export default PropsImage;
