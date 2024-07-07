



const SingleCard = ()=> {
    const student ={
  firstName: "Biggie",
  lastName: "McTall",
  age: 42,
  course: "Data",
  city: "Munich",
  picture: "https://randomuser.me/api/portraits/men/9.jpg",
  email: "muster@gmail.com"
};
return(
    <div className="flex flex-col justify-center text-center p-4 mb-11 bg-gray-300 rounded-2xl">
      <img className="rounded-2xl" src={student.picture} alt={`${student.firstName}`} />
      <h2 className="p-3">{student.firstName}</h2>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>Location: {student.city}</p>
      <p>Email: <a href={`mailto:${student.email}`}>{student.email}</a></p>
    </div>
)
};



export default SingleCard;