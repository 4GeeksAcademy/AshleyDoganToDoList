import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [taskInput,setTaskInput]=useState("")
	const [toDo,setToDo]=useState([])
	
	const handleSubmit = (e) => {
		e.preventDefault()

		if(taskInput.length>0) {
			setToDo([
				{
					label: taskInput,
					is_done: false,
				},
				...toDo
			]);
			setTaskInput("")
		}
	}

	const deleteToDo = (index) => {
		setToDo(
			toDo.toSpliced(index,1)
		)
	}
	return (
		<div className="container bg-light border justify-content-center">
			<h1 className="text-center mt-5">To Do List</h1>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<h4>{taskInput}</h4>
					<input
					className="new-todo"
					placeholder="What needs to be done?"
					value={taskInput}
					onChange={(e) => setTaskInput(e.target.value)}
					/>

				</div>
			</form>
			<div className= "row">
				{toDo.map((item,index)=>(
					<>
						<h4 key={index}>
							{item.label}
						</h4><button type="button" onClick={deleteToDo} className="btn btn-danger">Done</button>
					</>
				))}
			</div>
		</div>
	);
};

export default Home;