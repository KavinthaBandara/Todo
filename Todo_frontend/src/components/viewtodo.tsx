import { useEffect, useState } from "react"
import { TodoGetter } from "./utilities/todoAPI"
import type { Todo_type } from "./utilities/types"


    export default function ViewTodo() {
        const [todo, setTodo] = useState<Todo_type[]>([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState("")


        useEffect(() => {
            async function loadTodo() {
                try{
                    const data = await TodoGetter();
                    setTodo(data);
                } catch (error) {
                    setError("can't laod Todos");
                } finally {
                    setLoading(false);
                }

            }

            loadTodo();
            
        }, [])

        if (loading) return <p>Loading...</p>;
        if (error) return <p>{error}</p>;




    return (
        <>
            <div>
                <h1> Views Todo</h1>
            </div>

            <div>
                {todo.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}
                        {todo.description}
                    </li>
                ))}
            </div>
        </>
    )
}