import { z } from 'zod'

/** Tasks */
export const taskSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    due_date: z.string(),
    status: z.string()
})
export type Task = z.infer<typeof taskSchema>
export type TaskFormData = Pick<Task, 'title' | 'description' | 'due_date' | 'status'>