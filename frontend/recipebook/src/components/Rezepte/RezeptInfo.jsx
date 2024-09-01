import React from 'react';
import { RiTimeLine, RiGroupLine, RiFireLine } from "@remixicon/react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const RezeptInfo = ({ rezept, API_URL }) => {
  return (
    <section className="mt-5 w-100 d-flex justify-content-center">

        <div className='d-flex flex-column gap-2'>
            <div className="card mb-3 shadow" style={{maxWidth: "1150px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <div className='w-100'>
                            <img src={ `${API_URL}${rezept.img}` } className="img-fluid rounded-start w-100" alt={ rezept.name } />
                        </div>
                    </div>
                    <div className="col-md-8" style={{padding: "2rem", maxWidth: "650px"}}>
                        <div className="d-flex flex-column gap-1 justify-content-between h-100 w-100">
                            <div className="card-body p-0">
                                <h2 className="card-title fw-bold" style={{color: "#333"}}>{ rezept.name }</h2>
                                <p className="card-text mb-1">{ rezept.description }</p>
                                <p className="card-text"><small className="text-body-secondary">erstellt am { format( rezept.erstellt, "dd.MM.yyyy") }</small></p>
                            </div>
                            <div className="hstack gap-3 justify-content-between w-100">
                                <div className='d-flex gap-3 align-items-center'>
                                    <p className="card-text d-flex align-items-center gap-1 m-0"><RiTimeLine size={17} color='#6a6a6a' /> <small className="text-body-dark fw-medium">{ `${rezept.duration} Min.` }</small></p>
                                    <div className="vr" style={{height: "25px"}}></div>
                                    <p className="card-text d-flex align-items-center gap-1 m-0"><RiGroupLine size={17} color='#6a6a6a' /> <small className="text-body-dark fw-medium">{ rezept.persons } Personen</small></p>
                                    <div className="vr" style={{height: "25px"}}></div>
                                    <p className="card-text d-flex align-items-center gap-1 m-0"><RiFireLine size={17} color='#6a6a6a' /> <small className="text-body-dark fw-medium">{ rezept.calories } kcal</small></p>
                                </div>
                                <div className="hstack gap-3">
                                    <Link to={`/rezepte?q=${rezept.kategory.name}`}><span className="badge rounded-pill text-bg-primary fw-medium" style={{padding: "0.4rem 0.7rem", fontSize: "0.85rem"}}>{ rezept.kategory.name }</span></Link>
                                    <span className='badge rounded-pill text-bg-secondary fw-medium' style={{padding: "0.4rem 0.7rem", fontSize: "0.85rem"}}>{ rezept.is_public ? "Public" : "Private" }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <hr/>

            <div className="container">
                <div className="row">
                    {rezept.recipesection_set.length > 0 ? 
                        rezept.recipesection_set.map(recipe_section => (
                            <div className="col" key={recipe_section.id}>
                                <h1>{ recipe_section.heading }</h1>
                                
                                <ul className="list-group">
                                    {recipe_section.recipesectionentry_set.length > 0 ? 
                                        recipe_section.recipesectionentry_set.map(section_entry => (
                                        <li className="list-group-item d-flex justify-content-between align-items-center" key={section_entry.id}>
                                            <span className="fw-semibold">{ section_entry.key }</span>
                                            <p>{ section_entry.value }</p>
                                        </li>
                                        ))
                                    : <p>Es gibt noch keine Einträge in dieser Section</p> }
                                </ul>
                            </div>
                        ))
                    : <p>Es gibt noch keine Einträge in diesem Rezept</p>}
                </div>
            </div>
        </div>

    </section>
  )
}

export default RezeptInfo