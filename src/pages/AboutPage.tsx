export default function AboutPage() {
    return (
        <main id="about" className="w-screen min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden py-12">
            {/* "About Me" Title */}
            <div className="w-48 mx-auto mt-10 flex items-center justify-center text-3xl font-extrabold border-b-4 border-indigo-400 pb-2 animate-fade-in-up">
                About Me
            </div>

            {/* Paragraphs */}
            <div className="w-11/12 md:w-3/4 mt-12 mx-auto text-gray-300 text-lg font-normal space-y-6 animate-fade-in-left">
                <p>
                    With a passion for crafting robust server-side applications, I specialize in building systems that deliver seamless and reliable user experiences. My expertise spans modern server technologies and database management, enabling me to bring complex functionalities to life.
                </p>
                <p>
                    I thrive on creating efficient interactions between servers, databases, and client-side applications, ensuring every project exceeds expectations. From optimizing performance to securing data and developing scalable APIs, I approach each challenge with precision and creativity.
                </p>
                <p>
                    I'm always excited to tackle new challenges and deliver innovative solutions. Let’s collaborate to create something extraordinary!
                </p>
            </div>

            {/* "Services" Title */}
            <div className="w-40 mx-auto mt-12 flex items-center justify-center text-2xl font-extrabold border-l-4 border-r-4 border-indigo-400 px-4 animate-fade-in-up">
                Services
            </div>

            {/* Services Section */}
            <section className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12 px-6">
                <div className="text-center max-w-xs animate-fade-in-right">
                    <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/design.png"
                        alt="design"
                        className="mx-auto mb-4 w-16 h-16"
                    />
                    <h3 className="font-semibold text-xl mb-3">Design</h3>
                    <p className="text-gray-400">
                        I craft modern, user-friendly designs tailored to your brand, ensuring intuitive and engaging experiences for your audience.
                    </p>
                </div>

                <div className="text-center max-w-xs animate-fade-in-up">
                    <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/code.png"
                        alt="development"
                        className="mx-auto mb-4 w-16 h-16"
                    />
                    <h3 className="font-semibold text-xl mb-3">Development</h3>
                    <p className="text-gray-400">
                        From concept to launch, I build scalable websites with clean code, ensuring top performance across all platforms.
                    </p>
                </div>

                <div className="text-center max-w-xs animate-fade-in-left">
                    <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/maintenance.png"
                        alt="maintenance"
                        className="mx-auto mb-4 w-16 h-16"
                    />
                    <h3 className="font-semibold text-xl mb-3">Maintenance</h3>
                    <p className="text-gray-400">
                        I provide ongoing support to keep your site secure, updated, and running smoothly, so you can focus on your business.
                    </p>
                </div>
            </section>
        </main>
    );
}