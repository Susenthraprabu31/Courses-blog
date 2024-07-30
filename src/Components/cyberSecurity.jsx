import React from 'react'
import Card from './Card'

function cyberSecurity({data}) {
    return (
        <>
         {/* code create card for all data in a array passed through props data */}
            {
                data.map((item, index) => (
                    item.category === 'cyberSecurity' ?
                        <Card data={item} key={index} /> : null
                ))
            }
        </>
    )
}

export default cyberSecurity