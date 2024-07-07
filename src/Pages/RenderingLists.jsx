import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Card from "../Components/StudentCard";
import students from "../Components/ArrOfStudents";
// import React from "react";

const RenderingList = () => {
  return (
    <>
      <Nav />
      <h1 className="p-9 ">Rendering from Array of data</h1>
      <div className="flex flex-wrap justify-center  space-x-4 max-w-xl ">
        {students.map((student) => (
          <Card key={student.id} student={student} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default RenderingList;
