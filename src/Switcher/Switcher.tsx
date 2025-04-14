import s from "./style.module.css";
import { Button } from "./Button";

type PropsType = {
  setLight: (value: boolean) => void;
  light: boolean;
};

export function Switcher(props: PropsType) {

  const buttonSwitcher = () => {
    props.setLight(!props.light);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          className={props.light ? s.green : s.null}
          style={{ width: 200, height: 100, border: "1px solid green" }}
        >
          On
        </div>
        <div
          className={props.light ? s.null : s.red}
          style={{ width: 200, height: 100, border: "1px solid red" }}
        >
          Off
        </div>
        <Button onClick={buttonSwitcher} title="switcher" />
      </div>
    </>
  );
}
