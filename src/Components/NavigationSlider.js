import React, { useEffect, useState } from "react";
import { useAsync } from "react-async";

const loadData = async () => {
  const res = await fetch("https://voda-react-assessment.herokuapp.com/slider");
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};

const NavigationSlider = () => {
  const INITIAL_IMAGE_INDEX = 0;
  const { data, error, isLoading } = useAsync({ promiseFn: loadData });
  let [slideImageIdx, setSlideImageIdx] = useState(INITIAL_IMAGE_INDEX);

  const imageClick = (imagesCount) => {
    // slideImageIdx++ kai an ksefygw na parw to initial
    // console.log(`Images are ${imagesCount}`)
    // console.log(`The slideImageIdx is ${slideImageIdx} before entering logic`)
    setSlideImageIdx(slideImageIdx++);
    // if (slideImageIdx < imagesCount) {
    //   setSlideImageIdx(slideImageIdx++);
    //   // console.log(`The slideImageIdx is ${slideImageIdx} from slideImageIdx <= imagesCount  `)
    // } else {
    //   setSlideImageIdx(0);
    //   // console.log(`The slideImageIdx is ${slideImageIdx} from slideImageIdx <= imagesCount  `)
    // }

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

// className={`bullet-active`}

// <ul className="little-circles">
// <li></li>
// <li></li>
// <li></li>
// </ul>

// <ul className="little-circles">
// {data.map((_, idx) => {
//   <li
//     className={`bullet-${
//       idx == slideImageIdx ? "active" : "inactive"
//     }`}
//   />;
// })}
// </ul>
