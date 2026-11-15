import { useState } from 'react';
import Footer from '@components/Footer';
import TaskList from '@components/TaskList';
import NewTaskForm from '@components/NewTaskForm';

let nextId = 4;

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, description: 'Completed task', completed: true },
        { id: 2, description: 'Editing task', completed: false },
    ]);

    function checkTask(id: number) {
        setTasks(
            tasks.map((t) =>
                t.id === id ? { ...t, completed: !t.completed } : t,
            ),
        );
    }

    function deleteTask(id: number) {
        setTasks(tasks.filter((t) => t.id !== id));
    }

    function editTask(id: number, newDescription: string) {
        setTasks(
            tasks.map((t) =>
                t.id === id ? { ...t, description: newDescription } : t,
            ),
        );
    }

    function addTask(description: string) {
        const newTask = {
            id: nextId,
            description,
            completed: false,
            created: new Date(),
        };
        nextId++;

        setTasks([...tasks, newTask]);
    }

    return (
        <>
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm onAdd={addTask} />
                </header>
                <section className="main">
                    <TaskList
                        tasks={tasks}
                        onCheck={checkTask}
                        onDelete={deleteTask}
                        onEdit={editTask}
                    />
                    <Footer />
                </section>
            </section>
        </>
    );
}

export default App;
