import React from 'react'
import style from './Button.module.scss'
import Icon from '../Icon/Icon'

const Button = props => {
	const styles = props.class.map(i => style[i]);
	return(
		<button 
			className={`${style.btn} ${styles.join(' ')}`}
			onClick={props.onChangeClick}
		>
			{props.text}
			{ props.icon
				? Icon(props.icon)
				: null
			}
		</button>
	)
}

export default Button