import { isAxiosError } from "axios";
import api from "../lib/axios";
import { dashboardTaskSchema, Task, TaskFormData } from "../types";
import { taskSchema } from '../types';

export async function createTask(formData: TaskFormData) {
    try {
        const { data } = await api.post('/tasks', formData);
        console.log(data);
    } catch (error) {
        console.error('Error al crear la tarea:', error);
    }
}

export async function getTasks() {
    const token = localStorage.getItem('AUTH_TOKEN');
    try {
        const { data } = await api('/tasks', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log('Datos recibidos del servidor:', data);

        // Validación con dashboardTaskSchema para un arreglo de tareas
        const response = dashboardTaskSchema.safeParse(data);
        if (response.success) {
            console.log('Datos validados:', response.data);
            return response.data; // Devuelve los datos validados.
        } else {
            console.error('Error de validación de datos:', response.error);
            throw new Error('Error de validación en la lista de tareas.');
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            console.error('Error al obtener las tareas:', error.response.data.error);
            throw new Error(error.response.data.error);
        } else {
            console.error('Error desconocido:', error);
            throw new Error('Error desconocido al obtener las tareas.');
        }
    }
}


export async function getTaskById(id: number) {
    const token = localStorage.getItem('AUTH_TOKEN');
    try {
        const { data } = await api(`/tasks/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // Validación con taskSchema para un objeto individual
        const response = taskSchema.safeParse(data);
        if (response.success) {
            return response.data; // Devuelve los datos validados.
        } else {
            console.error('Error de validación de datos:', response.error);
            throw new Error('Error de validación en la tarea individual.');
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            console.error('Error al obtener la tarea:', error.response.data.error);
            throw new Error(error.response.data.error);
        } else {
            console.error('Error desconocido:', error);
            throw new Error('Error desconocido al obtener la tarea.');
        }
    }
}

type TaskAPIType = {
    formData: TaskFormData,
    tasksId: Task['id']
}

export async function updateTask({formData, tasksId} : TaskAPIType) {
    const token = localStorage.getItem('AUTH_TOKEN');
    try {
        const { data } = await api.put<string>(`/tasks/${tasksId}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            console.error('Error al obtener la tarea:', error.response.data.error);
            throw new Error(error.response.data.error);
        } else {
            console.error('Error desconocido:', error);
            throw new Error('Error desconocido al obtener la tarea.');
        }
    }
}

