import React from 'react'
import style from './Icon.module.scss'
import spriteSVG from './sprite.svg'

function Icons(name) {
	return(
		<svg className={`icon ${style[`icon-${name}`]}`}>
			<use xlinkHref={`${spriteSVG}#${name}`} />
		</svg>
	)
}

export default Icons