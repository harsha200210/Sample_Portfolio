export default function EducationPage() {
    return (
        <main id="education" className="w-screen min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden py-12">
            {/* Education Title */}
            <div className="w-48 mx-auto mt-10 flex items-center justify-center text-3xl font-extrabold border-b-4 border-indigo-400 pb-2 animate-fade-in-up">
                Education
            </div>

            {/* Diploma Content */}
            <section className="dip-content mt-16 mx-auto animate-zoom-in relative">
                <div className="wrap flex w-[90vmin] h-[65vmin] mx-auto border-4 border-indigo-600 rounded-lg">
                    <div className="overlay flex w-full h-full p-4 bg-gray-900">
                        <div className="overlay-content flex flex-col justify-between w-40 p-2 border-r-4 border-indigo-400 animate slide-left delay-2">
                            <div>
                                <h1 className="text-3xl font-bold animate slide-left pop delay-4">Diploma</h1>
                                <p className="text-sm italic animate slide-left pop delay-5">IJSE</p>
                            </div>
                            <div className="dots flex justify-around w-16 absolute bottom-4 right-4">
                                <div className="dot w-4 h-4 bg-white border border-indigo-600 rounded-full animate slide-up delay-6"></div>
                                <div className="dot w-4 h-4 bg-white border border-indigo-600 rounded-full animate slide-up delay-7"></div>
                                <div className="dot w-4 h-4 bg-white border border-indigo-600 rounded-full animate slide-up delay-8"></div>
                            </div>
                        </div>
                        <div
                            className="image-content absolute top-0 right-0 w-[60vmin] h-full"
                            style={{
                                backgroundImage: "url('src/assets/education.jpg')",
                            }}
                        ></div>
                    </div>
                    <div className="text absolute top-0 right-0 w-[60vmin] h-full p-8 bg-white text-gray-800 shadow-inner overflow-y-auto">
                        <img
                            src="/src/assets/download.png"
                            alt="IJSE Logo"
                            className="w-34 h-14 rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold absolute top-4 right-4">Institute Of Software Engineering</h3>
                        <div className="time absolute top-24 bg-indigo-500 text-white text-sm font-semibold px-4 py-1 rounded">2023-2025</div>
                        <h5 className="text-lg font-medium absolute top-36">Diploma Of Software Engineering</h5>
                        <p className="text-sm absolute top-48 leading-relaxed">
                            Our mission being “Contributing most capable and reliable software engineers with profound knowledge in most recent technologies who can match up to demands of ever-evolving IT industry”, celebrating 16 years of excellence, IJSE has fortified the Sri Lankan IT sector, producing over 7000 skilled professionals who now excel in numerous reputed companies nationwide. IJSE, being one of the leading IT education providers in Sri Lanka has been focusing on enhancing the skills and attitudes which are desperately sought by the IT industry ever since its inception in 2006 with our most exquisite Software Engineering courses in Sri Lanka.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}