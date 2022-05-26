import { Component } from "react";

import "./app-filter.css";

export default class AppFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttonsData = [
      { name: "all", label: "Все сотрудники" },
      { name: "rise", label: "На повышение" },
      { name: "moreThen1000", label: "З/П больше 1000$" },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
      const active = this.props.filter === name;
      const clazz = active ? "btn-light" : "btn-outline-light";

      return (
        <button
          className={`btn ${clazz}`}
          type="button"
          name={name}
          key={name}
          onClick={() => this.props.onFilterSelect(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
