import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsArrowLeftCircle, BsBorderWidth, BsChatDotsFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { BiFootball } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { MdAnalytics, MdAdminPanelSettings, MdPhotoLibrary,  } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import HamburgerButton from "../HamburgerMenuButton/HamburgerButton";
import { FaCity } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { adminLogout } from "../../../../redux/adminSlice";
// import icon from "../../../../Assets/ICON.jpg"

const Sidebar = () => {
    const navigate = useNavigate();
  
    const [open, setOpen] = useState(true);
    const [mobileMenu, setMobileMenu] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch()


    const Menus = [
        { title: "Dashboard", path: "", src: <MdAnalytics /> },
        { title: "users", path: "/admin/userlist", src: <HiUsers /> },
        // {
        //     title: "Notification",
        //     path: "",
        //     src: <IoIosNotifications />,
        // },
        { title: "drivers",  path:"/admin/driverlist", src: <HiUsers /> },
       
        
        // {
        //     title: "Ground-Admin",
        //     path: "",
        //     src: <MdAdminPanelSettings />,
        // },
        // {
        //     title: "Chat",
        //     path: "",
        //     src: <BsChatDotsFill />,
        // },
        { title: "Bookings", path: "", src: <BsBorderWidth /> },
       
        { title: "driver approvel", path: "", src: <FaCity /> },
        { title: "car approvel", path: "", src: <AiFillCar /> },
    ];
    const handleLogout = () => {
        console.log('this dispatch');
          dispatch(adminLogout())
        navigate("/admin/login");
     
    };

    return (
        <>
            <div
                className={`${
                    open ? "w-60" : "w-fit"
                } hidden sm:block relative h-screen duration-300 bg-gray-950 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
            >
                <BsArrowLeftCircle
                    className={`${
                        !open && "rotate-180"
                    } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
                    onClick={() => setOpen(!open)}
                />
                <Link to="">
                    <div className={`flex ${open && "gap-x-4"} items-center`}>
                        <img src="https://thumbs.dreamstime.com/b/icon-profile-not-circle-background-color-black-white-194697178.jpg" alt="" className="w-12 h-12 text-red-700" />
                        {open && <span className="text-xl font-admin whitespace-nowrap text-white"></span>}
                    </div>
                </Link>

                <ul className="pt-6">
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? "mt-9" : "mt-2"} ${location.pathname === menu.path && "bg-gray-800 dark:bg-gray-700"}`}
                            >
                                <span className="text-2xl text-sky-400">{menu.src}</span>
                                <span className={`${!open && "hidden"} origin-left duration-300 hover:block text-red-600`}>
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}

                    <li onClick={handleLogout} 
                        className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700  'bg-gray-200 dark:bg-gray-700' }`}
                       >
                        <span className="text-2xl text-sky-400">
                            <FiLogOut />
                        </span>
                        <span  className={`${!open && "hidden"} origin-left duration-300 hover:block text-red-600`}>Logout</span>
                    </li>
                </ul>
            </div>
            {/* Mobile Menu */}
            <div className="pt-3">
                <HamburgerButton  setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
            </div>
            <div className="sm:hidden">
                <div
                    className={`${
                        mobileMenu ? "flex" : "hidden"
                    } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
                >
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index} onClick={() => setMobileMenu(false)}>
                            <span
                                className={` ${
                                    location.pathname === menu.path && "bg-gray-200 dark:bg-gray-700"
                                } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
                            >
                                {menu.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Sidebar;