import React from 'react'
import style from './Overflow.module.scss'

const Overflow = props => (
	<div 
		className={style.overflow}
		onClick={props.closeModal}
	></div>
)

export default Overflow