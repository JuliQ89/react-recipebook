import React from 'react';
import { Link } from "react-router-dom";

const Header = ({ searchBar, searchRecipe, setSearchRecipe }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
            <div className="container-fluid">
                <Link className="navbar-brand ft-6" style={{color: "#36a628"}} to="/">RecipeBook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse gap-4" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kategorien</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/">Kategorien</Link></li>
                                <li><Link className="dropdown-item" to="/kategory/erstellen">Kategorie erstellen</Link></li>
                                <li><Link className="dropdown-item" to="/">Meine Kategorien</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Rezepte</a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/rezepte">Rezepte</Link></li>
                                <li><Link className="dropdown-item" to="/rezept/erstellen">Rezept erstellen</Link></li>
                                <li><Link className="dropdown-item" to="/">Meine Rezepte</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                            </ul>
                        </li>
                    </ul>
                    {searchBar && (
                        <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                            <input className="form-control me-2" type="search" placeholder="Suchen ..." value={searchRecipe} onChange={(e) => setSearchRecipe(e.target.value)} aria-label="Search" />
                            <button className="btn btn-primary" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </button>
                        </form>
                    )}
                    <div className='d-flex align-items-center gap-2'>
                        <Link to="/" className='btn btn-primary'>Logout</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header