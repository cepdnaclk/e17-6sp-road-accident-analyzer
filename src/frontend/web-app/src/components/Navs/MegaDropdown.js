import React from "react";
import { Link } from "react-router-dom";

const MegaDropdown = ({ item, itemsPerCol, columnTitle }) => {
  let columns = Array(item.length / itemsPerCol);
  let items = [];
  for (var i = 0; i < item.length; i += itemsPerCol) {
    items.push(item.slice(i, i + itemsPerCol));
  }

  const handleOpen = (e) => {
    e.preventDefault();
    const el = e.target;
    if (el.nextSibling) {
      if (el.parentElement.classList.contains("on")) {
        el.parentElement.classList.add("on");
        el.nextSibling.style.display = "block";
      } else {
        el.nextSibling.style.display = "none";
        el.parentElement.classList.remove("on");
        el.nextSibling.style.opacity = 1;
      }
    }
  };

  return (
    <ul className="dropdown-menu dropdown-item megamenu-content animated" role="menu" >
      <li>
        <div className="row">
          {items.map((val, i) => (
            <div
            key={i}
              className={
                "col-menu col-lg-" + (columns.length === 3 ? "4" : "3") + " col-md-12"
              }
            >
              <h6 className="title" onClick={e => handleOpen(e)}>{columnTitle}</h6>
              <div className="content animated">
                <ul className="menu-col">
                  {val.map((value, index) => (
                    <li key={index}>
                      <Link to={val[index]["link"]}>{val[index]["title"]}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </li>
    </ul>
  );
};

export default MegaDropdown;
