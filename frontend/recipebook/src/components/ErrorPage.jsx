import React from 'react';
import error_page_face from "../assets/icons/error_page_face.png";
import { RiHome4Fill } from "@remixicon/react";

const ErrorPage = () => {
  return (
    <div className="d-flex w-100 h-100 align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <div className='d-flex flex-column gap-1 align-items-center'>
            <h1 className='h1 text-dark fw-bold'>404 Not Found</h1>
            <div className="d-flex align-items-center gap-2">
                <span className='text-dark h4'>Diese Seite konnte nicht gefunden werden.</span>
                <img src={ error_page_face } width="50px" height="50px" alt="Icon" />
            </div>
            <a href="/" className='btn btn-primary'><RiHome4Fill /> Home</a> 
        </div>
    </div>
  )
}

export default ErrorPage