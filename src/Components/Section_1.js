import React, { useContext } from "react";
import RequestedData from "../Context/RequestedData-context";

const Section_1 = () => {
  const data = useContext(RequestedData);

  return (
    <div className="section1">
      <div className="section1-grid">
        {data[0].sections[0].images.map((image, idx) => (
          <div key={idx} className={`image${idx}`}>
            <img src={image.img} alt={image.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Section_1 as default };

