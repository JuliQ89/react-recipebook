import React from 'react';

const Loader = () => {    
    return (
        <div className="d-flex gap-2 align-items-center">
            <span className="spinner-grow spinner-grow-sm text-secondary" role="status" aria-hidden="true"></span>
            <span className="sr-only text-secondary">Loading...</span>
        </div>
    )
}

export default Loader