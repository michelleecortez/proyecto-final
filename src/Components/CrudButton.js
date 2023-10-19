import React from "react";
import { Link } from "react-router-dom";

const CrudButton = ({ label, path }) => {
  return (
    <Link to={path} className="btn btn-primary">
      {label}
    </Link>
  );
};

export default CrudButton;
