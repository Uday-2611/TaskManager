import React from 'react'

const TaskListNumbers = ({ data }) => {
    return (
        <div className='flex mt-10 justify-between gap-5 '>
            <div className='w-[45%] bg-neutral-800 rounded-xl py-6 px-9'>
                <h2 className='text-3xl font-semibold text-yellow-500 '>
                    {data.taskNumbers.newTask}
                </h2>
                <h3 className='text-xl font-medium text-yellow-500 '>
                    New Task
                </h3>
            </div>
            <div className='w-[45%] bg-neutral-800 rounded-xl py-6 px-9'>
                <h2 className='text-3xl font-semibold text-green-600'>
                    {data.taskNumbers.completed}
                </h2>
                <h3 className='text-xl font-medium text-green-600'>
                    Completed Task
                </h3>
            </div>
            <div className='w-[45%] bg-neutral-800 rounded-xl py-6 px-9'>
                <h2 className='text-3xl font-semibold text-blue-600 '>
                    {data.taskNumbers.active}
                </h2>
                <h3 className='text-xl font-medium text-blue-600 '>
                    Accepted Task
                </h3>
            </div>
            <div className='w-[45%] rounded-xl py-6 px-9 bg-neutral-800'>
                <h2 className='text-3xl font-semibold text-red-600'>
                    {data.taskNumbers.failed}
                </h2>
                <h3 className='text-xl font-medium text-red-600'>
                    Failed Task
                </h3>
            </div>
        </div>
    )
}

export default TaskListNumbers
