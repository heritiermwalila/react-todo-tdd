import React from 'react';
import TodoHeader from 'src/Components/TodoHeader/TodoHeader';
import TodoInput from 'src/Components/TodoInput/TodoInput';
import TodoList from 'src/Components/TodoList/TodoList';

export type TodoType = {
    id: string;
    task: string;
    completed: boolean;
}
export default function TodoPage(){

    const [todos, setTodos] = React.useState<TodoType[]>([])

    const onClompleteTask = (id: string, completed: boolean) => {
        const todosCp = todos.slice()
        const index = todosCp.findIndex(t => t.id === id)
        todosCp[index].completed = completed
        setTodos(todosCp)

    }

    return <div>
        <TodoHeader title='Todo'/>
        <TodoInput setTodos={setTodos} todos={todos} />
        <TodoList {...{todos, onClompleteTask}} />
    </div>
}