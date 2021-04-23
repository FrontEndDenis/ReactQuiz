import React from 'react'
import style from './BodyLeftSideBar.module.scss'
import Button from '../../../UI/Button/Button'

const BodyLeftSideBar = props => {
	return (
		<div>
			<span className={style.BodyLeftSideBar__number}>{props.number}</span>
			<h1 className={style.BodyLeftSideBar__question}>{props.question}</h1>
			{ !props.startQuiz
				? 	<>
						<p className={style.BodyLeftSideBar__text}>{props.text}</p>
						<Button
							class={['btn--accent', 'btn--br10', 'btn--svg', 'btn--h50']}
							text={'Первый вопрос'}
							onChangeClick={props.onStartQuiz}
							icon={'arrow'}
						/>
					</>
				: null
			}
		</div>
	)
}

export default BodyLeftSideBar