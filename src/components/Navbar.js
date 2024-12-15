import React from "react";
import { images } from "../utils/ImageUtils";

const Navbar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center bg-white border border-[#B3B3B3] rounded-full px-4 py-2 w-1/3">
                <img src={images.SearchIcon} alt={images.SearchIcon} className="w-[15px] h-[15px]" />
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="ml-3 bg-transparent focus:outline-none w-full"
                />
            </div>

            <div className="flex items-center space-x-4">
                <button className="flex gap-1 items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                    <img src={images.AddIcon} alt={images.AddIcon} className="w-[16px] h-[16px]" />
                    <span className="mr-2">Upload</span>
                </button>

                <button className="flex items-center justify-center w-10 h-10 bg-[#FFFFFF] rounded-full">
                    <img src={images.NotificationIcon} alt={images.NotificationIcon} className="w-6 h-6" />
                </button>

                <button className="flex items-center justify-center w-10 h-10 bg-[#FFFFFF] rounded-full">
                    <img src={images.TaskIcon} alt={images.TaskIcon} className="w-6 h-6" />
                </button>

                <div className="w-10 h-10 rounded-full overflow-hidden bg-[#FFFFFF]">
                    <img src={images.ProfileIcon} alt={images.ProfileIcon} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
