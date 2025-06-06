import { createGreetingMessage, ManType } from "./05_01";

let people = Array<ManType>

beforeEach(() => {
  let people: Array<ManType> = [
    { name: "Andrew Ivanov", age: 33 },
    { name: "Alexander Petrow", age: 24 },
    { name: "Dmitry Sidorow", age: 18 },
  ];
});

test("Should get array of greeting message", () => {
    const people = [
        { name: "Andrew Ivanov", age: 33 },
        { name: "Alexander Petrov", age: 24 },
        { name: "Dmitry Sidorov", age: 18 }
    ];

    let messages = (createGreetingMessage(people));

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrew. Welcome to IT-Incubator");
    expect(messages[1]).toBe("Hello Alexander. Welcome to IT-Incubator");
    expect(messages[2]).toBe("Hello Dmitry. Welcome to IT-Incubator");
});
