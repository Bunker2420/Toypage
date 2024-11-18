import { NavLink } from "react-router-dom";

const Navbar = () => {
    const Linksdata = [
        { title: 'Home', path: '/home', color: 'text-cyan-400' }, // Default color before hovering
        { title: 'ToysPage', path: '/products', color: 'text-green-500' },
        { title: 'Contact', path: '/contact', color: 'text-blue-500' }
    ];

    return (
        <>
            {/* Navbar Container */}
            <div className='w-screen h-auto shadow-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex flex-col justify-center items-center'>
                
                {/* Navbar Section */}
                <div className="w-full h-16 flex flex-row justify-between items-center px-6">
                    {/* Logo with Hover Effect */}
                    <div className="text-white font-bold text-3xl transition-all duration-300 transform hover:scale-110 hover:text-pink-300 cursor-pointer">
                        Toys Store
                    </div>

                    {/* Navigation Links with Advanced Hover Effects */}
                    <div className="flex flex-row gap-12 text-white">
                        {Linksdata.map((link, index) => (
                            <NavLink 
                                to={link.path} 
                                key={index} 
                                className={`h-[70%] w-36 py-4 px-8 flex justify-center items-center bg-transparent rounded-md 
                                    ${link.color} 
                                    hover:text-white hover:underline hover:underline-offset-4 hover:scale-110 
                                    hover:bg-gradient-to-r hover:from-${link.color.split('-')[0]}-500 hover:to-${link.color.split('-')[0]}-300
                                    hover:shadow-2xl hover:translate-y-[-3px] transform transition-all duration-500 ease-in-out`}>
                                {link.title}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Scrolling Welcome Text */}
                <div className="w-full h-14 bg-gradient-to-r from-indigo-700 to-pink-800 text-white text-xl font-bold py-3">
                    <marquee behavior="scroll" direction="left" scrollamount="10" className="whitespace-nowrap">
                        <span className="text-2xl font-semibold">Welcome to the Toy Store! 🎉 Shop Now and Enjoy!</span>
                    </marquee>
                </div>
            </div>
        </>
    );
};

export default Navbar;
