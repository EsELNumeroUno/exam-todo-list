import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	tasks: [],
	fakeTasks: []
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		setTask: (state, action) => {
			state.tasks = [...state.tasks, action.payload]
			state.fakeTasks = [...state.fakeTasks, action.payload]
		},
		changeTask: (state, action)=>{
			const item = state.tasks.find(item=>item.id === action.payload)
			if(item){
        item.isDone =!item.isDone
      }
			const fakeItem = state.fakeTasks.find(item=>item.id === action.payload)
			if(fakeItem){
				fakeItem.isDone =!fakeItem.isDone
			}
			},
		getDoneTasks: (state)=>{
			state.fakeTasks = state.tasks.filter(item => {
				return item.isDone
			})
		},
		getNotDoneTasks: (state)=>{
			state.fakeTasks = state.tasks.filter(item => {
				return !item.isDone
		})
		},
		getAllTasks: (state)=>{
			state.fakeTasks = [...state.tasks]
		}
		
	},
})


// getDoneTasks: (state)=>{
// 	state.tasks = state.tasks.filter(item => {
// 		return item.isDone
// 	})
// },
// 		getNotDoneTasks: (state)=>{
// 	state.tasks = state.tasks.filter(item => {
// 		return !item.isDone
// 	})
// },
// 		getAllTasks: (state)=>{
// 	state.tasks = [...state.tasks]
// }
