import React from 'react'
import HabitsTemplate  from '../components/Habits'


function Habits() {
    let [calendarDate, setCalendarDate] = React.useState(new Date());
    return (

        <div>
            
            <HabitsTemplate calendarDate={calendarDate}/>
                      
        </div>
    )
}

export default Habits