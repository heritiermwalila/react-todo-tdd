import React from 'react';
import { TodoType } from 'src/pages/TodoPage/TodoPage';
import {v4} from 'uuid'

export type TodoInputProps = {
    setTodos: (todos: TodoType[]) => void;
    todos: TodoType[];
}
export default function TodoInput({todos, setTodos}: TodoInputProps){
    const [todo, setTodo] = React.useState('')

    const onAddTodo  = () => {

        let updatedTodos: TodoType[] = [
            ...todos,
            {
                id: v4(),
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos)
        setTodo('')

    }
    return <div>
        <input type="text" placeholder='Add todo' value={todo} onChange={e => setTodo(e.target.value)}/>
        <button onClick={onAddTodo}>Add todo</button>
    </div>
}