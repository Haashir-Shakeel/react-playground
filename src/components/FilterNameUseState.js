// this is not faster approach as it takes time to recalculate
import NAMES from './Data.json'
import { useState, useTransition } from 'react'

export const FilterName = () => {
    const [query, setQuery] = useState('')

    const filteredNames = NAMES.filter(item => {
        return item.first_name.includes(query) || item.last_name.includes(query)
    })
    return (

        <div>
            <input type='text' value={query} onChange={(event) => setQuery(event.target.value)} />
            {
                filteredNames.map((item) => (
                    <p key={item.id}>{item.first_name} {item.last_name}</p>
                ))
            }
        </div>
    )

}