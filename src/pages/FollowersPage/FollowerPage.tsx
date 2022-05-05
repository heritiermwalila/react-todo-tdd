import axios from 'axios'
import React from 'react'
import { FollowerProps } from 'src/Components/Follower/Follower'
import FollowerList from 'src/Components/FollowerList/FollowerList'


export default function FollowerPage() {
    const [followers, setFollowers] = React.useState<FollowerProps[]>([])
 React.useEffect(() => {
    getFollowers()
 }, [])


    const getFollowers = async () => {
        const result = await axios.get('https://randomuser.me/api/?results=5')
        setFollowers(result?.data?.results)
    }
  return (
    <FollowerList followers={followers}/>
  )
}
