import React from "react";
import { NavLink } from "react-router-dom";

const Section_Selections = (props) => {
  return (
    <div className="sections-links-container">
      <NavLink
        to="/"
        className={
          props.sectionVisibilityKey.section1
            ? "section-link_active"
            : "section-link_inactive"
        }
        onClick={() =>
          props.handleVisibilityKey({ section1: true, section2: false })
        }
      >
        Section 1
        {props.sectionVisibilityKey.section1 ? (
          <ul className="bullet-little-closer">
            <li className="bullet-is-active" />
          </ul>
        ) : (
          <ul className="bullet-little-closer">
            <li className="bullet-is-inactive" />
          </ul>
        )}
      </NavLink>
      <NavLink
        to="/"
        className={
          props.sectionVisibilityKey.section2
            ? "section-link_active"
            : "section-link_inactive"
        }
        onClick={() =>
          props.handleVisibilityKey({ section1: false, section2: true })
        }
      >
        Section 2
        {props.sectionVisibilityKey.section2 ? (
          <ul className="bullet-little-closer">
            <li className="bullet-is-active" />
          </ul>
        ) : (
          <ul className="bullet-little-closer">
            <li className="bullet-is-inactive" />
          </ul>
        )}
      </NavLink>
    </div>
  );
};

export { Section_Selections as default };
