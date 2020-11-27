import React, { useState } from 'react';
import Select from 'react-select';

const SearchComponent = (props) => {
  const [selectedOption, setselectedOption] = useState("");

  const customStyles = {
    // container: (provided, state) => ({
    //   ...provided,
    //   height: "1rem"
    // })
    // , 
    control: (provided, state) => ({
      ...provided,
      background: "#3d3c3c",
      // borderColor: '#9e9e9e',
      border: "none",
      height: "1px",
      // marginTop: "10px",
      marginLeft: "8%",
      width: "300px"
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      // height: "30px",
      padding: "0 6px",
      fontSize: "15px",
      // marginLeft: "220px",
      // overflow: "visible"
    }),

    input: (provided, state) => ({
      ...provided,
      // margin: '0px',
      color: "white"
    }),
    // indicatorSeparator: (state) => ({
    //   display: "none"
    // }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      background: "#3d3c3c",
      height: "30px"
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: "none"
    }),
    noOptionsMessage: (provided, state) => ({
      ...provided,
      color: "white",
      background: "#3d3c3c"
    }),
    menu: (provided, state) => ({
      ...provided,
      color: "white",
      background: "#3d3c3c",
    }),
    // menuPortal: (provided, state) => ({
    //   ...provided,
    //   color: "red",
    //   background: "black"
    // }),
    option: (provided, state) => ({
      ...provided,
      color: "white",
      background: "#3d3c3c"
    })
  };

  const options = [
    { value: 'home', label: 'Home' },
    { value: 'all', label: 'All' },
    { value: 'section1', label: 'Section 1' },
    { value: 'section2', label: 'Section 2' },
    { value: 'page_2', label: 'Page 2' }
  ];
  
  const onChange = e => {
    setselectedOption("");

    if (e.value === 'home' || e.value === 'all' || e.value === 'section1') {
      // console.log(`aloooo ${JSON.stringify(props)}`)
      props.history.push('/', { section1: true, section2: false });
    } else if (e.value === 'section2') {
      props.history.push('/', { section1: false, section2: true });
    } else if (e.value === 'page_2') {
      props.history.push('/page_2');
    }
  };

  return (
    <div>
      <Select value={selectedOption}
      placeholder=""
      isClearable={true}
      closeMenuOnSelect={true}
      onChange={e => onChange(e)}
      options={options}
      styles={customStyles}
      >
      </Select>
    </div>
  );
};

export default SearchComponent;