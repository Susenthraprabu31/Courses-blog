import React from 'react'
import Card from './Card'

function allCourses({ data }) {
    return (
        <>
        {/* code create card for all data in a array passed through props data */}
            {
                data.map((item, index) => (
                    <Card data={item} key={index} />
                ))
            }
        </>
    )
}

export default allCourses