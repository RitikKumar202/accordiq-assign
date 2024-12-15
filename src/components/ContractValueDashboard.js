import React from 'react';

const ContractValueDashboard = () => {
    return (
        <div className="flex flex-col gap-3 h-[355px]">
            <div className="w-[255px] h-[127px] bg-white border border-[#B3B3B3] py-4 px-5 rounded-[30px] shadow-sm">
                <h3 className="text-base font-normal text-black">Contract Value</h3>
                <p className="text-[32px] font-semibold text-[#013566]">$2.58B</p>
                <p className="text-sm font-normal text-black">No. of contracts - 2.1K</p>
            </div>
            <div className="w-[255px] h-[102px] bg-white border border-[#B3B3B3] py-4 px-5 rounded-[30px] shadow-sm">
                <h3 className="text-base font-normal text-black">Total Contracts</h3>
                <p className="text-[32px] font-semibold text-[#013566]">2,034</p>
            </div>
            <div className="w-[255px] h-[102px] bg-white border border-[#B3B3B3] py-4 px-5 rounded-[30px]">
                <h3 className="text-base font-normal text-black">Under Review</h3>
                <p className="text-[32px] font-semibold text-[#013566]">50</p>
            </div>
        </div>
    );
};

export default ContractValueDashboard;