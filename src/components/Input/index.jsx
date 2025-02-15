import React from 'react'

const Input = ({type, placeholder, inputVal, onChangeHandler, IsRequired, styleClass}) => {
  return (
    <input className={styleClass} type={type} placeholder={placeholder} value={inputVal} onChange={onChangeHandler} required={IsRequired}/>
  )
}

export default Input