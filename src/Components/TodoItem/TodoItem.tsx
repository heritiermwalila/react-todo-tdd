import React from 'react'
import { TodoType } from 'src/pages/TodoPage/TodoPage';

export type TodoItemProps  = {
    todo: TodoType
    onClompleteTask?: (id: string, completed: boolean) => void
}
export default function TodoItem({todo, onClompleteTask}: TodoItemProps) {
  const completeTask = () => {

    if(todo?.completed){
      onClompleteTask?.(todo?.id, false)
    }else {
      onClompleteTask?.(todo?.id, true)
    }
  }
  return (
    <div data-testid="task-container" onClick={completeTask}>
        {Boolean(todo?.completed) ? <del role='deletion'>{todo?.task}</del>: <span>{todo?.task}</span>}
    </div>
  )
}
