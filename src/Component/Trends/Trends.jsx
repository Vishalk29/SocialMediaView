import React from 'react'
import './Trends.css'
import { TrendData } from '../Data/TrendData'
const Trends = () => {
    return (
        <div className="Trends">
            <h3> Trends for you</h3>
            {
                TrendData.map((trends, id) => {
                    return (
                        <div className="trend">
                            <span># {trends.name}</span>
                            <span># {trends.shares}k shares</span>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Trends