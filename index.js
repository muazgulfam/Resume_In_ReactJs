import React from "react";
import ReactDOM from "react-dom";

function Cv() {
  return (
    <div className="abc">
      <center>
        <h1>
          <u>Muaz Bin Gulfam</u>
        </h1>
      </center>

      <h2>
        <u>Summary</u>
      </h2>
      <h4>
        <p>
          {" "}
          detailed, highly motivated and accuracy-oriented Computer Science
          student at Dawood University offering excellent communication skills
          and the crucial ability to think critically. Effective team player
          with a pro-active approach and determination to meet all assigned
          targets. Seeking to leverage my academic background in Artificial
          Intelligence at SMIT to fill an AI position at a respectable
          institute.{" "}
        </p>
      </h4>
      <h2>
        <u>
          <b>Personal Information</b>
        </u>
      </h2>
      <h3>
        Name: <u>MUAZ BIN GULFAM</u>{" "}
      </h3>
      <h3>
        Father's Name: <u>MUHAMMAD GULFAM</u>
      </h3>
      <h3>
        Qualification: <u>Under_graduate of Dawood University</u>
      </h3>
      <h3>
        Email:{" "}
        <a href="mail_to:muazgulfam7890@gmail.com">muazgulfam7890@gmail.com</a>
      </h3>
      <h3>
        GitHub: <a href="go to github">https://github.com/Dangeryego</a>
      </h3>
      <h3>
        Contact info: <u>+923182722012</u>
      </h3>
      <h3>
        Address: House_no.:A-123, Street Alpha, Nazimabad, Karachi, Pakistan
      </h3>
      <h2>
        {" "}
        <u>Career Objective</u>
      </h2>
      <h3>
        <p>-- Currently enrolled in 2nd year of BSCS program in DUET</p>
        <p>-- One year of Experience in teaching students of high school </p>
        <p>-- Assisted 3 months in ZAR Solutiions as a call centre agent</p>
        <p>-- Doesn't have any work Experience in I.T field yet</p>
      </h3>
      <h2>
        <u>Technical Skills</u>
      </h2>
      <h3>
        <p>
          <u>Software Skills</u>
        </p>
        <p>
          -- Expert in <u>MS Office</u>
        </p>
        <p>
          <u>Programming Languages</u>
        </p>
        <p>
          -- Fimiliar with the fundamentals of <u>C++</u> programming language
        </p>
        <p>
          -- Fimiliar with the fundamentals of <u>Python</u> programming
          language
        </p>
        <p>
          <u>Languages</u>
        </p>
        <p>-- Native Urdu</p>
        <p>-- Full English</p>
        <p>-- Limited Arabic</p>
        <p>-- Limited French</p>
      </h3>
      <h2>
        <u>Academic Qualification</u>
      </h2>
      <table border="5" width="85%" align="center" padding="20">
        <tr>
          <th>Qualification</th>
          <th>Board/University</th>
          <th>School/College</th>
          <th>Year of Passing</th>
        </tr>
        <tr>
          <th>Under Graduate</th>
          <th>DUET</th>
          <th>Dawood University</th>
          <th>2025</th>
        </tr>
        <tr>
          <th>Intermediate</th>
          <th>BIEK</th>
          <th>Govt. Degree College Bufferzone</th>
          <th>2021</th>
        </tr>
        <tr>
          <th>Matric</th>
          <th>Cambridge board</th>
          <th>Happy Palace School</th>
          <th>2019</th>
        </tr>
        <tr>
          <th>Secondary education</th>
          <th>Cambridge Board</th>
          <th>New World International School</th>
          <th>2017</th>
        </tr>
      </table>
    </div>
  );
}
ReactDOM.render(<Cv />, document.querySelector("#root"));
