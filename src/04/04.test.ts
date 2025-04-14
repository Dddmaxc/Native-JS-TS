import { CourseType } from "./04";

test("should take old men older then 90", () => {
  const ages = [18, 20, 22, 1, 100, 90, 14];

  const oldAge = ages.filter((age) => age > 90);

  expect(oldAge.length).toBe(1);
  expect(oldAge[0]).toBe(100);
});

test("should take corses cheaper 160", () => {
  const courses = [
    { title: "CSS", prince: 110 },
    { title: "JS", prince: 200 },
    { title: "REACT", prince: 150 },
  ];

  const cheapCourses = courses.filter((course) => course.prince < 160);

  expect(cheapCourses.length).toBe(2);
  expect(cheapCourses[0].title).toBe("CSS");
  expect(cheapCourses[1].title).toBe("REACT");
  expect(cheapCourses[0].prince).toBe(110);
  expect(cheapCourses[1].prince).toBe(150);
});

test("get only completed tasks", () => {
  const tasks = [
    { id: 1, title: "Bread", isDone: false },
    { id: 2, title: "Milk", isDone: true },
    { id: 3, title: "Soft", isDone: false },
    { id: 4, title: "Sugar", isDone: true },
  ];

  const completedTasks = tasks.filter(t => t.isDone) 

  expect(completedTasks.length).toBe(2)
  expect(completedTasks[0].title).toBe("Milk")
  expect(completedTasks[1].title).toBe("Sugar")
  expect(completedTasks[0].id).toBe(2)
  expect(completedTasks[1].id).toBe(4)
});

test("get only uncompleted tasks", () => {
  const tasks = [
    { id: 1, title: "Bread", isDone: false },
    { id: 2, title: "Milk", isDone: true },
    { id: 3, title: "Soft", isDone: false },
    { id: 4, title: "Sugar", isDone: true },
  ];

  const completedTasks = tasks.filter(t => !t.isDone) 

  expect(completedTasks.length).toBe(2)
  expect(completedTasks[0].title).toBe("Bread")
  expect(completedTasks[1].title).toBe("Soft")
  expect(completedTasks[0].id).toBe(1)
  expect(completedTasks[1].id).toBe(3)
});
