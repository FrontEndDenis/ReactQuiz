import React from 'react'
import style from './LeftSideBar.module.scss'
import BodyLeftSideBar from './BodyLeftSideBar/BodyLeftSideBar'
import FooterLeftSideBar from './FooterLeftSideBar/FooterLeftSideBar'
import DeclOfNum from '../../Global/DeclOfNum/DeclOfNum'

const LeftSideBar = props => {
	let activeQuestion = props?.activeQuestion,
		lengthQuiz = props.quiz.length,
		number = activeQuestion?.id || 'Опрос',
		question = activeQuestion?.question || `Найдите квартиру мечты за ${lengthQuiz} ${DeclOfNum(lengthQuiz, ['вопрос', 'вопроса', 'вопросов'])}`,
		text = activeQuestion?.miss || 'Вышлем подборку квартир, подходящую под ваши параметры'
	
	if (typeof number === 'number') {
		if (number <= 9) number = `0${number}`
	}

	return(
		<div className={style.leftSideBar}>
			<span className={style.leftSideBar__text}>Подберем новостройку под вас</span>
			<BodyLeftSideBar
				startQuiz={props.startQuiz}
				number={number}
				question={question}
				text={text}
				onStartQuiz={props.onStartQuiz}
			/>
			<FooterLeftSideBar
				activeQuestion={activeQuestion}
				startQuiz={props.startQuiz}
				lengthQuiz={lengthQuiz}
				onCurrentQuestion={props.onCurrentQuestion}
			/>
		</div>
	)
}

export default LeftSideBar