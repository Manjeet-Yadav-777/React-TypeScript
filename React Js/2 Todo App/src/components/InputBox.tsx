import React, { useState } from "react";

type Boxref = {
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
};

const InputBox = ({ setTodos }: Boxref) => {
  const [todo, setTodo] = useState<string>("");

  const handleSubmit = () => {
    setTodos((prev) => [...prev, todo]); 
    setTodo("");
  };
  return (
    <div className="inpcont">
      <input
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input"
        placeholder="Enter Your Todo..."
      />
      <button onClick={handleSubmit}>ADD TODO</button>
    </div>
  );
};

export default InputBox;
