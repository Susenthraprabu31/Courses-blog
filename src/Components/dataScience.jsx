import React from 'react'
import Card from './Card'

function dataScience({data}) {
    return (
        <>
         {/* code create card for all data in a array passed through props data */}
            {
                data.map((item, index) => (
                    item.category === 'datascience' ?
                        <Card data={item} key={index} /> : null
                ))
            }
        </>
    )
}

export default dataScience