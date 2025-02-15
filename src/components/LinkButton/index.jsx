import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ textLink, slug, styleClass, IsIcon, IconComponent }) => {
  return IsIcon ? (
    <Link to={slug}>
      <div className={styleClass}>
        <img src={IconComponent} alt="" width={20} height={10} />
        {textLink}
      </div>
    </Link>
  ) : (
    <Link to={slug} className={styleClass}>
      {textLink}
    </Link>
  );
};

export default LinkButton;
