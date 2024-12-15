import React from 'react'
import ContractValueDashboard from '../components/ContractValueDashboard'
import TaskLog from '../components/TaskLog'
import Calendar from '../components/Calendar'
import ContractTable from '../components/ContractTable'

const HomePage = ({ searchTerm }) => {
    return (
        <div className="flex flex-col gap-4 overflow-y-auto p-5">
            <div className="flex gap-3">
                <ContractValueDashboard />
                <TaskLog />
                <Calendar />
            </div>
            <ContractTable searchTerm={searchTerm} />
        </div>
    )
}

export default HomePage