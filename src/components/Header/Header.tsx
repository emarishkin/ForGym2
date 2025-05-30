import type { FC } from "react";
import { Link } from "react-router-dom";
import '../Header/Header.css'

interface HeaderProps {
    
}

export const Header:FC<HeaderProps> = () => {
    return (
        <header className="header">
            <nav>
                <Link to="/" className="nav-button">Добавить тренировку</Link>
                <Link to="/results" className="nav-button">Результаты</Link>
            </nav>
        </header>
    )
}