
import type { Todo_type } from './utilities/types';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { TodoPost } from './utilities/todoAPI';

//import type { FormEvent } from "react";

export default function Todo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState<string | null>(null);

    //const [completed, setCompleted] = useState(false);
   // const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();

    


     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


    if (!title.trim() || title.length < 3){
        setError("Title is required field")
        return;
    }


    try {
        const newTodo = await TodoPost({
            id,
            title,
            description
        });
        setTitle(newTodo.title);
        setDescription(newTodo.description);
    } catch (error) {
        console.log(error);
        setError("Failed to add todo");
        return;
    }   


    navigate("/viewtodo");



     }

        return (
        <>
            <div>
                <h1>Add Todo</h1>
            </div>

            {error && <div style={{ color: 'red' }}>{error}</div>} 



            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <input type="text" 
                               placeholder="Enter title" 
                               value={title}
                               onChange={(e) => setTitle(e.target.value)}     
                        />
                    </div>

                    <div>
                        <input type="text" 
                               placeholder="Enter details" 
                               value={description}
                               onChange={(e) => setDescription(e.target.value)}     
                        />
                    </div>
{/*
                    <div>
                        <label htmlFor="completed">Completed:</label>
                        <input type="checkbox" id="completed" 
                                name="completed" 
                                value="completed" 
                                checked={completed}
                                onChange={() => setCompleted(!completed)}
                        />
                        
                    </div>
*/}
              {/* not required for now   
                  <div>
                        <input type="file"
                               placeholder="Enter title" 
                               value={}
                               onChange={}     
                        />
                    </div>
                */}

                        <button type="submit">Add Todo</button>
                    
                </form>
            </div>



        </>
    )
}