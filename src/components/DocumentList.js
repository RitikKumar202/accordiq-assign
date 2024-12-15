import React from "react";
import { Link } from "react-router-dom";

const DocumentList = ({ documents }) => {
    return (
        <>
            {documents.map((doc, index) => (
                <tr
                    key={index}
                    className="rounded-lg shadow-sm transition bg-white hover:bg-blue-100"
                >
                    <Link to={`/details/${doc.id}`}>
                        <td className="p-2 font-semibold text-blue-500">
                            {doc.title}
                        </td>
                    </Link>
                    <td className="p-2">
                        <span
                            className="inline-flex items-center gap-1 text-sm font-medium"
                        >
                            <span
                                className={`w-2 h-2 rounded-full ${doc.status === "Review"
                                    ? "bg-blue-500"
                                    : "bg-green-500"
                                    }`}
                            ></span>
                            {doc.status}
                        </span>
                    </td>
                    <td className="p-2 flex gap-2">
                        {doc.assigned.map((person, idx) => (
                            <div
                                key={idx}
                                className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold text-white ${person === "AJ"
                                    ? "bg-[#007F8B]"
                                    : "bg-[#F0A605]"
                                    }`}
                            >
                                {person}
                            </div>
                        ))}
                    </td>
                    <td className="p-2 text-gray-500">{doc.uploaded}</td>
                    <td className="p-2 text-gray-500">{doc.activity}</td>
                    <td className="p-2 text-gray-500 flex items-center justify-between">
                        {doc.lastUpdated}
                        <span className="text-gray-500 font-bold">&gt;</span>
                    </td>
                </tr>
            ))}
        </>
    );
};

export default DocumentList;
