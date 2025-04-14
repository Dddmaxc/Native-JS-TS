import { StudentType } from "../02/02";
import { addSkill, doesStudentInKiev, makeStudentActive } from "./03";

let student: StudentType;

beforeEach(() => {
  student = {
    id: 1,
    name: "Naruto",
    age: 20,
    isActive: false,
    address: {
      streetTitle: "Watermanstraat 30",
      city: {
        title: "Minsk",
        countryTitle: "Netherland",
      },
    },
    technologies: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "React",
      },
    ],
  };
});

test("new tech skill should be added to student", () => {
  expect(student.technologies.length).toBe(3);

  addSkill(student, "JS");

  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe("JS");
  expect(student.technologies[3].id).toBeDefined;
});

test("student should be made active", () => {
  expect(student.isActive).toBe(false);

  makeStudentActive(student);

  expect(student.isActive).toBe(true);

});

test("does the student live in city?", () => {
  expect(student.isActive).toBe(false);

  let result1 =doesStudentInKiev(student, "Kiev");
  let result2 =doesStudentInKiev(student, "Minsk");

  expect(result1).toBe(false)
  expect(result2).toBe(true)

});
