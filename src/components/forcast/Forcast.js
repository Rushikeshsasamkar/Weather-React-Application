import React from 'react'
import './Forcast.css'
import { Accordion, AccordionItemHeading, AccordionItem, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion';


const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'];



const Forcast = ({ data }) => {

    const dayInAWeek = new Date().getDay();
    const forCastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    // console.log(forCastDays);

    return (
        <>
            <label className='title'>
                Daily
            </label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 5).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className='icon-small' />
                                    <label className='day'>{forCastDays[idx]}</label>
                                    <label className='description'>{item.weather[0].description}</label>
                                    <label className='min-max'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className='daily-details-grid-item'>
                                    <label>Pressure: </label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Humidity: </label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Clouds: </label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Wind Speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Sea level:</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Feels like:</label>
                                    <label>{Math.round(item.main.feels_like)} °C  </label>
                                </div>

                                <div className='daily-details-grid-item'>
                                    <label>Date:</label>
                                    <label>
                                        {new Date(item.dt * 1000).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit'
                                        })}
                                    </label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </>
    );
}

export default Forcast