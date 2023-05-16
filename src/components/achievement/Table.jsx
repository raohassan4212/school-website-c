import React from "react";
import "./achievement.css";
import { students } from "../../dummydata";

const Table = () => {
  return (
    <div>
      <table class="styled-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Father Name</th>
            <th>Address</th>
            <th>Achievements</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.fatheName}</td>
                <td>{student.address}</td>
                <td>{student.achievements}</td>
                {/* <td>
                  <img
                    className="achiever-student"
                    src="./images/team/f-1.jpeg"
                    alt="student"
                  />
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
