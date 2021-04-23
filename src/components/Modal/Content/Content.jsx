import React, { Component } from 'react'
import style from './Content.module.scss'
import LeftSideBar from '../../Quiz/LeftSideBar/LeftSideBar'

class Content extends Component {
	render() {
		return(
			<div className={style.modalContent}>
				<LeftSideBar
					startQuiz={this.props.startQuiz}
					onStartQuiz={this.props.onStartQuiz}
					onCurrentQuestion={this.props.onCurrentQuestion}
					quiz={this.props.quiz}
					activeQuestion={this.props.activeQuestion}
					checkedQuestion={this.props.checkedQuestion}
				/>
			</div>
		)
	}
}

export default Content