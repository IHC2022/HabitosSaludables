import React from 'react'
import HabitsTemplate  from '../components/Habits'


function Habits({calendarDate}) {
    
    return (

        <div>
            
            <HabitsTemplate calendarDate={calendarDate}/>
                      
        </div>
    )
}

export default Habits