import { ManType } from "./destructuring";

let props: ManType ;
beforeEach(() => {
  props = { 
    name: "Naruto",
    age: 18,
    lessons: [{ title: "1" }, { title: "2" }],
    address: {
      street: {
        title: "Country Fire",
      },
    },
  };
});
test("", () => {
  // const age = props.age
  // const lessons = props.lessons

  const { age, lessons } = props;
  const { title } = props.address.street;

  expect(age).toBe(18);
  expect(lessons.length).toBe(2);
  expect(title).toBe("Country Fire");
});

test("", () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ...restLessons] = props.lessons

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")

    expect(ls1.title).toBe("1")
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe("2")


});
