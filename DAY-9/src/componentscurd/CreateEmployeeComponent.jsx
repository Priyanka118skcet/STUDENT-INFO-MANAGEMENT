import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: '',
      address: '',
      phoneNumber: '',
      emailId: '',
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    if (this.state.id === '_add') {
      // If the URL has "_add" as the id, it means we're adding a new employee.
      return;
    } else {
      // Fetch employee data if the id is provided in the URL.
      EmployeeService.getEmployeeById(this.state.id).then((res) => {
        let employee = res.data;
        this.setState({
          name: employee.name,
          address: employee.address,
          phoneNumber: employee.phoneNumber,
          emailId: employee.emailId,
        });
      });
    }
  }

  saveOrUpdateEmployee(e) {
    e.preventDefault();
    const employee = {
      name: this.state.name,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      emailId: this.state.emailId,
    };
    console.log('employee => ', employee);

    if (this.state.id === '_add') {
      // Create a new employee record.
      EmployeeService.createEmployee(employee).then((res) => {
        this.props.history.push('/employees');
      });
    } else {
      // Update an existing employee record.
      EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
        this.props.history.push('/employees');
      });
    }
  }

  changeNameHandler(event) {
    this.setState({ name: event.target.value });
  }

  changeAddressHandler(event) {
    this.setState({ address: event.target.value });
  }

  changePhoneNumberHandler(event) {
    this.setState({ phoneNumber: event.target.value });
  }

  changeEmailHandler(event) {
    this.setState({ emailId: event.target.value });
  }

  cancel() {
    this.props.history.push('/employees');
  }

  getTitle() {
    return this.state.id === '_add' ? <h3 className="text-center">Add Contact</h3> : <h3 className="text-center">Update Contact</h3>;
  }

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Name: </label>
                    <input
                      placeholder="Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Address </label>
                    <input
                      placeholder="Address"
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.changeAddressHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Phone Number: </label>
                    <input
                      placeholder="PhoneNumber"
                      name="phonenumber"
                      className="form-control"
                      value={this.state.phoneNumber}
                      onChange={this.changePhoneNumberHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Email Id: </label>
                    <input
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>

                  <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>
                    Save
                  </button>
                  <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: '10px' }}>
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployeeComponent;