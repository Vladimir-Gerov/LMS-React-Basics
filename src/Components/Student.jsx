// Exercise https://playground.wbscod.in/react/react-basics-exercises/3

import { Card } from "./StudentCard";
// import { Grading } from "./Grading";

const Student = ()=> {
    const student ={
  firstName: "Tasty",
  lastName: "McTasty",
  age: 42,
  course: "Web Development",
  city: "Berlin",
  picture: "https://randomuser.me/api/portraits/men/1.jpg",
  email: "muster@gmail.com",
  grade: 65,
  graduate: false
}


return(
<Card student={student} />
)};

export default Student;
