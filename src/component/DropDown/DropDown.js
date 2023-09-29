import React from "react";

const DropDown = ({ data }) => {
  // const { data } = Props; //array dischring //
  // console.log({ data });
  // console.log(data);
  const num = 22;
  return (
    <>
      <div className="Drop-down-second-container">
        <ul>
          {/* yaha row h joki ab data(row ki valur) me array of array return kar raha jiske inside obj h */}
          {data.map((column, index) => {
            // console.log(column);
            return (
              <div className="column" key={index}>
                {/* column me ek obj jiski do value h ak h heading and dusri array */}
                {column.map((value, index) => {
                  // console.log(value);
                  return (
                    <li key={index}>
                      <h1 className={value.className}>{value.heading}</h1>
                      {/* <ul>
                          <li>a</li>
                          <li>b</li>
                          <li>c</li>
                          <li>d</li>
                        </ul> */}
                      <ul>
                        {num > 0 ? (
                          <div className="p">
                            {value.title.map((value, index) => {
                              return (
                                <>
                                  <li key={index}>{value}</li>
                                  {index === 5 ? (
                                    <div
                                      style={{
                                        borderTop: "1px solid gray",
                                        marginTop: "10px",
                                        paddingBottom: "5px",
                                        width: "100px",
                                      }}
                                    ></div>
                                  ) : (
                                    ""
                                  )}
                                </>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="p">
                            {value.title.map((value, index) => {
                              return <li>{value}</li>;
                            })}
                          </div>
                        )}
                      </ul>
                    </li>
                  );
                })}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default DropDown;
