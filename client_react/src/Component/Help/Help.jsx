import React from 'react';
import './Help.css';

function Help() {
  return (
    <div className="container_help">
      <h1>Help Page</h1>
      <p>
        Welcome to the help page for the School Management App. Here, you will find detailed instructions on how to use
        the various features of the app.
      </p>

      <div className="section">
        <h2>Student Management</h2>
        <p>
          The Student Management section allows you to add, edit, and delete student records. You can also view
          detailed information about each student, including their grades and attendance.
        </p>
        <ul>
          <li>
            <strong>Adding a Student:</strong> To add a new student, navigate to the 'Add Student' section and fill out
            the required fields.
          </li>
          <li>
            <strong>Editing a Student:</strong> To edit a student's information, click on the 'Edit' button next to the
            student's name in the student list.
          </li>
          <li>
            <strong>Deleting a Student:</strong> To delete a student, click on the 'Delete' button next to the student's
            name. Please note that this action is irreversible.
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Teacher Management</h2>
        <p>
          The Teacher Management section allows you to add, edit, and delete teacher records. You can also assign
          teachers to different classes and subjects.
        </p>
        <ul>
          <li>
            <strong>Adding a Teacher:</strong> To add a new teacher, navigate to the 'Add Teacher' section and fill out
            the required fields.
          </li>
          <li>
            <strong>Editing a Teacher:</strong> To edit a teacher's information, click on the 'Edit' button next to the
            teacher's name in the teacher list.
          </li>
          <li>
            <strong>Deleting a Teacher:</strong> To delete a teacher, click on the 'Delete' button next to the teacher's
            name. Please note that this action is irreversible.
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Attendance Tracking</h2>
        <p>
          The Attendance Tracking section allows you to mark and view student attendance. You can mark attendance for
          each class and view attendance reports.
        </p>
        <ul>
          <li>
            <strong>Marking Attendance:</strong> To mark attendance, navigate to the 'Attendance' section, select the
            class, and mark each student's attendance.
          </li>
          <li>
            <strong>Viewing Attendance:</strong> To view attendance reports, go to the 'Attendance Reports' section and
            select the desired criteria.
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Fee Management</h2>
        <p>
          The Fee Management section allows you to manage student fees. You can add fee records, track payments, and
          generate fee reports.
        </p>
        <ul>
          <li>
            <strong>Adding a Fee Record:</strong> To add a fee record, navigate to the 'Add Fee' section and fill out
            the required fields.
          </li>
          <li>
            <strong>Tracking Payments:</strong> To track fee payments, go to the 'Fee Payments' section and view the
            payment status for each student.
          </li>
          <li>
            <strong>Generating Fee Reports:</strong> To generate fee reports, navigate to the 'Fee Reports' section and
            select the desired criteria.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Help;
