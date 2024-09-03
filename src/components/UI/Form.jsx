import React, {useState} from 'react';

const Form = ({submitHandler}) => {
	const [data, setData] = useState({
		task: '',
    description: '',
		isDone: false,
		id: null
	})
	
	const nameChangeHandler = (e)=>{
		setData({...data, task: e.target.value})
	}
	
	const emailChangeHandler = (e)=>{
    setData({...data, description: e.target.value})
  }
	
	const statusChangeHandler = (e)=>{
    setData({...data, isDone: e.target.checked})
  }
	
	const onSubmit = (e) => {
    e.preventDefault();
		submitHandler({...data, id: Math.floor(Math.random()*100)})
		setData({...data, task: '', description: '', isDone: true, id: null})
  }
	
	
	return (
			<>
				{/*<div className=" bg-gray-100 flex  justify-center items-center p-[20px]">*/}
					<div className="py-6 px-8 h-80 bg-white rounded-[30px] shadow-xl">
						<form onSubmit={onSubmit}>
							<div className="mb-6">
								<label htmlFor="task" className="block text-gray-800 font-bold">Task:</label>
								<input value={data.task} onChange={nameChangeHandler} type="text" name="task" id="task"
								       placeholder="task"
								       className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"/>
							</div>
							
							<div>
								<label htmlFor="email" className="block text-gray-800 font-bold">Description:</label>
								<input value={data.description} onChange={emailChangeHandler} type="text" name="description"
								       id="description" placeholder="description"
								       className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"/>
							</div>
							
							<div>
								<label className="inline-flex items-center cursor-pointer">
									<input onChange={statusChangeHandler} type="checkbox" id="rememberMe" className="form-checkbox mr-3"/>
									<span className="text-gray-800">Task done</span>
								</label>
							</div>
							<button
									type="submit"
									disabled={data.task === '' || data.description === ''}
									className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Add
							</button>
						</form>
					</div>
				{/*</div>*/}
			</>
	
	);
};

export default Form;
