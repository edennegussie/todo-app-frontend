import TaskItem from "./TaskItem";

export default function Tasks() {
    return <div class='text-center'>
        <h2>ToDo lists</h2>
        <p>This is the list of tasks!</p>
        <div>
            <button class="bg-red text-red-900 "> + Add a task</button>
        </div>
        <ul className="">
            <TaskItem></TaskItem>
        </ul>
    </div>
}
