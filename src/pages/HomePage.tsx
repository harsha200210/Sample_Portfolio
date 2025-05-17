export default function HomePage() {
    return (
        <main id="home" className="flex h-screen w-screen overflow-hidden relative bg-gradient-to-br from-gray-900 to-gray-800">
            {/* Left Section */}
            <div className="w-1/2 relative z-10 flex flex-col justify-center items-start pl-16 text-white">
                <h2 className="text-2xl font-light animate-fade-in-up">Hello, I'm</h2>
                <h1 className="text-5xl font-extrabold mt-2 tracking-tight">
                    {[...'Harsha Dilan'].map((char, idx) => (
                        <span
                            key={idx}
                            className="inline-block hover:text-indigo-400 transition-colors duration-300"
                        >
                                    {char}
                                </span>
                    ))}
                </h1>
                <p className="text-xl mt-4 typewriter-animation text-gray-300">
                    Software Engineering Student
                </p>

                {/* Social Icons */}
                <div className="flex gap-6 mt-8">
                    <a
                        href="mailto:harshadilanbb2020@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-200"
                    >
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/email.png" alt="email" className="w-8 h-8" />
                    </a>
                    <a
                        href="https://github.com/harsha200210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-200"
                    >
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="github" className="w-8 h-8" />
                    </a>
                    <a
                        href="https://www.linkedin.com/feed/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-200"
                    >
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin" className="w-8 h-8" />
                    </a>
                    <a
                        href="https://www.facebook.com/harsha.dilan.7106"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-200"
                    >
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png" alt="facebook" className="w-8 h-8" />
                    </a>
                    <a
                        href="https://www.instagram.com/harsha_dilan202"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-200"
                    >
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="instagram" className="w-8 h-8" />
                    </a>
                </div>
            </div>

            {/* Right Section */}
            <div className="relative w-1/2 flex items-center justify-center overflow-hidden">
                {/* Skew Divider */}
                <div className="absolute w-full h-full bg-indigo-600 skew-divider z-0" />

                {/* Image */}
                <div className="relative z-10">
                    <img
                        src="/src/assets/harsha.png"
                        alt="Harsha Dilan"
                        className="w-[32vw] h-[80vh] object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </main>
    );
}