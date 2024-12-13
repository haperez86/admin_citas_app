import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getTaskById } from "../../api/TaskApi"
import { error } from "console"

export default function EditTaskView() {
    const params = useParams()
    const tasksId = parseInt(params.tasksId!)
    
    const { data, error, isLoading } = useQuery({
        queryKey:['editTask', tasksId ],
        queryFn: () => getTaskById(tasksId),
        retry: false
    })

    console.log(error)

  return (
    <div>EditTaskView</div>
  )
}
