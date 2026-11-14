import Task from './Task';

function TaskList() {
    return (
        <ul className="todo-list">
            <Task completed={true} description="Completed task">
            </Task>
            <Task completed={false} description="Editing task">
            </Task>
            <Task completed={false} description="Active task">
            </Task>
        </ul>
    );
}

export default TaskList;