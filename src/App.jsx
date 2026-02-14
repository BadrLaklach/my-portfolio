import { useState } from 'react'
import projects from './data/projects'

function App() {
    return (
        <div className="App">
            <h1>My Portfolio</h1>
            <div className="card">
                <h2>Projects</h2>
                <ul>
                    {projects.map((project, index) => (
                        <li key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App
