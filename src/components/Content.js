import React, { Component } from "react";
import LoginPage from "./form/LoginPage";

export class Content extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "Nejar", age: "26", id: "1" },
        { name: "Rajaram", age: "26", id: "2" },
        { name: "Suraj", age: "26", id: "3" },
        { name: "Prakash", age: "26", id: "4" },
        { name: "Kush", age: "26", id: "5" },
      ],
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Sn</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
            {this.state.data.map(({ id, name, age }) => (
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Content;
