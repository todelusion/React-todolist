import { useState } from 'react'

export const useInputChange = (e) => {
    const [inputValue, setInputValue] = useState({})
    const handleChange = () => {
        const {name, value} = e.target
        setInputValue(prevState => {
        return{    
            ...prevState, name:value
        }
        })
    }
    return { inputValue }
}