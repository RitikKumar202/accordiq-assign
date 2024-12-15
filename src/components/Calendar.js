import React, { useState } from "react";

const Calendar = () => {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today);

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) =>
        (new Date(year, month, 1).getDay() + 6) % 7;

    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

    const handlePrevMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
    };

    const handleNextMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    };

    const isToday = (day) => {
        return (
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
        );
    };

    const upcomingExpirations = [
        { month: "January 2024", count: 1 },
        { month: "March 2024", count: 5 },
        { month: "July 2024", count: 7 },
    ];

    const upcomingRenewals = [
        { month: "January 2024", count: 3 },
        { month: "April 2024", count: 2 },
        { month: "August 2024", count: 6 },
    ];

    return (
        <div className="py-5 px-3 bg-white rounded-[30px] shadow-lg max-w-5xl mx-auto h-[355px] border border-[#B3B3B3]">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Calendar</h1>
                <button className="w-[90px] bg-gray-100 text-xs py-1 px-2 rounded-[100px] border border-gray-300">
                    Monthly <span>▼</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-[#DCDCDC] w-[284px] h-[260px]">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-[13px] font-bold">
                            {currentDate.toLocaleString("default", { month: "long" })}{" "}
                            {currentYear}
                        </h2>
                        <div className="flex gap-2">
                            <button onClick={handlePrevMonth} className="flex items-center justify-center w-5 h-5 bg-gray-200 rounded-full">
                                &lt;
                            </button>
                            <button onClick={handleNextMonth} className="flex items-center justify-center w-5 h-5 bg-gray-200 rounded-full">
                                &gt;
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 text-center text-[9px] font-semibold text-gray-500">
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                        <div>Sun</div>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mt-2">
                        {/* Empty boxes for previous month */}
                        {Array.from({ length: firstDay }).map((_, index) => (
                            <div key={`empty-${index}`} className="py-2"></div>
                        ))}

                        {/* Current month days */}
                        {Array.from({ length: daysInMonth }, (_, index) => {
                            const day = index + 1;
                            return (
                                <div
                                    key={day}
                                    className={`py-1 text-center text-[9px] ${isToday(day)
                                        ? "bg-[#F9CA24] text-white font-bold rounded-full w-7 h-7 flex items-center justify-center"
                                        : "text-gray-700"
                                        }`}
                                >
                                    {day}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="h-[265px] overflow-y-auto px-2">
                    <h2 className="text-sm font-normal mb-2">Upcoming Expirations</h2>
                    <div className="space-y-2 mb-4">
                        {upcomingExpirations.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#e2f4ffbd] border border-[#B3DFFF] flex justify-between items-center px-3 py-1 rounded-xl cursor-pointer"
                            >
                                <span className="text-sm font-semibold">{item.month}</span>
                                <div className="flex gap-2 items-center justify-center">
                                    <span className="bg-[#045762] text-white text-sm w-5 h-5 flex items-center justify-center font-semibold rounded-full">
                                        {item.count}
                                    </span>
                                    <span className="text-[#045762] text-2xl">{">"}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-sm font-normal mb-2">Upcoming Renewals</h2>
                    <div className="space-y-2">
                        {upcomingRenewals.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#e2f4ffbd] border border-[#B3DFFF] flex justify-between items-center px-3 py-1 rounded-xl cursor-pointer"
                            >
                                <span className="text-sm font-semibold">{item.month}</span>
                                <div className="flex gap-2 items-center justify-center">
                                    <span className="bg-[#045762] text-white text-sm w-5 h-5 flex items-center justify-center font-semibold rounded-full">
                                        {item.count}
                                    </span>
                                    <span className="text-[#045762] text-2xl">{">"}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
