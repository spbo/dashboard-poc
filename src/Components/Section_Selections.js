import React from "react";
import { NavLink } from "react-router-dom";

// Render the "Section 1" or "Section 2" link with its indetifier below it (active blue bullet)
const Section_Selections = (props) => {
  return (
    <div className="body-page-section-selection">
      <NavLink
        to="/"
        className={
          props.sectionVisibilityKey.section1
            ? "body-page-section-selection--active"
            : "body-page-section-selection--inactive"
        }
        onClick={() =>
          props.handleVisibilityKey({ section1: true, section2: false })
        }
      >
        Section 1
        {props.sectionVisibilityKey.section1 ? (
          <ul className="body-page-section-selection-identificator">
            <li className="body-page-section-selection-identificator--active" />
          </ul>
        ) : (
          <ul className="body-page-section-selection-identificator">
            <li className="body-page-section-selection-identificator--inactive" />
          </ul>
        )}
      </NavLink>
      <NavLink
        to="/"
        className={
          props.sectionVisibilityKey.section2
            ? "body-page-section-selection--active"
            : "body-page-section-selection--inactive"
        }
        onClick={() =>
          props.handleVisibilityKey({ section1: false, section2: true })
        }
      >
        Section 2
        {props.sectionVisibilityKey.section2 ? (
          <ul className="body-page-section-selection-identificator">
            <li className="body-page-section-selection-identificator--active" />
          </ul>
        ) : (
          <ul className="body-page-section-selection-identificator">
            <li className="body-page-section-selection-identificator--inactive" />
          </ul>
        )}
      </NavLink>
    </div>
  );
};

export { Section_Selections as default };
