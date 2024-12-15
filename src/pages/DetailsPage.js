import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailsPage = () => {
    const { id } = useParams(); // Get the document ID from the URL
    const [document, setDocument] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/documents/${id}`
                );
                setDocument(response.data);
            } catch (err) {
                setError("Failed to load document details.");
            } finally {
                setLoading(false);
            }
        };

        fetchDocument();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="p-4">
            <h1 className="text-3xl font-semibold mb-4">Document Details of id: {id}</h1>
            {document && (
                <div className="border p-4 shadow-sm rounded-[30px] border-[#B3B3B3]">
                    <p className="text-lg">
                        <strong>Title:</strong> {document.title}
                    </p>
                    <p className="text-lg">
                        <strong>Last Updated:</strong> {document.lastUpdated}
                    </p>
                    <p className="text-lg">
                        <strong>Status:</strong> {document.status}
                    </p>
                    <p className="text-lg">
                        <strong>Activity:</strong> {document.activity}
                    </p>
                    <p className="text-lg">
                        <strong>Assigned To:</strong> {document.assigned.join(", ")}
                    </p>
                </div>
            )}
        </div>
    );
};

export default DetailsPage;
