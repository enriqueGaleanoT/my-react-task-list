import Task from "./Task";
export default function TaskList ({task}){
    return (
    <div>
        <ol>
            <li>{task.map(task => <Task taskName={task.task}></Task>)}</li>
            <li>{task.map(task => <Task taskName={task.task}></Task>)}</li>
            <li>{task.map(task => <Task taskName={task.task}></Task>)}</li>
        </ol>
    </div>
    )
}