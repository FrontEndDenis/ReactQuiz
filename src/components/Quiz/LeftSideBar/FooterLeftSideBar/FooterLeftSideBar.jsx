import React, {Component} from 'react'
// import style from './FooterLeftSideBar.module.scss'
import ProgressBar from '../../ProgressBar/ProgressBar'

class FooterLeftSideBar extends Component {
	render() {
		return (
			<div>
				<ProgressBar
					startQuiz={this.props.startQuiz}
					lengthQuiz={this.props.lengthQuiz}
					onCurrentQuestion={this.props.onCurrentQuestion}
					activeQuestion={this.props.activeQuestion}
					checkedQuestion={this.props.checkedQuestion}
				/>
			</div>
		)
	}
}

export default FooterLeftSideBar