import { useEffect, useState, type FC } from "react";
import type { WorkoutEntry } from "../../types/workout";
import { WorkoutForm } from "./WorkoutForm";
import { WorkList } from "./WorkList";

interface WorkGymAllProps{

}

export const WorkGymAll:FC<WorkGymAllProps> = () => {

    const [entries, setEntries] = useState<WorkoutEntry[]>([]);

    useEffect(()=>{
    const saved = localStorage.getItem('workouts')
    if(saved) setEntries(JSON.parse(saved))
    },[])

    const addEntry = (entry:WorkoutEntry) => {
        const updated = [...entries,entry]
        setEntries(updated)
        localStorage.setItem('workouts',JSON.stringify(updated))
    }

    return(
        <section className="sectionGym">
            <div className="container">
                <WorkoutForm onAdd={addEntry} />
                <WorkList entries={entries} />
            </div>
        </section>
    )
}