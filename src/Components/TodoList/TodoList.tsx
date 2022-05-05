import React from 'react'
import { TodoType } from 'src/pages/TodoPage/TodoPage'
import TodoFooter from '../TodoFooter/TodoFooter'
import TodoItem from '../TodoItem/TodoItem'

export type TodoListProps =  {
    todos: TodoType[];
    onClompleteTask: (id: string, completed: boolean) => void;
}
export default function TodoList({todos, onClompleteTask}: TodoListProps) {
  return (
    <div>
        <ul>
            {todos?.map(todo => <TodoItem {...{ todo, onClompleteTask }} key={todo?.id}/>)}
        </ul>
         <TodoFooter {...{numOfIncompleteTask: todos?.filter(t => !t.completed)?.length}}/>
    </div>
   
  )
}
