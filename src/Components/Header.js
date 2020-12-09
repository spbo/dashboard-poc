import React from "react";
import { useAsync } from "react-async";
import { NavLink } from "react-router-dom";
import NavigationSlider from "./NavigationSlider";
import Search from "./Search";

// make the API call
const loadData = async () => {
  const res = await fetch("https://voda-react-assessment.herokuapp.com/menu");
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};

// Render the "Home", "Page 2", "Search" and Picture Slider links/interfaces
const Header = (props) => {
  const { data, error, isLoading } = useAsync({ promiseFn: loadData });

  if (isLoading) return "";
  if (error) return `Something went wrong: ${error.message}`;
  if (data)
    return (
      <div className="header">
        <div className="header__content">
          <div className="header__navigation">
            <NavLink
              to="/"
              className="header__navigation-link--inactive"
              activeClassName="header__navigation-link--active"
              exact={true}
            >
              {data[0].title}
              <ul className="header__navigation-identifier">
                <li />
              </ul>
            </NavLink>
            <NavLink
              to="/page_2"
              className="header__navigation-link--inactive"
              activeClassName="header__navigation-link--active"
            >
              {data[1].title}
              <ul className="header__navigation-identifier">
                <li />
              </ul>
            </NavLink>
            <Search history={props} />
          </div>
          <NavigationSlider />
        </div>
      </div>
    );
  return null;
};

export default Header;
