export default function Footer() {
    const socialLinks = [
        { name: 'Email', href: 'mailto:harshadilanbb2020@gmail.com', icon: 'https://img.icons8.com/ios-filled/50/ffffff/email.png' },
        { name: 'GitHub', href: 'https://github.com/harsha200210', icon: 'https://img.icons8.com/ios-filled/50/ffffff/github.png' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/feed/', icon: 'https://img.icons8.com/ios-filled/50/ffffff/linkedin.png' },
        { name: 'Facebook', href: 'https://www.facebook.com/harsha.dilan.7106', icon: 'https://img.icons8.com/ios-filled/50/ffffff/facebook.png' },
        { name: 'Instagram', href: 'https://www.instagram.com/harsha_dilan202', icon: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png' },
    ];

    return (
        <footer id="contact" className="w-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
            <div className="w-11/12 md:w-3/4 mx-auto flex flex-col items-center animate-fade-in-up">
                {/* Name and Tagline */}
                <h2 className="text-2xl font-extrabold mb-4">Harsha Dilan</h2>
                <p className="text-gray-400 text-sm mb-6">Crafting innovative software solutions with passion and precision.</p>

                {/* Social Links */}
                <div className="flex gap-6 mb-8">
                    {socialLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon transition-transform duration-200"
                            title={link.name}
                        >
                            <img src={link.icon} alt={link.name} className="w-8 h-8" />
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Harsha Dilan. All rights reserved.
                </p>
            </div>
        </footer>
    );
}