import { useState } from "react";

export type ManType = {
  name: string;
  age: number;
  lessons: { title: string }[];
  address: {
    street: {
      title: string;
    };
  };
};

type PropsType = {
  title: string;
  man: ManType;
};

function useNarutoState(m: string) {
  return [m, function () {}];
}
function useNarutoState2(m: string) {
  return {
    message: m, setMessage: function () {}
  };
}

export const destructuring: React.FC<PropsType> = ({ title, man }) => {

  const [message, setMessage] = useState("hello")

  return (
    <div>
      <h1>{title}</h1>
      <hr />
      <div>{man.name}</div>
    </div>
  );
};
