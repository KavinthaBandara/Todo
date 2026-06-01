import type { Todo_type } from "./types";



export async function TodoGetter(): Promise<Todo_type[]> {
    const response = await fetch(
        "http://127.0.0.1:8000/core/viewtodo/"
    

    );
    
    if (!response.ok) {
        throw new Error("Failed to get Todos")
    }

    

    const result = await response.json();

    console.log(result);

    return result.data;
};