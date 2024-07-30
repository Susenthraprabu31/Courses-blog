import React from 'react'
import Card from './Card'

function fullStackDevelopment({data}) {
    return (
        <>
         {/* code create card for all data in a array passed through props data */}
            {
                data.map((item, index) => (
                    item.category === 'fullStackDevelopment' ?
                        <Card data={item} key={index} /> : null
                ))
            }
        </>
    )
}

export default fullStackDevelopment