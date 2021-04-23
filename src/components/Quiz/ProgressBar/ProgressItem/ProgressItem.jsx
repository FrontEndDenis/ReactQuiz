import React from 'react'
import style from './ProgressItem.module.scss'
import DeclOfNum from '../../../Global/DeclOfNum/DeclOfNum'

const ProgressItem = props => {
	let styles = [
			style.ProgressItem,
			props.stateQuestion.map(item => style[item]).join(' ')
		],
		text = Number(props.item) + 1,
		disabled = true

	if (!props.startQuiz) {
		text = `Всего лишь ${props.lengthQuiz} ${DeclOfNum(props.lengthQuiz, ['вопрос', 'вопроса', 'вопросов'])}`
		styles.push(style['startQuiz'])
	}

	if (typeof text === 'number') {
		if (text <=9) text = `0${text}`
		disabled = false
	}

	return (
		<button 
			className={styles.join(' ')}
			onClick={() => props.onCurrentQuestion(props.item)}
			disabled={disabled}
		>
			<span>{text}</span>
		</button>
	)
}
export default ProgressItem