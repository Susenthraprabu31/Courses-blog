import React from 'react'

function homePage() {
    return (
        <>
         {/* home page code which contains welcome content */}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 text-center">
                        <h1 className="fw-light">Welcome to course blog</h1>
                        <p className="lead">Check out all course details here</p>
                        <img className='home-image' src="https://explore-work.com/wp-content/uploads/2018/03/feature_ready-set-go.jpg" alt="home image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default homePage