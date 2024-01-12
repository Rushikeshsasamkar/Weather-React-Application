import React from 'react'
import './Forcast.css'
import { Accordion, AccordionItemHeading, AccordionItem, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion';


const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'];



const Forcast = ({ data }) => {

    const dayInAWeek = new Date().getDay();
    const forCastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    console.log(forCastDays);

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
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </>
    );
}

export default Forcast