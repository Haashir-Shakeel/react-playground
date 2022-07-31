// this is  approach by using useTransition Hook(seperating urgent updates from non urgent updates)
import NAMES from './Data.json'
import { useState, useTransition } from 'react'

export const QueryName = () => {
    const [query, setQuery] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [isPending, startTransition] = useTransition()

    const filteredNames = NAMES.filter(item => {
        return item.first_name.includes(query) || item.last_name.includes(query)
    })

    const changeHandler = (event) => {
        setInputValue(event.target.value)
        startTransition(() => setQuery(event.target.value)) //giving operation which requires time

    }
    return (

        <div>
            <input type='text' value={inputValue} onChange={changeHandler} />
            {isPending && <p>Updating List...</p>}
            {
                filteredNames.map((item) => (
                    <p key={item.id}>{item.first_name} {item.last_name}</p>
                ))
            }
        </div>
    )

}