type TaskProps = {
    completed: boolean;
    description: string;
};

function Task({ completed, description }: TaskProps) {
    return (
        <li className={completed ? 'completed' : ''}>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>
                    <span className="description">{description}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
        </li>
    );
}

export default Task;
