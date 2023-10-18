import React from "react";
import { Link } from "react-router-dom";
import ActionDropdown from "./ActionDropdown";

const CrudTable = ({ header, data, path }) => {
  const onSetActions = (id) => {
    let actions = [
      { name: "Edit", path: `/${path}/edit/${id}` },
      { name: "Delete", path: `/${path}/delete/${id}` },
    ];
    return actions;
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <Link to={path}>New</Link>
            </th>
            {header.map((element, index) => (
              <th key={index}>{element}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                {Object.values(item).map((value, index2) => (
                  <td key={index2}>{value}</td>
                ))}
                <td>
                  <ActionDropdown
                    actions={onSetActions(Object.values(item)[0])}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CrudTable;
