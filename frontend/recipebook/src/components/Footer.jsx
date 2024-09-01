import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="container-fluid py-5 pb-2" style={{backgroundColor: "#121212"}}>
                <div className='text-center d-flex flex-column gap-2'>
                    <h2 className='text-light h1 fw-bold'>RecipeBook</h2>

                    <div className='d-flex gap-4 w-100 justify-content-center'>
                        <a href="/" className="text-secondary fw-semibold text-decoration-none text-uppercase">Home</a>
                        <a href="/" className="text-secondary fw-semibold text-decoration-none text-uppercase">Kategorie erstellen</a>
                        <a href="/" className="text-secondary fw-semibold text-decoration-none text-uppercase">Meine Kategorien</a>
                        <a href="/" className="text-secondary fw-semibold text-decoration-none text-uppercase">Rezept erstellen</a>
                        <a href="/" className="text-secondary fw-semibold text-decoration-none text-uppercase">Meine Rezepte</a>
                    </div>
                </div>    

                <div className="row mt-5">
                    <div className="col-md-12 text-center">
                        <p className="copyright text-secondary">Copyright &copy; {new Date().getFullYear()} RecipeBook</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer