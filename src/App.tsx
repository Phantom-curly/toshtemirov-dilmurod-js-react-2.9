// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import Footer from "@components/Footer";
import TaskList from "@components/TaskList";
import NewTaskForm from "@components/NewTaskForm";


function App() {
    return (
        <>
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm></NewTaskForm>
                </header>
                <section className="main">
                    <TaskList></TaskList>
                    <Footer></Footer>
                </section>
            </section>
        </>
    );
}

export default App;
