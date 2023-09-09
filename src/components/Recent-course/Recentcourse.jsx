import React from "react";

// const Recentcourses = () => {
//   return (
//     <div className="section">
//       <div className="top-courses">
//         <div className="top10">
//           <h5 style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
//             Top-Courses
//           </h5>
//           <a href="" className="top-courses_content">
//             web development
//           </a>
//           <br />
//           <a href="" className="top-courses_content">
//             python programming
//           </a>
//           <br />
//           <a href="" className="top-courses_content">
//             java
//           </a>
//           <br />
//         </div>
//       </div>
//       <div className="top-courses">
//         <div className="top10">
//           <h5 style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
//             Quizes/Exercises
//           </h5>
//           <a href="" className="top-courses_content">
//             HTML Reference
//           </a>
//           <br />
//           <a href="" className="top-courses_content">
//             HTML Reference
//           </a>
//           <br />
//           <a href="" className="top-courses_content">
//             HTML Reference
//           </a>
//           <br />
//         </div>
//       </div>
//       <div className="top-courses">
//         <div className="top10">
//           <h5 style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
//             NCERT Books
//           </h5>
//           <a href="" className="top-courses_content">
//             HTML Reference
//           </a>
//           <br />
//           <a href="" className="top-courses_content">
//             HTML Reference
//           </a>
//           <br />
//           <a href="" className="top-courses_content">
//             HTML Reference
//           </a>
//           <br />
//         </div>
//       </div>
//       <div className="top-courses">
//         <div className="top10">
//           <h5 style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
//             Notes/Video
//           </h5>
//           <a href="" className="top-courses_content">
//             HTML Reference
//           </a>
//           <br />
//           <a href="" className="top-courses_content">
//             HTML Reference
//           </a>
//           <br />
//           <a href="" className="top-courses_content">
//             HTML Reference
//           </a>
//           <br />
//         </div>
//       </div>
//     </div>
//   );
// };
import Dropdown from 'react-bootstrap/Dropdown';

function Recentcourse() {
  return (
    <>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Default Dropdown
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
          Clickable Outside
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-outside">
          Clickable Inside
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle id="dropdown-autoclose-false">
          Manual Close
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Recentcourse;
