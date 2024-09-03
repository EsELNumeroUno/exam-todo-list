import React from 'react';
import TodoItem from "./TodoItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {todoSlice} from "../store/todoSlice/todoSlice.js";

const TodoList = () => {
	const dispatch = useDispatch()
	const {fakeTasks} = useSelector(state => state.todo)
	
	const changeTaskHandler = (id) => {
		dispatch(todoSlice.actions.changeTask(id))
	}
	
	const getAllTasks = ()=>{
		dispatch(todoSlice.actions.getAllTasks())
	}
	
	const getDoneTasks = ()=>{
		dispatch(todoSlice.actions.getDoneTasks())
	}
	
	const getNotDoneTasks = ()=>{
		dispatch(todoSlice.actions.getNotDoneTasks())
	}
	
	return (
			<div>
				<div className="flex flex-col justify-center items-center gap-y-1">
					
					<div>
						<button  onClick={() => getAllTasks()} className={'shadow-xl mr-1 bg-red-300 p-[4px] rounded-[10px]'}>ALL</button>
						<button  onClick={() => getDoneTasks()} className={'shadow-xl mr-1 bg-red-300 p-[4px] rounded-[10px]'}>Completed</button>
						<button  onClick={() => getNotDoneTasks()} className={'shadow-xl mr-1 bg-red-300 p-[4px] rounded-[10px]'}>Not Completed</button>
					</div>
					
					<div
							className="shadow-xl !z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
						<div className={'p-[2px] rounded-[10px]'}>
							{fakeTasks.map(item => {
								return (
										<TodoItem changeTaskHandler={changeTaskHandler} key={item.id} item={item}/>
								)
							})}
						
						</div>
					
					</div>
				</div>
			</div>
	);
};

export default TodoList;