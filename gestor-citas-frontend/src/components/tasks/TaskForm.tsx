import { UseFormRegister, FieldErrors} from 'react-hook-form'
import ErrorMessage from "../ErrorMessage"
import { TaskFormData } from '../../types'
import { DatePickerComponent } from '../DatePickerComponent'

type TaskFormProps = {
    register: UseFormRegister<TaskFormData>
    errors: FieldErrors<TaskFormData>
}

export default function TaskFormProps({errors, register} : TaskFormProps) {
    return (
        <>
            <div className="mb-5 space-y-3">
                <label htmlFor="title" className="text-sm uppercase font-bold">
                    Nombre de la tarea
                </label>
                <input
                    id="title"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Nombre de la tarea"
                    {...register("title", {
                        required: "El Titulo de la tarea es obligatorio",
                    })}
                />

                {errors.title && (
                    <ErrorMessage>{errors.title.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="description" className="text-sm uppercase font-bold">
                    Descripción
                </label>
                <textarea
                    id="description"
                    className="w-full p-3  border border-gray-200"
                    placeholder="Descripción del Proyecto"
                    {...register("description", {
                        required: "Una descripción del proyecto es obligatoria"
                    })}
                />

                {errors.description && (
                    <ErrorMessage>{errors.description.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="due_date" className="text-sm uppercase font-bold">
                    Fecha de Vencimiento
                </label> 

                <input
                    id="due_date"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Fecha de Vencimiento"
                    {...register("due_date", {
                        required: "Fecha de Vnecimiento es obligatoria",
                    })}
                />

                {errors.due_date && (
                    <ErrorMessage>{errors.due_date.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="status" className="text-sm uppercase font-bold">
                    Estado
                </label>
                <input
                    id="status"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Estado"
                    {...register("status", {
                        required: "Estado Obligratorio",
                    })}
                />

                {errors.status && (
                    <ErrorMessage>{errors.status.message}</ErrorMessage>
                )}
            </div>
        </>
    )
}