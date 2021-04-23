import React, {Component} from 'react'
import style from './Modal.module.scss'
import Content from './Content/Content'
import Overflow from './Overflow/Overflow'
import SideBar from './SideBar/SideBar'
import jsonData from '../../questions.json'

class Modal extends Component {
	constructor(props) {
		super(props)
		this.closeModal = this.props.closeModal
		this.state = {
			startQuiz: false,
			isFinished: false,
			activeQuestion: null,
			checkedQuestion: [],
			quiz: jsonData
		}
	}

	handlerStartQuiz = () => {
		this.setState({
			startQuiz: true,
			activeQuestion: 0
		})
	}

	currentQuestion = value => {
		this.setState({
			activeQuestion: value,
		})
	}

	nextQuestion() {
		if (this.isQuizFinished()) {
			this.setState({
				isFinished: true
			})
		} else {
			this.setState({
				activeQuestion: this.state.activeQuestion + 1
			})
		}
	}

	prevQuestion() {
		if (this.state.activeQuestion !== 0) {
			this.setState({
				activeQuestion: this.state.activeQuestion - 1
			})
		}
	}

	isQuizFinished() {
		return this.state.activeQuistion === this.state.quiz.length
	}

	render() {
		return(
			<div className={style.modal}>
				<div className={style.modalWrapper}>
					<Content
						closeModal={this.closeModal}
						startQuiz={this.state.startQuiz}
						onStartQuiz={this.handlerStartQuiz}
						onCurrentQuestion={this.currentQuestion}
						quiz={this.state.quiz}
						activeQuestion={this.state.quiz[this.state.activeQuestion]}
					/>
					{this.state.startQuiz ? <SideBar /> : null}
				</div>
				<Overflow closeModal={this.closeModal}/>
			</div>
			
		)
	}
}

export default Modal