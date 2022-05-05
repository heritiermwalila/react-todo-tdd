import React from 'react';
import { Link } from 'react-router-dom';

export type TodoFooterProps = {
    numOfIncompleteTask: number
}
export default function TodoFooter({numOfIncompleteTask}: TodoFooterProps){
    return <div>
        <p className="task-left" data-testid='imcomplete'>
            {numOfIncompleteTask} {numOfIncompleteTask >= 2 ? 'Tasks' : 'Task'} left
        </p>
        <Link to='/followers'>Followers</Link>
    </div>
}