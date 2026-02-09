
import type { Todo_type } from './utilities/types';
import { useState } from 'react';

//import type React from "react";

export default function Todo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState<string | null>(null); 
    
     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTodo: Todo_type = {
            title,
            description,
            completed,
        };

        try {
            const response = await fetch('http://localhost:8000/core/addtodo/', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newTodo),
            });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        
        const data = await response.json();
        console.log('Success:', data);
    
    } catch (error) {
        console.error('Error:', error);
        setError(error instanceof Error ? error.message : 'An unknown error occurred');

    }

     }

        return (
        <>
            <div>
                <h1>Add Todo</h1>
            </div>

            {error && <div style={{ color: 'red' }}>{error}</div>} {/* Show error message if any */}



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

                    <div>
                        <label htmlFor="completed">Completed:</label>
                        <input type="checkbox" id="completed" 
                                name="completed" 
                                value="completed" 
                                checked={completed}
                                onChange={() => setCompleted(!completed)}
                        />
                        
                    </div>

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