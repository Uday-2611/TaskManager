import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div className='h-full w-[300px] bg-neutral-800 rounded-xl flex-shrink-0 p-5 '>
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>
                    {data.category}
                </h3>
                <h4 className='text-sm'>
                    {data.taskDate}
                </h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>
                {data.taskTitle}
            </h2>
            <p className='text-sm mt-2 '>
                {data.taskDescription}
            </p>

            <div className='mt-2 '>
                <button className='w-full bg-red-500 mt-2 rounded py-1 px-2 hover:bg-red-600'>
                    Failed
                </button>
            </div>
        </div>
    )
}

export default FailedTask
