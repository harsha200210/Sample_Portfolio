export default function NavBar() {
    return (
        <div className="fixed z-40 w-full bg-[#0F172A] text-white shadow-md px-6 py-4 flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center space-x-3">
                <img
                    src="/src/assets/WhatsApp%20Image%202025-05-16%20at%2021.43.17.jpeg"
                    alt="avatar"
                    className="rounded-full w-9 h-9"
                />
                <span className="text-lg font-semibold">Harsha Dilan</span>
            </div>

            {/* Center Nav */}
            <ul className="flex space-x-6 text-sm font-medium">
                <li>
                    <a href="#home" className="hover:text-blue-400 cursor-pointer   ">Home</a>
                </li>
                <li>
                    <a href="#about" className="hover:text-blue-400 cursor-pointer">About</a>
                </li>
                <li>
                    <a href="#skills" className="hover:text-blue-400 cursor-pointer">Skills</a>
                </li>
                <li>
                    <a href="#education" className="hover:text-blue-400 cursor-pointer">Education</a>
                </li>
                <li>
                    <a href="#project" className="hover:text-blue-400 cursor-pointer">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-blue-400 cursor-pointer">Contact</a>
                </li>
            </ul>

        </div>
    );
}
