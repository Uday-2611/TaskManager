import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext);

    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-56'>
            <div className='mb-2 py-2 px-4 flex justify-between rounded bg-neutral-800'>
                <h2 className='text-lg font-medium w-1/5' >Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed</h5>
            </div>
            <div id='allTaskList' className='h-[80%] overflow-auto  '>
                {userData.map(function (elem, idx) {
                    return <div key={idx} className='mb-2 py-2 px-4 flex justify-between rounded bg-neutral-700'>
                        <h2 className='w-1/5 text-lg font-medium' >{elem.firstName}</h2>
                        <h3 className='w-1/5 text-yellow-500 text-lg font-medium'>{elem.taskNumbers.newTask}</h3>
                        <h5 className='text-blue-600 w-1/5 text-lg font-medium'>{elem.taskNumbers.active}</h5>
                        <h5 className='text-green-600 w-1/5 text-lg font-medium'>{elem.taskNumbers.completed}</h5>
                        <h5 className='text-red-600 w-1/5 text-lg font-medium'>{elem.taskNumbers.failed}</h5>
                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTask
