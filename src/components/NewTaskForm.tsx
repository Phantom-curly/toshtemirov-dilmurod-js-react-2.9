import { useState } from 'react';

type NewTaskProps = {
    onAdd: (text: string) => void;
};

function NewTaskForm({ onAdd }: NewTaskProps) {
    const [draft, setDraft] = useState('');

    return (
        <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus

            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' && draft.trim()!=='') {
                    onAdd(draft.trim());
                    setDraft('')
                }
            }}
        />
    );
}

export default NewTaskForm;
