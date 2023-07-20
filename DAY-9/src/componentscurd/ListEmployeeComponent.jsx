import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.fetchEmployees(); // Refresh the employee list after deletion
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employee List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee Address</th>
                <th>Employee Phone Number</th>
                <th>Employee Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.address}</td>
                  <td>{employee.phoneNumber}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <Link to={`/view-employee/${employee.id}`} className="btn btn-info btn-sm mr-2">
                      View
                    </Link>
                    <Link to={`/update-employee/${employee.id}`} className="btn btn-primary btn-sm mr-2">
                      Update
                    </Link>
                    <button
                      onClick={() => this.deleteEmployee(employee.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row">
          <Link to="/add-employee/_add" className="btn btn-success">
            Add Employee
          </Link>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;