import { useState } from "react"
export default function Task({taskName}){

    return(
        <div>
        <h2>
            {taskName}
        </h2>
        </div>
    )
}