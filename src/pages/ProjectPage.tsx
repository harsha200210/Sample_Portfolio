export default function ProjectPage() {
    const projects = [
        {
            title: "Connect Four Game",
            description: "A first-semester module project implementing the Connect Four game using algorithms for gameplay logic.",
            languages: [
                { label: "Frontend", value: "Java FX" },
                { label: "Backend", value: "Java" },
            ],
            github: "https://github.com/harsha200210/connect-four-game-assignment.git",
            image: "src/assets/connect4.jpeg",
        },
        {
            title: "Laptop Shop Management System",
            description: "A standalone application for managing a laptop shop, handling items, customers, suppliers, and orders.",
            languages: [
                { label: "Frontend", value: "Java FX" },
                { label: "Backend", value: "Java" },
                { label: "Database", value: "MySQL" },
            ],
            github: "https://github.com/harsha200210/Laptop_Shop_Management.git",
            image: "src/assets/laptopshop1.jpeg",
        },
    ];

    return (
        <main id="project" className="w-screen min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden py-12">
            {/* Projects Title */}
            <div className="w-48 mx-auto mt-10 flex items-center justify-center text-3xl font-extrabold border-b-4 border-indigo-400 pb-2 animate-fade-in-up">
                Projects
            </div>

            {/* Projects Section */}
            <section className="w-11/12 md:w-3/4 mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="card bg-gray-700 rounded-lg overflow-hidden animate-slide-up-right"
                        style={{ animation: idx === 0 ? 'slideUpRight 0.8s ease-out forwards' : 'slideUpLeft 0.8s ease-out forwards' }}
                    >
                        <div className="card-image">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                            <p className="text-sm font-semibold mb-2">Tech Stack:</p>
                            {project.languages.map((lang, langIdx) => (
                                <p key={langIdx} className="text-sm text-gray-400">
                                    {lang.label}: {lang.value}
                                </p>
                            ))}
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 inline-block mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.906-.015 3.3 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                                </svg>
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}