import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

export default function EmployeesList({ data, onDelete, onToggleProp }) {
  const elements = data.map((el) => {
    const { id, ...elProps } = el;
    return (
      <EmployeesListItem
        onDelete={() => onDelete(id)}
        key={id}
        {...elProps}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
}
