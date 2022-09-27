function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
let student1 = new Student("Вася", "Мужской", 20);
let student2 = new Student("Света", "Женский", 19);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = mark;
  } else {

  }
  Student.prototype.addMarks = function (...mark) {

  }

}