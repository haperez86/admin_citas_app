import api from "../lib/axios";
import { isAxiosError } from "axios";
import { UserRegistrationForm } from "../types";
import { UserLoginForm } from "../types";


export async function createAccount(formData: UserRegistrationForm){
    try{
        const url = '/api/register'
        const { data } = await api.post<string>(url, formData)
        return data
    }catch (error){
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function authenticateUser(formData: UserLoginForm) {
    try {
        const url = '/login';
        const { data } = await api.post<{ token: string }>(url, formData); // Especificamos que la respuesta tiene un campo 'token'
        
        // Verifica que 'data.token' es un string antes de guardar
        if (typeof data.token === 'string') {
            localStorage.setItem('AUTH_TOKEN', data.token);
        } else {
            throw new Error('El token recibido no es válido');
        }
        
        return data; // Retorna el objeto completo si necesitas usarlo en otra parte
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw error; // Lanza otros errores no relacionados con Axios
    }
}