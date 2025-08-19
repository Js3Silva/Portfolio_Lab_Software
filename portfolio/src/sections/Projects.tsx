import "../assets/CSS/Projects.css";

export default function Projects() {
    return (
        <div className="projects">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-grid">
                <div className="project-card">
                    <h2 className="project-title">Project 1</h2>
                    <p className="project-description">Description of Project 1</p>
                </div>
                <div className="project-card">
                    <h2 className="project-title">Project 2</h2>
                    <p className="project-description">Description of Project 2</p>
                </div>
                <div className="project-card">
                    <h2 className="project-title">Project 3</h2>
                    <p className="project-description">Description of Project 3</p>
                </div>
            </div>
        </div>
    );
}