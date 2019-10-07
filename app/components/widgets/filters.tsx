import React from "react";

const Filters = (): React.ReactElement => {
  return (
    <div className="sidebar">
      <ul className="filters">
        <li className="filter-option">2D</li>
        <li className="filter-option">3D</li>
        <li className="filter-option">Digital Media</li>
        <li className="filter-option">Textiles + Repeats</li>
      </ul>
    </div>
  );
};

export default Filters;
