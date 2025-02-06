import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import axios from "axios";
import TaskItem from "./TaskItem";
import { FaAdd, FaEdit, FaPlus, FaSearch, FaTrashAlt } from 'react-icons/fa';


const fetchData = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/tasks`);
    return response.data;
};

export default function Tasks() {

    const { data, isLoading, error } = useQuery({
        queryKey: ["todos"],
        queryFn: fetchData,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    return (
        <div>
            <div className="flex justify-between items-center w-full px-4  mb-7">
                <div className="flex items-center space-x-3 ml-20 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none px-4 py-2">
                    <FaPlus className="cursor-pointer text-gray-800 text-2xl" />
                    <span className="ml-1">Create A New Task</span>
                </div>
                <div className="flex items-center space-x-3 mr-20">
                    <FaSearch className="cursor-pointer text-gray-800 text-2xl" />
                    <span className="ml-1">Search</span>
                </div>
            </div>
            <hr />
            <h2 className="ml-20 mt-7 text-3xl">My Tasks</h2>
            <div className="flex flex-wrap justify-evenly gap-4 p-4 m-8 mt-2 pt-2">
                {
                    data?.map((d) => {
                        return <TaskItem key={d.id} task={d} />
                    })
                }
            </div>
        </div>)
}
