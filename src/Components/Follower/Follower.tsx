import React from 'react'

export type FollowerProps = {
    gender: "male" | "female"
    name: {
        title: string
        first: string
        last: string
    }
    picture: {
        medium: string
    }
}
export default function Follower({gender, name, picture}: FollowerProps) {
  return (
    <div data-testid='follower-item'>
        <div>
            <img src={picture?.medium} alt="Avatar" />
        </div>
        <strong>{gender}</strong>
        <h4>{[name?.first, name?.last].join('-')}</h4>
        <i>{name?.title}</i>
    </div>
  )
}
