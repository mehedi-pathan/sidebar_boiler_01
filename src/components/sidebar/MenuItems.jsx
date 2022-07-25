import { useState } from "react";

const MenuItems = (props) => {
  const { name, icon, subMenus } = props;
  const [expand, setExpand] = useState(false);

  return (
    <li className="item" onClick={props.onClick}>
      <a href="##" onClick={() => setExpand(!expand)}>
        <span className="nav_icon">{icon}</span>
        <span className="nav_title">{name}</span>
      </a>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub_menu ${expand ? "active" : ""} `}>
          {subMenus.map((menu, key) => (
            <li key={key} className="sub_menu_items">
              <a href="##" className="sub_menu_title">
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItems;
