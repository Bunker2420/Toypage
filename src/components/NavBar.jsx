import { NavLink } from "react-router-dom";

const Navbar = () => {
    const Linksdata = [
        { title: 'Home', path: '/home', color: 'text-yellow-500' },
        { title: 'Products', path: '/products', color: 'text-green-500' },
        { title: 'Contact', path: '/contact', color: 'text-blue-500' }
    ];

    return (
        <>
            <div className='w-screen h-16 shadow-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex flex-row justify-center items-center'>
                <div className='w-[40%] flex justify-start items-center font-bold text-3xl text-white'>
                    Toys Store
                </div>
                <div className='w-[60%] h-full flex justify-end items-center'>
                    <div className='w-full h-full flex flex-row justify-end items-center gap-8 font-semibold text-white'>
                        {Linksdata.map((link, index) => (
                            <NavLink 
                                to={link.path} 
                                key={index} 
                                className={`h-[65%] w-24 py-2 px-4 flex justify-center items-center bg-transparent border-2 border-transparent rounded-md ${link.color} hover:bg-white hover:text-blue-500 transition-all duration-300 transform hover:scale-105`}>
                                {link.title}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
