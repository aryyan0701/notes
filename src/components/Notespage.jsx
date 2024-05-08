import React, { useState, useEffect } from 'react';
import { IoCheckmarkCircleOutline, IoCheckmarkCircle } from 'react-icons/io5';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoArrowBackOutline } from "react-icons/io5";
import { motion } from "framer-motion"
import { useRef } from 'react';
import { FaEdit } from "react-icons/fa";

function Notespage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [timeLimitation, setTimeLimitation] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // Load tasks from sessionStorage when component mounts
    const savedTasks = JSON.parse(sessionStorage.getItem('tasks'));
    if (savedTasks && savedTasks.length > 0) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    // Save tasks to sessionStorage whenever tasks change
    sessionStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const openModal = (index) => {
    if (typeof index === 'number') {
      setEditIndex(index);
      const task = tasks[index];
      setTaskName(task.name);
      setTimeLimitation(task.timeLimit);
    } else {
      setEditIndex(null); 
      setTaskName(''); 
      setTimeLimitation(''); 
    }
    setIsModalOpen(true);
  };
  

  const closeModal = () => {
    setIsModalOpen(false);
    setEditIndex(null); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = {
        name: taskName,
        timeLimit: timeLimitation,
        complete: updatedTasks[editIndex].complete,
      };
      setTasks(updatedTasks);
    } else {
      const newTask = {
        name: taskName,
        timeLimit: timeLimitation,
        complete: false,
      };
      setTasks([newTask, ...tasks]);
    }
    setTaskName('');
    setTimeLimitation('');
    closeModal();
  };
  
  

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].complete = !updatedTasks[index].complete;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    const task = tasks[index];
    setTaskName(task.name);
    setTimeLimitation(task.timeLimit);
    setIsModalOpen(true); 
  };

  const ref = useRef(null);

  const completeTasksCount = tasks.filter(task => task.complete).length;
  const pendingTasksCount = tasks.filter(task => !task.complete).length;

  return (
    <>
     <div className="flex-row w-full h-[30px] bg-slate-100 p-10 text-black text-xl md:text-2xl md:hidden">
      <a href="/" className='text-black'><IoArrowBackOutline className='text-gray-900 text-[24px] rounded'></IoArrowBackOutline></a>
       </div>
      <div ref={ref} className="relative w-full h-screen bg-zinc-800 flex flex-wrap justify-start">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-none tracking-tighter">
          DOCS
        </h1>
        <button onClick={openModal} className="absolute sm:bottom-28 sm:right-10 bottom-[13rem] right-[2rem] bg-blue-600 text-white text-xl px-4 py-2 rounded-md">
          Add Task
        </button>
        <div className="absolute sm:bottom-3 sm:right-8 bottom-[7rem] right-[2rem] card w-50 p-4 bg-slate-100 text-black text-[20px] font-bold rounded-lg">
          <h2 className="ml-2">Completed tasks: <span className="text-green-500">{completeTasksCount}</span></h2>
          <h2 className="ml-2">Pending tasks: <span className="text-gray-500">{pendingTasksCount}</span></h2>
        </div>
        <div className="flex flex-col p-3">
          {tasks.map((task, index) => (
            <motion.div drag dragConstraints={ref} key={index} className="bg-gray-200 p-4 rounded-md mb-4 w-80 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{task.name}</h3>
                <p className="mb-2">Deadline: {task.timeLimit}</p>
                <div>
                  {task.complete ? (
                    <>
                      <div className="flex">
                        <IoCheckmarkCircle
                          className="text-green-500"
                          size={24}
                          onClick={() => handleToggleComplete(index)}
                        />
                        <span className="text-green-500 ml-2">Done</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex">
                      <IoCheckmarkCircleOutline
                        className="text-gray-500"
                        size={24}
                        onClick={() => handleToggleComplete(index)}
                      />
                      <span className="text-gray-500 ml-2">Pending</span>
                    </div>
                  )}
                </div>
              </div>
              <div className='flex'>
                <button onClick={() => handleEditTask(index)} className='me-2'>
                  <FaEdit className="text-green-500" size={24} />
                </button>
                <button onClick={() => handleDeleteTask(index)}>
                  <RiDeleteBinLine className="text-red-500" size={24} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl mb-4 text-center font-semibold">{editIndex !== null ? 'Edit Task' : 'Add Task'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="taskName" className="block mb-1">Task Name:</label>
                <input
                  type="text"
                  id="taskName"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  className="border-gray-300 border rounded-md px-3 py-1 w-[25rem]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="timeLimitation" className="block mb-1">Deadline:</label>
                <input
                  type="text"
                  id="timeLimitation"
                  value={timeLimitation}
                  onChange={(e) => setTimeLimitation(e.target.value)}
                  className="border-gray-300 border rounded-md px-3 py-1 w-[25rem]"
                />
              </div>
              <button type="submit" className="bg-zinc-800 text-white px-4 py-2 rounded-md">{editIndex !== null ? 'Save' : 'Add'}</button>
              <button onClick={closeModal} className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Close</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Notespage;