import React, { useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, settaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [asignTo, setasignTo] = useState('')
    const [category, setcategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1
            }
        })

        setUserData(data)
        console.log(data)

        settaskTitle('')
        settaskDescription('')
        settaskDate('')
        setasignTo('')
        setcategory('')
    }

    return (
        <div className='bg-[#1c1c1c] p-5 mt-7 rounded'>
            <form
                onSubmit={(e) => {
                    submitHandler(e)
                }}
                className='flex w-full items-start justify-between  flex-wrap '>

                <div className='w-1/2'>
                    <div>
                        <h3 classname='text-sm text-gray-300 mb-0.5'>
                            Task Title
                        </h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                settaskTitle(e.target.value);
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="text" placeholder='Make a UI Design' />
                    </div>
                    <div>
                        <h3 classname='text-sm text-gray-300 mb-0.5'>
                            Date
                        </h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                settaskDate(e.target.value);
                            }}
                            type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' />
                    </div>

                    <div>
                        <h3 classname='text-sm text-gray-300 mb-0.5'>
                            Assign To
                        </h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setasignTo(e.target.value);
                            }}
                            type="text" placeholder='Employee Name' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' />
                    </div>

                    <div>
                        <h3 classname='text-sm text-gray-300 mb-0.5'>
                            Category
                        </h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setcategory(e.target.value);
                            }}
                            type="text" placeholder='design, dev, etc...' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' />
                    </div>
                </div>

                <div className='w-1/2'>
                    <h3 classname='text-sm text-gray-300 mb-0.5'>
                        Description
                    </h3>
                    <textarea
                        value={taskDescription
                        }
                        onChange={(e) => {
                            settaskDescription(e.target.value);
                        }}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 '>

                    </textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full' >
                        Create Task
                    </button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask
