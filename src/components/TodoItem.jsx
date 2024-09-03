import React from 'react';

const TodoItem = ({item, changeTaskHandler}) => {
	return (
			<div className="mt-1 rounded-[30px] bg-pink-500 ">
				<div className="mt-2 flex items-center justify-between p-2">
					<div className="flex items-center justify-center gap-2">
						<input
								onChange={()=>changeTaskHandler(item.id)}
								type="checkbox"
								className="form-checkbox mr-3"
								name="weekly"
								defaultChecked={item.isDone}
						/>
						<div>
							<p style={item.isDone ? {textDecoration: "line-through"} : {}}
							   className="text-base font-bold text-navy-700 dark:text-white">
								{item.task.toUpperCase()}
							</p>
							<span style={item.isDone ? {textDecoration: "line-through"} : {}}
							      className="material-symbols-rounded h-6 w-6 text-navy-700 dark:text-white cursor-pointer">
								{item.description}
							</span>
						</div>
					</div>
				
				</div>
			</div>
	);
};

export default TodoItem;