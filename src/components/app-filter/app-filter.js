import { Component } from "react";

import "./app-filter.css";

export default class AppFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="btn-group">
        <button
          className="btn btn-light"
          type="button"
          onClick={() => this.props.filterAllEmp()}
        >
          Все сотрудники
        </button>
        <button className="btn btn-outline-light" type="button">
          На повышение
        </button>
        <button
          className="btn btn-outline-light"
          type="button"
          onClick={() => this.props.filterBySalary()}
        >
          З/П больше 1000$
        </button>
      </div>
    );
  }
}
