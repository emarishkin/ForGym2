import { useEffect, useState, type FC } from "react";
import type { WorkoutEntry } from "../../types/workout";
import { WorkoutForm } from "./WorkoutForm";
import { WorkList } from "./WorkList";

interface WorkGymAllProps {
    showFormOnly?: boolean;
}

export const WorkGymAll:FC<WorkGymAllProps> = ({ showFormOnly = false }) => {
    const [entries, setEntries] = useState<WorkoutEntry[]>([]);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('workouts');
        if(saved) setEntries(JSON.parse(saved));
    }, []);

    const addEntry = (entry: WorkoutEntry) => {
        const updated = [...entries, entry];
        setEntries(updated);
        localStorage.setItem('workouts', JSON.stringify(updated));
        setShowSuccess(true);
        
        alert(`Тренировка сохранена!\n${entry.user} - ${entry.exercise} - ${entry.date}`);
        
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <section className="sectionGym">
            <div className="container">
                <WorkoutForm onAdd={addEntry} />
                {showSuccess && <div className="success-message">Данные сохранены!</div>}
                {!showFormOnly && <WorkList entries={entries} />}
            </div>
        </section>
    );
};