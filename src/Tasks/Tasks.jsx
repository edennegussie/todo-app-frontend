import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import axios from "axios";
import TaskItem from "./TaskItem";

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


    return <div class='text-center'>
        <h2>ToDo lists</h2>
        <p>This is the list of tasks!</p>
        <div className="mr-2 text-right" >Search...
            <button > + Add a task</button>
        </div>
        <div className="flex flex-wrap justify-evenly gap-4 p-4 m-8">
            {
                data?.map((d) => {
                    return <TaskItem key={d.id} task={d} />
                })
            }

        </div>
    </div>
}
