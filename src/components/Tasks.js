import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {

	return (
        //setTasks() instead of tasks.push()
		<>
            {tasks.map(
                //onDelete passed as a prop here
                (task) => (
                    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
                )
            )}
        </>
	)
}


export default Tasks