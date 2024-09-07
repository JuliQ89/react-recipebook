import React from 'react';
import { RiTimeLine, RiGroupLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const Card = ({ rezept, API_URL }) => {
    return (
        <div className="card shadow mb-3">
            <Link to={`/rezept/${rezept.id}`}>
                <img src={`${API_URL}${ rezept.img }`} className="card-img-top" alt="RecipeBook" />
            </Link>
            <div className="card-body">
                <Link to={`/rezept/${rezept.id}`} className='text-decoration-none d-inline-block'><h5 className="card-title fw-semibold text-dark">{ rezept.name }</h5></Link>
                <p className="card-text">
                    { rezept.description.length > 100 ? `${ rezept.description.slice(0, 85)}...` : rezept.description }
                </p>
                <div className="hstack gap-3 justify-content-between w-100">
                    <div className='d-flex gap-3 align-items-center'>
                        <p className="card-text d-flex align-items-center gap-1 m-0"><RiTimeLine size={17} color='#6a6a6a' /> <small className="text-body-dark fw-medium">{ `${rezept.duration} Min.` }</small></p>
                        <div className="vr" style={{height: "25px"}}></div>
                        <p className="card-text d-flex align-items-center gap-1 m-0"><RiGroupLine size={17} color='#6a6a6a' /> <small className="text-body-dark fw-medium">{ rezept.persons }</small></p>
                    </div>
                    <Link to={`/rezepte?q=${rezept.kategory.name}`}><span className="badge rounded-pill text-bg-primary fw-medium" style={{padding: "0.4rem 0.7rem", fontSize: "0.85rem"}}>{ rezept.kategory.name }</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Card