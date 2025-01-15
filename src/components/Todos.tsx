
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_TODOS } from '../utils/graphqlQueries';

const Todos: React.FC = () => {
    const { loading, error, data } = useQuery(GET_USER_TODOS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="todos-section">
            <h2>User Todos</h2>
            <ul>
                {data.todos.map((todo: { id: React.Key | null | undefined; completed: boolean | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                    <li key={todo.id}>
                        <input 
                            type="checkbox" 
                            checked={todo.completed} 
                        />
                        <span>{todo.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;