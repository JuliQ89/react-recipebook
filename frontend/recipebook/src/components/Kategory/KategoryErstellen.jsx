import React from 'react';
import { RiAddFill } from "@remixicon/react";
import Header from '../Header';

const KategoryErstellen = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Header searchBar={false} />

            <section className="mt-5 w-100 d-flex justify-content-center">
                <div className='card w-75'>
                    <div className="card-header">Create Kategory</div>
                    <form className='card-body d-flex flex-column gap-4' onSubmit={(e) => handleSubmit(e)}>
                        {/* KATEGORY name */}
                        <div className="mb-3">
                            <label for="kategory_name" className="form-label">Kategory Name</label>
                            <input type="text" className="form-control" id="kategory_name" placeholder="z.B. Italienisch" />
                        </div>
                        {/* KATEGORY is_public */}
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="kategory_ispublic" />
                            <label className="form-check-label" for="kategory_ispublic">Is Public</label>
                        </div>
                        {/* KATEGORY icon */}
                        <div className="mb-3">
                            <label for="kategory_icon" className="form-label">Kategory Icon</label>
                            <input className="form-control" type="file" id="kategory_icon" />
                        </div>

                        <button type="submit" className='btn btn-primary align-self-start'><RiAddFill size={17} /> Create</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default KategoryErstellen
