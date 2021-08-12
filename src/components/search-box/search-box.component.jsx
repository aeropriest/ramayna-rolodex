import React from 'react'
import './search-box.style.css'

export const SearchBox = ({placeHolder, handleChange}) => (
    <input 
        className='Search'
        type='search'
        placeholder={placeHolder}
        onChange={handleChange}
    />
)