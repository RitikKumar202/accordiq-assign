import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDocuments } from "../redux/documentSlice";
import DocumentList from "../components/DocumentList";

const ContractTable = ({ searchTerm }) => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.documents);

    const [activeTab, setActiveTab] = useState("Name");

    useEffect(() => {
        dispatch(fetchDocuments());
    }, [dispatch]);

    const filteredDocs = items.filter((doc) =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const tabs = [
        { name: "Name", value: 23, icon: "📄" },
        { name: "Participating", value: 14, icon: "🤝" },
        { name: "All Contracts", value: 50, icon: "📁" },
        { name: "Completed", value: 12, icon: "✅" },
    ];

    return (
        <div className="bg-white min-h-[550px] rounded-[30px] p-4 shadow-lg border border-[#B3B3B3]">
            {/* Tabs */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition ${activeTab === tab.name
                                ? "bg-[#013566] text-white"
                                : "bg-gray-100 text-gray-700"
                                }`}
                        >
                            <span>{tab.icon}</span>
                            <span>{tab.name}</span>
                            <span className="bg-white text-blue-500 rounded-full px-2 py-1 font-bold text-xs">
                                {tab.value}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="flex gap-2">
                    <button className="bg-gray-100 text-gray-700 font-semibold py-1 px-3 rounded-lg hover:bg-blue-100 hover:text-blue-700">
                        Filter
                    </button>
                    <button className="bg-gray-100 text-gray-700 font-semibold py-1 px-3 rounded-lg hover:bg-blue-100 hover:text-blue-700">
                        View
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto h-[450px] overflow-y-auto">
                <table className="w-full text-left border-separate border-spacing-y-3">
                    <thead>
                        <tr className="shadow-sm">
                            <th className="text-gray-500 font-medium p-2">NAME</th>
                            <th className="text-gray-500 font-medium p-2">STATUS</th>
                            <th className="text-gray-500 font-medium p-2">ASSIGNED</th>
                            <th className="text-gray-500 font-medium p-2">UPLOADED</th>
                            <th className="text-gray-500 font-medium p-2">ACTIVITY</th>
                            <th className="text-gray-500 font-medium p-2">LAST UPDATED</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && <div>Loading...</div>}
                        {error && <div className="text-red-500">{error}</div>}
                        <DocumentList documents={filteredDocs} />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContractTable;
