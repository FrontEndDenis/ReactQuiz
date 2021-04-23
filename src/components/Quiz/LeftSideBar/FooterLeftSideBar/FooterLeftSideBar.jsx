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
					activeQuestion={this.props.activeQuestion}
					onCurrentQuestion={this.props.onCurrentQuestion}
				/>
			</div>
		)
	}
}

export default FooterLeftSideBar