const ages = [18, 20, 22, 1, 100, 90, 14];

export const predicate = (age: number) => {
  return age > 90;
};

const oldAge = [100];

export type CourseType = {
  title: string;
  prince: number;
};

const courses = [
  { title: "CSS", prince: 110 },
  { title: "JS", prince: 200 },
  { title: "REACT", prince: 150 },
];

const cheapPredicate = (course: CourseType) => {
  return course.prince < 160;
};

const cheapCourses = [
  { title: "CSS", prise: 110 },
  { title: "REACT", prise: 150 },
];
