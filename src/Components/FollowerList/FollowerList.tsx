import React from 'react'
import Follower, { FollowerProps } from '../Follower/Follower'

export type FollowerListProps = {
    followers: FollowerProps[]
}
export default function FollowerList({followers}: FollowerListProps) {


  return (
    <div>
        <h2>Followers</h2>
        <div>
            {
                followers?.map(follower => <Follower {...{...follower}} key={follower?.name?.first}/>)
            }
        </div>
    </div>
  )
}
