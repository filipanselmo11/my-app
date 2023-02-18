import { useState } from "react";
import TodoTask from "./components/TodoTask/TodoTask";
import { ITask } from "./interfaces";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles/styles.css'


function App() {
	const [task, setTask] = useState("")
	const [todoList, setTodoList] = useState<ITask[]>([])

	function addTask(): void {
		if (task === "") {
			toast.error("Digite alguma task")
		} else {
			const idRandom = (num: number) => Math.floor(Math.random() * num)
			console.log(idRandom(10))

			const newTask = { id: idRandom(999999999999), nameTask: task }

			setTodoList([...todoList, newTask])

			toast.success("Task cadastrada com sucesso");
		}
	}

	function deleteTask(deleteTaskById: number): void {
		setTodoList(todoList.filter((taskName) => taskName.id !== deleteTaskById))
	}

	return (
		<div className="App">

			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false} />

			<header>

				<h2>Lists</h2>

				<input
					type="text" autoComplete="off"
					placeholder="Escrever task..."
					name="task"
					className="input"
					value={task}
					onChange={(e) => setTask(e.target.value)}
				/>

				<button onClick={addTask} type="submit" className="btn-header">Adicionar Task</button>
			</header>
			<div className="line"></div>
			{todoList.map((task, key) => (
				<TodoTask key={key} task={task} deleteTask={deleteTask} />
			))}
		</div>
	);
}

export default App;
