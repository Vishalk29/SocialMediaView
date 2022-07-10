import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import FollowCard from '../Followers/FollowCard'
// import './Profileleft.css'
import { InfoCard } from '../InfoCard/InfoCard'
const Profileleft = () => {
    return (
        <div className="Profileleft">
            <LogoSearch />
            <InfoCard />
            <FollowCard />

        </div>
    )
}
export default Profileleft
