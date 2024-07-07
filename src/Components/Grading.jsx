const Grading = ({ gpa }) => {
    let grade = 1;
  
    if (gpa >= 97 && gpa <= 100) {
      grade = 'A+';
    } else if (gpa >= 93 && gpa <= 96) {
      grade = 'A';
    } else if (gpa >= 90 && gpa <= 92) {
      grade = 'A-';
    } else if (gpa >= 87 && gpa <= 89) {
      grade = 'B+';
    } else if (gpa >= 83 && gpa <= 86) {
      grade = 'B';
    } else if (gpa >= 80 && gpa <= 82) {
      grade = 'B-';
    } else if (gpa >= 77 && gpa <= 79) {
      grade = 'C+';
    } else if (gpa >= 73 && gpa <= 76) {
      grade = 'C';
    } else if (gpa >= 70 && gpa <= 72) {
      grade = 'C-';
    } else if (gpa >= 67 && gpa <= 69) {
      grade = 'D+';
    } else if (gpa >= 63 && gpa <= 66) {
      grade = 'D';
    } else if (gpa >= 60 && gpa <= 62) {
      grade = 'D-';
    } else {
      grade = 'F';
    }
  
    return <span>{grade}</span>;
  };
  
  export default Grading;