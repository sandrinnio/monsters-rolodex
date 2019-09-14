/* eslint no-unused-vars: 0 */

import React from 'react'
import './SearchBox.css'

export const SearchBox = ({ placeholder, handleChange }) => (
  <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
)
