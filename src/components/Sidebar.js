import React from "react";
import { images } from "../utils/ImageUtils"

const Sidebar = () => {
    return (
        <div className="flex flex-col h-screen w-[80px] bg-gray-200 items-center justify-between py-4">
            <div className="flex flex-col gap-7 items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center">
                    <img
                        src={images.Logo}
                        alt={images.Logo}
                    />
                </div>

                <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#013566] flex items-center justify-center">
                        <img
                            src={images.HomeIcon}
                            alt={images.HomeIcon}
                            className="w-6 h-6"
                        />
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#fff] flex items-center justify-center">
                        <img
                            src={images.RepoIcon}
                            alt={images.RepoIcon}
                            className="w-6 h-6"
                        />
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#fff] flex items-center justify-center">
                        <img
                            src={images.AnalyticsIcon}
                            alt={images.AnalyticsIcon}
                            className="w-6 h-6"
                        />
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#fff] flex items-center justify-center">
                        <img
                            src={images.RepoIcon}
                            alt={images.RepoIcon}
                            className="w-6 h-6"
                        />
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#fff] flex items-center justify-center">
                        <img
                            src={images.TaskMAnagerIcon}
                            alt={images.TaskMAnagerIcon}
                            className="w-6 h-6"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#fff] flex items-center justify-center">
                    <img
                        src={images.HelpIcon}
                        alt={images.HelpIcon}
                        className="w-8 h-8"
                    />
                </div>

                <div className="w-10 h-10 rounded-full bg-[#fff] flex items-center justify-center">
                    <img
                        src={images.SettingIcon}
                        alt={images.SettingIcon}
                        className="w-6 h-6"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
