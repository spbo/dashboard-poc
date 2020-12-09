import React, { useState, useEffect } from "react";
import { useAsync } from "react-async";
import Section_1 from "./Section_1";
import Section_2 from "./Section_2";
import RequestedData from "../Context/RequestedData-context";
import Section_Selections from "./Section_Selections";

// make the API call
const loadData = async () => {
  const res = await fetch("https://voda-react-assessment.herokuapp.com/home");
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};

// render the 2 sections in home page
const Dashboard = ({ section1 = true, section2 = false }) => {
  const { data, error, isLoading } = useAsync({ promiseFn: loadData });
  const [sectionVisibility, setSectionVisibility] = useState({
    section1: section1,
    section2: section2,
  });

  // change the visbility of section 1 and 2 respectively 
  useEffect(() => {
    setSectionVisibility({ section1: section1, section2: section2 });
  }, [section1, section2]);

  // function to pass to the children component
  const handleVisibility = (sectionVisibility) => {
    if (sectionVisibility.section1) {
      setSectionVisibility({ section1: true, section2: false });
    } else if (sectionVisibility.section2) {
      setSectionVisibility({ section1: false, section2: true });
    }
  };

  if (isLoading) return "";
  if (error) return `Something went wrong: ${error.message}`;
  if (data)
    return (
      <RequestedData.Provider value={data}>
        <div className="content-container">
          <div className="body-page-descritpion" key={data[0].id} id={data[0].name}>
            <h5>{data[0].description}</h5>
          </div>
          <Section_Selections
            handleVisibilityKey={handleVisibility}
            sectionVisibilityKey={sectionVisibility}
          />
          <div className="section-container">
            {sectionVisibility.section1 && <Section_1 />}
            {sectionVisibility.section2 && <Section_2 />}
          </div>
        </div>
      </RequestedData.Provider>
    );
  return null;
};

export default Dashboard;
