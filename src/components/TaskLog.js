import React from "react";

const TaskLog = () => {
    const tasks = [
        {
            title: "Request Ticket",
            subtitle: "Contract xyz",
            date: "10th August 12:00",
            status: "pending",
        },
        {
            title: "Request Ticket",
            subtitle: "Contract xyz",
            date: "10th August 12:00",
            status: "completed",
        },
        {
            title: "Signature Pending",
            subtitle: "Contract xyz",
            date: "10th August 12:00",
            status: "pending",
        },
    ];

    return (
        <div className="bg-white w-[326px] h-[355px] rounded-[30px] p-3 shadow-lg border border-[#B3B3B3]">
            <h3 className="text-2xl font-medium mb-2" >Task Log</h3>
            <div className="overflow-y-auto">
                <div className="flex flex-col gap-2 items-center h-[275px]">
                    {tasks.map((task, index) => (
                        <div
                            key={index}
                            className="w-[284px] h-[95px] bg-blue-50 border border-[#B3DFFF] flex flex-col rounded-xl p-3"
                        >
                            <div className="flex justify-between border-b-2 pb-1">
                                <div>
                                    <h4 className={`font-semibold text-sm ${task.status === "completed" && "line-through"}`}>{task.title}</h4>
                                    <p className="text-xs">{task.subtitle}</p>
                                </div>
                                <div
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs pt-1">{task.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskLog;
