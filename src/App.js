import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Doctors appt",
			day: "Feb 4 at 2:30p",
			reminder: true,
		},
		{
			id: 2,
			text: "Feed dog",
			day: "Feb 3 at 2:30p",
			reminder: true,
		},
		{
			id: 3,
			text: "Feed cat",
			day: "Feb 10 at 6:30p",
			reminder: false,
		},
	]);

	// Add Task
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000);
		task.id = id;
		setTasks([...tasks, task]);
	};

	// Delete Task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Toggle reminder
	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	return (
		<div className="container">
			<Header
				title="Task Tracker"
				showAddTask={showAddTask}
				onToggle={() => setShowAddTask(!showAddTask)}
			/>
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					onDelete={deleteTask}
					onToggle={toggleReminder}
				/>
			) : (
				"No tasks to show"
			)}
		</div>
	);
};

export default App;
