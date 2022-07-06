import React from 'react'
import CalendarTemplate  from '../components/Calendar'


function Calendar() {
    let [calendarDate, setCalendarDate] = React.useState(new Date());
    return (

        <div>
            
            <CalendarTemplate calendarDate={calendarDate} setCalendarDate={setCalendarDate}/>
                      
        </div>
    )
}

export default Calendar