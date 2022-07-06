import React from 'react'
import CalendarTemplate  from '../components/Calendar'


function Calendar({calendarDate,setCalendarDate}) {
    
    return (

        <div>
            
            <CalendarTemplate calendarDate={calendarDate} setCalendarDate={setCalendarDate}/>
                      
        </div>
    )
}

export default Calendar