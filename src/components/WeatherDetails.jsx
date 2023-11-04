import React from 'react'
import {PiArrowDown} from 'react-icons/pi'
import './weatherDetails.css'

const WeatherDetails = () => {

    return(
    <div className='section section-descriptions'>
        <div className='card'>
            <div>
                <div className='description-card'>
                    <PiArrowDown/>
                    <small>min</small>
                </div>
                <h2>30 °C</h2>
            </div>
        </div>
        <div className='card'>
            <div>
                <div className='description-card'>
                    <PiArrowDown/>
                    <small>min</small>
                </div>
                <h2>30 °C</h2>
            </div>
        </div>
        <div className='card'>
            <div>
                <div className='description-card'>
                    <PiArrowDown/>
                    <small>min</small>
                </div>
                <h2>30 °C</h2>
            </div>
        </div>
        <div className='card'>
            <div>
                <div className='description-card'>
                    <PiArrowDown/>
                    <small>min</small>
                </div>
                <h2>30 °C</h2>
            </div>
        </div>
    </div>
    )
}

export default WeatherDetails
