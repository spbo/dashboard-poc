import React, { useEffect, useState } from "react";
import { useAsync } from "react-async";

// make the API call
const loadData = async () => {
  const res = await fetch("https://voda-react-assessment.herokuapp.com/slider");
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};

// Component for rendering pictures in a carousel format
const NavigationSlider = () => {
  const INITIAL_IMAGE_INDEX = 0;
  const { data, error, isLoading } = useAsync({ promiseFn: loadData });
  let [slideImageIdx, setSlideImageIdx] = useState(INITIAL_IMAGE_INDEX);

  const imageClick = (imagesCount) => {
    setSlideImageIdx(slideImageIdx++);

    slideImageIdx < imagesCount
      ? setSlideImageIdx(slideImageIdx++)
      : setSlideImageIdx(0);
  };

  if (isLoading) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data) {
    const imagesCount = data.length;
    const { title, image, subtitle } = data[slideImageIdx];

    return (
      <div>
        <div className="image-slider">
          <img
            key={title}
            src={image}
            alt={subtitle}
            onClick={() => imageClick(imagesCount)}
          />
        </div>
        <ul className="image-slider--identificator">
          {data.map((_, idx) => {
            return (
              <li
                className={`image-slider--bullet__${
                  idx == slideImageIdx ? "active" : "inactive"
                }`}
              />
            );
          })}
        </ul>
      </div>
    );
  }
  return null;
};

export default NavigationSlider;

