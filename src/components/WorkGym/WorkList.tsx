import type { FC } from "react";
import type { WorkoutEntry } from "../../types/workout";

interface WorkListProps{
entries:WorkoutEntry[]
}

export const WorkList:FC<WorkListProps> = ({entries}) => {
    return(
        <section>
            <div className="container">
                <div className="workout-list">
                    {entries.map((entry) => (
                    <div key={entry.id} className="workout-entry">
                    <strong>{entry.user}</strong> — {entry.date} — {entry.exercise}: {entry.weight} кг × {entry.reps}
                    </div>
                    ))}
    </div>
            </div>
        </section>
    )
}