function Task({ completed, description }) {
    return (
        <li className={completed ? 'completed' : ''}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={completed} />
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
