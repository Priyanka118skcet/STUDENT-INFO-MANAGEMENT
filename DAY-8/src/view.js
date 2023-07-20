import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  state = {
    students: [],
    show: false,
    changeText: false,
    disableButton: false
  };
  handleChange = (e, i) => {
    let { name, value } = e.target;
    let students = [...this.state.students];
    students[i] = {
      ...students[i],
      [name]: value
    };
    console.log(students);
    this.setState({
      students,
      disableButton: true
    });
  };
  handleAddStudent = () => {
    this.setState((prevState) => ({
      students: [
        ...prevState.students,
        {
          name: "",
          mobile: ""
        }
      ]
    }));
  };
  handleRemoveLastStudent = () => {
    this.setState({
      students: this.state.students.slice(0, -1)
    });
  };
  handleRemoveSpecificStudent = (i) => () => {
    const students = [...this.state.students];
    students.splice(i, 1);
    this.setState({ students });
  };
  handleViewDetailsClick = () => {
    let students = [...this.state.students];
    this.setState({
      students,
      show: !this.state.show,
      changeText: !this.state.changeText
    });
  };
  render() {
    console.log(this.state.students);
    return (
      <div>
        <div className="text-center">
          <i className="h3 font-weight-bold text-secondary">
            STUDENT DETAILS FORM
          </i>
        </div>
        <div className="containerview">
          <div className="row">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center font-italic red "> S No </th>
                    <th className="text-center font-italic"> Name </th>
                    <th className="text-center font-italic"> Mobile </th>
                    <th className="text-center font-italic">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.students.map((item, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          autoComplete="off"
                          value={this.state.students[i].name}
                          onChange={(e) => this.handleChange(e, i)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          min="0"
                          name="mobile"
                          value={this.state.students[i].mobile}
                          onChange={(e) => this.handleChange(e, i)}
                          className="form-control"
                        />
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={this.handleRemoveSpecificStudent(i)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={this.handleAddStudent}
                className="btn btn-primary"
              >
                Add Student
              </button>
              <button
                onClick={this.handleRemoveLastStudent}
                className="btn btn-danger float-right"
              >
                Delete Last Student
              </button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-outline-success btn-md"
            disabled={this.state.disableButton === false}
            onClick={this.handleViewDetailsClick}
          >
            {this.state.changeText ? "Hide Details" : "View Details"}
          </button>
        </div>
        <div>
          {this.state.show && (
            <table className="w-50 mt-5 ml-5 table text-center">
              <thead className="thead-dark">
                <th className="font-italic">S No</th>
                <th className="font-italic">Students name</th>
                <th className="font-italic">Mobile number</th>
              </thead>
              <tbody>
                {this.state.students.map((i, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{i.name}</td>
                      <td>{i.mobile}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}
export default App;
