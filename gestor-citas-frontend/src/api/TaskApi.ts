import api	from "../lib/axios";
import { TaskFormData } from "../types";

export async function createTask(formData: TaskFormData) {
    try {
        const { data } = await api.post('/tasks', formData)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}