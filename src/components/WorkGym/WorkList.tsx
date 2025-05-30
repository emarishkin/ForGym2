import { useEffect, useState, type FC } from "react";
import type { WorkoutEntry } from "../../types/workout";
import '../WorkGym/WorkList.css'

interface WorkListProps {
    entries?: WorkoutEntry[];
}

export const WorkList:FC<WorkListProps> = ({ entries: propEntries }) => {
    const [entries, setEntries] = useState<WorkoutEntry[]>([]);

    useEffect(() => {
        if(propEntries) {
            setEntries(propEntries);
        } else {
            const saved = localStorage.getItem('workouts');
            if(saved) setEntries(JSON.parse(saved));
        }
    }, [propEntries]);

    return (
        <section className="results-section">
            <div className="container">
                <h2>История тренировок</h2>
                <div className="workout-list">
                    {entries.map((entry) => (
                        <div key={entry.id} className="workout-entry">
                            <strong>{entry.user}</strong> — {new Date(entry.date).toLocaleDateString()} — {entry.exercise}: {entry.weight} кг × {entry.reps}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};