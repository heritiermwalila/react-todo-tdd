import React from 'react';

type TodoHeaderProps = {
    title: string
}
export default function TodoHeader({title}: TodoHeaderProps){

    return <div>
        <h1>{title}</h1>
    </div>

}