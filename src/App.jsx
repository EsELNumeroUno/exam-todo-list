import React from 'react';
import Form from "./components/UI/Form.jsx";
import TodoList from "./components/TodoList.jsx";
import {useDispatch} from "react-redux";
import {todoSlice} from "./store/todoSlice/todoSlice.js";

const App = () => {
	const dispatch = useDispatch()
	
	const submitHandler = (data)=>{
		dispatch(todoSlice.actions.setTask(data))
	}
	
	return (
			<div >
				<h1 className="text-3xl font-bold mb-1 text-center bg-pink-500 py-5">To-Do List</h1>
				<div className=" bg-gray-100 flex  justify-center gap-x-[30px] items-center p-[20px]" style={{display: "flex", alignItems: "start"}}>
					<Form submitHandler={submitHandler}/>
					<TodoList/>
				</div>
			
			</div>
	);
};

export default App;