import { Component } from "react";

import AppImfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          name: "Nick Bardier",
          salary: 300,
          increase: false,
          rise: true,
          id: 1,
        },
        {
          name: "Anastasiy Bardier",
          salary: 1440,
          increase: true,
          rise: false,
          id: 2,
        },
        {
          name: "Darina Matuh",
          salary: 600,
          increase: false,
          rise: false,
          id: 3,
        },
      ],
      term: "",
    };

    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((el) => el.id !== id),
    }));
  };

  addItem = (name, salary) => {
    this.setState(({ data }) => ({
      data: [
        ...data,
        {
          name,
          salary,
          increase: false,
          rise: false,
          id: this.maxId++,
        },
      ],
    }));
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((el) => {
        if (el.id === id) {
          return { ...el, [prop]: !el[prop] };
        } else {
          return el;
        }
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) return items;

    return items.filter((el) => {
      return el.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterAllEmp = () => {};

  filterBySalary = () => {};

  render() {
    const { data, term } = this.state;

    const employees = data.length;
    const increased = data.filter((el) => el.increase).length;

    const visibleData = this.searchEmp(data, term);

    return (
      <div className="app">
        <AppImfo employees={employees} increased={increased} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter
            filterAllEmp={this.filterAllEmp}
            filterBySalary={this.filterBySalary}
          />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />

        <EmployeesAddForm addItem={this.addItem} />
      </div>
    );
  }
}
