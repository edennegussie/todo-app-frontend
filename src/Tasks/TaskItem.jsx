export default function TaskItem() {


    return (

        <div className="bg-white shadow-md rounded-2xl p-4 w-full max-w-md border border-gray-200 min-h-64">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2 ">
                    <h2 className=" ">This is the titlppe!</h2>
                </div>
                <div className="flex space-x-3 text-gray-800">
                    <select
                        className="text-sm font-medium text-gray-700 capitalize bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value='todo'
                    >
                        <option value="todo">TODO</option>
                        <option value="inprogress">IN_PROGRESS</option>
                        <option value="completed">COMPLETED</option>
                    </select>
                    <span className="cursor-pointer hover:text-blue-500">Edit</span>
                    <span className="cursor-pointer hover:text-red-500">Delete</span>
                </div>
            </div>

            {/* Body */}
            <div className="text-gray-800 text-sm">
                <table className="w-full mt-4">
                    <tbody>
                        <tr>
                            <td className="text-left p-1 w-1/4">Description</td>
                            <td className="text-left p-1 w-3/4">This is the task description
                                This is the task description This is the task description
                            </td>
                        </tr>
                        <tr>
                            <td className="text-left p-1 w-1/4">Due Date</td>
                            <td className="text-left p-1 w-3/4">00/00/0000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
