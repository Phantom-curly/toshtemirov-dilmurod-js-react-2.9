import Task from './Task';

type TaskListProps = {
    tasks: { id: number; description: string; completed: boolean }[];
    onCheck: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, newDescription: string) => void;
};

function TaskList({ tasks, onCheck, onDelete, onEdit }: TaskListProps) {
    return (
        <ul className="todo-list">
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    completed={task.completed}
                    description={task.description}
                    onCheck={() => onCheck(task.id)}
                    onDelete={() => onDelete(task.id)}
                    onEdit={(text) => onEdit(task.id, text)}
                />
            ))}
        </ul>
    );
}

export default TaskList;
