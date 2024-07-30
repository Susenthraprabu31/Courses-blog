import React from 'react'
import Card from './Card'

function career({ data }) {
    return (
        <>
         {/* code create card for all data in a array passed through props data */}
            {
                data.map((item, index) => (
                    item.category === 'career' ?
                        <Card data={item} key={index} /> : null
                ))
            }
        </>
    )
}

export default career