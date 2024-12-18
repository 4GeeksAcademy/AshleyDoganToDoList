import React, { useState } from "react";
import "../../styles/home.css";
//include images into your bundle

//create your first component
const Home = () => {
  const [taskInput, setTaskInput] = useState("");
  const [toDo, setToDo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskInput.length > 0) {
      setToDo([
        {
          label: taskInput,
          is_done: false,
        },
        ...toDo,
      ]);
      setTaskInput("");
    }
  };

  const deleteToDo = (index) => {
    setToDo(toDo.toSpliced(index, 1));
  };
  return (
    <div className="container justify-content-center">
      <h1 id="title" className="text-center mt-5">
        to do
      </h1>
      <div className="container bg-light">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              class="form-control"
              type="text"
            />
          </div>
        </form>
        <div className="row">
          {toDo.map((item, index) => (
            <div id="DivForHoverItem">
              <h4 key={index}>
                {item.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="HiddenText"
                  onClick={deleteToDo}
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </h4>
            </div>
          ))}
        </div>
        <div className="row">items left</div>
      </div>
    </div>
  );
};

export default Home;
