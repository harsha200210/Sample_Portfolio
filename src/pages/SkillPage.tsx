export default function SkillsPage() {
    const usingSkills = [
        { name: 'Java', icon: 'https://img.icons8.com/color/150/java-coffee-cup-logo.png' },
        { name: 'HTML', icon: 'https://img.icons8.com/color/150/html-5.png' },
        { name: 'CSS', icon: 'https://img.icons8.com/color/150/css3.png' },
        { name: 'MySQL', icon: 'https://img.icons8.com/color/150/mysql-logo.png' },
        { name: 'Figma', icon: 'https://img.icons8.com/color/150/figma.png' },
    ];

    const learningSkills = [
        { name: 'Spring Boot', icon: 'https://img.icons8.com/color/150/spring-logo.png' },
        { name: 'Dart', icon: 'https://img.icons8.com/color/150/dart.png' },
        { name: 'JavaScript', icon: 'https://img.icons8.com/color/150/javascript.png' },
    ];

    return (
        <main id="skills" className="w-screen min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden py-12">
            {/* Skills Title */}
            <div className="w-48 mx-auto mt-10 flex items-center justify-center text-3xl font-extrabold border-b-4 border-indigo-400 pb-2 animate-fade-in-up">
                Skills
            </div>

            {/* Using Now Section */}
            <h2 className="text-2xl font-bold mt-12 ml-8 animate-fade-in-right">Using Now:</h2>
            <section className="using-skill mt-6">
                <div className="marquee animate-zoom-in">
                    <ul className="marquee-content">
                        {usingSkills.map((skill, idx) => (
                            <li key={idx}>
                                <div className="flex flex-col items-center">
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-24 h-24 mb-4"
                                    />
                                    <span className="text-lg font-semibold">{skill.name}</span>
                                </div>
                            </li>
                        ))}
                        {/* Duplicate for seamless marquee */}
                        {usingSkills.map((skill, idx) => (
                            <li key={`duplicate-${idx}`}>
                                <div className="flex flex-col items-center">
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-24 h-24 mb-4"
                                    />
                                    <span className="text-lg font-semibold">{skill.name}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Learning Section */}
            <h2 className="text-2xl font-bold mt-12 ml-8 animate-fade-in-right">Learning:</h2>
            <section className="learning-skill w-11/12 md:w-1/2 mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 animate-zoom-in">
                {learningSkills.map((skill, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-24 h-24 mb-4"
                        />
                        <span className="text-lg font-semibold">{skill.name}</span>
                    </div>
                ))}
            </section>
        </main>
    );
}