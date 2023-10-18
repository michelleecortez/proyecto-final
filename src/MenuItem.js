import { NavLink } from "react-router-dom";
const MenuItem = ({ path, label }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? "bg-danger" : "bg-white")}
      end
    >
      {label}
    </NavLink>
  );
};

export default MenuItem;
