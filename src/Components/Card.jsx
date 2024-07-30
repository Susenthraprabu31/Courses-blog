import React from 'react'

function card({data}) {
    return (
        <>
        {/* code to create cards */}
            <div className="card" style={{width: '18rem'}}>
                <img src={data.image} className="card-img-top" alt="course image"/>
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.description}</p>
                    </div>
            </div>
        </>
    )
}

export default card