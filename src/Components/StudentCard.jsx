import Grading from "./Grading";

const Card = ({ student }) => {
  return (
    <div className="flex flex-col justify-center text-center p-4 mb-11 bg-gray-300 rounded-2xl w-64">
      <img
        className="rounded-2xl"
        src={student.picture}
        alt={`${student.firstName}`}
      />
      <h2 className="p-3">
        {student.firstName} {student.lastName}
      </h2>
      <p>Age: {student.age}</p>
      <p>
        Email: <a href={`mailto:${student.email}`}>{student.email}</a>
      </p>
      <p>Location: {student.city}</p>
      <p>Course: {student.course}</p>
      <p>
        GPA: <Grading gpa={student.gpa} />
      </p>
      {student.graduate ? <p>Status: Graduated</p> : <p>Status: Enrolled</p>}
    </div>
  );
};

export default Card;
