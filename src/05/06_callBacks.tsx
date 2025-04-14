import { ChangeEvent, MouseEvent } from "react";

export function Users() {
  const deleteUsers = (e: MouseEvent<HTMLButtonElement>) => {
    alert(e.currentTarget.name);
  };

  const onNameChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log("age changed", e.currentTarget.value);
  };
  const focusLostHandler = () => {
    console.log("focus was lost");
  };
  return (
    <div>
      Naruto
      <div>
        <textarea onChange={onNameChange} onBlur={focusLostHandler}></textarea>
      </div>
      <button name="delete" onClick={deleteUsers}>
        Delete
      </button>
    </div>
  );
}
