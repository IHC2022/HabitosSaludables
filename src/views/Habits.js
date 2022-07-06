import React from 'react'
import HabitsTemplate  from '../components/Habits'


function Habits({calendarDate, habitos,funHabitos}) {
    
    return (

        <div>
            
            <HabitsTemplate calendarDate={calendarDate} habits={habitos} setHabits={funHabitos} />
                      
        </div>
    )
}

export default Habits