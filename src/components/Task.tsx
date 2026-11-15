import { useState } from 'react';

type TaskProps = {
    completed: boolean;
    description: string;
    onCheck: () => void;
    onDelete: () => void;
    onEdit: (text: string) => void;
};

function Task({
    completed,
    description,
    onCheck,
    onDelete,
    onEdit,
}: TaskProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState('');

    return (
        <li
            className={`${completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}
        >
            <input
                className="toggle"
                type="checkbox"
                onChange={onCheck}
                checked={completed}
            />
            {isEditing ? (
                <input
                    className="edit"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            onEdit(draft);
                            setIsEditing(false);
                        }
                    }}
                />
            ) : (
                <label>
                    <span className="description">{description}</span>
                </label>
            )}
            <div className="view">
                <button
                    className="icon icon-edit"
                    onClick={() => {
                        setDraft(description);
                        setIsEditing(true);
                    }}
                ></button>
                <button
                    className="icon icon-destroy"
                    onClick={onDelete}
                ></button>
            </div>
        </li>
    );
}

export default Task;
