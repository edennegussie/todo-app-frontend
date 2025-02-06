import { FaEdit, FaTrashAlt } from 'react-icons/fa';

export default function TaskItem({ task }) {
    console.log(task, task.duedate);

    return (
        <div className="bg-white flex-grow shadow-md rounded-2xl p-4 border border-gray-200 min-h-72 min-w-96 max-w-96 ">
            {/* Header */}
            <div className="flex flex-col mb-2">
                <div className="flex justify-between items-center text-gray-800">
                    <select
                        className="text-sm font-medium text-gray-700 capitalize bg-white border border-gray-300 
                        rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={task.status}
                        style={{
                            backgroundColor: task.status === "TODO"
                                ? "#E5E7EB" // grey for TODO
                                : task.status === "IN_PROGRESS"
                                    ? "#93C5FD" // Blue for IN_PROGRESS
                                    : "#86EFAC" // Green for COMPLETED
                        }}
                    >
                        <option value="TODO" className="text-orange-500">TODO</option>
                        <option value="IN_PROGRESS" className="text-blue-500">IN_PROGRESS</option>
                        <option value="COMPLETED" className="text-green-500">COMPLETED</option>
                    </select>
                    <span className="flex space-x-3">
                        <FaEdit className="cursor-pointer  text-gray-500 hover:text-blue-500" />
                        <FaTrashAlt className="cursor-pointer text-gray-500 hover:text-red-500" />
                    </span>
                </div>
                <div className="flex items-center space-x-2 w-full mt-2">
                    <span className="text-2xl">{task.title}</span>
                </div>
            </div>

            {/* Body */}
            <div className="text-gray-800 text-sm">
                <table className="w-full mt-4">
                    <tbody>
                        <tr>
                            <td className="text-left p-1 w-1/4">Due Date</td>
                            <td className="text-left p-1 w-3/4">{new Date(task.due_date).toDateString()}</td>
                        </tr>
                        <tr>
                            <td className="text-left p-1 w-1/4">Description</td>
                            <td className="text-left p-1 w-3/4">{task.description}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
