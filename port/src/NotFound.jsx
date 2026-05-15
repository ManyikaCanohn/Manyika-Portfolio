import React from 'react'

const NotFound = () => {
    return (
        <section className=" bg-dark">
            <div className="justify-content-center align-items-center vh-100 d-flex flex-column">
                <div className="text-center shadow py-5 bg-white rounded">
                    <h1 className="fw-bold text-success display-1"> Site not found </h1>
                    <p className="text-muted px-4">Looks like you followed a broken link or entered a URL that does not exists on Manyika's portfolio website.</p>
                    <hr className='mt-5' />
                    <a href="/" className="btn btn-success">Go Back Home</a>
                    
                    <p className='text-center text-muted mt-5'> ERROR_UNKNOWN. </p>
                </div>
            </div>
        </section>
    )
}

export default NotFound