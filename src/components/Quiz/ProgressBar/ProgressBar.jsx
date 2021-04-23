import React, {Component} from 'react'
import style from './ProgressBar.module.scss'
import ProgressItem from './ProgressItem/ProgressItem'

class ProgressBar extends Component {
	nextItem = () => {
		return (this.props?.activeQuestion?.id && this.props?.activeQuestion?.id !== this.props.lengthQuiz) 
			? this.props?.activeQuestion?.id + 1 
			: false
	}

	checkState = (value) => {
		const stateItem = []
		if (this.props.startQuiz) {
			if (this.props?.activeQuestion?.id === (value + 1)) stateItem.push('active')
			
			if (this.nextItem() === value + 1) stateItem.push('checked')

			if (this.props.checkedQuestion.includes(value)) stateItem.push('checked')
		}
		return stateItem
	}

	render() {
		let lengthQuiz = this.props.lengthQuiz
		if (!this.props.startQuiz) {
			lengthQuiz = 1
		}
		return (
			<div className={style.ProgressBar}>
				{ Array.from({length: lengthQuiz}, (_, i) => i).map(item => {
						return <ProgressItem
							key={item}
							item={item}
							lengthQuiz={this.props.lengthQuiz}
							startQuiz={this.props.startQuiz}
							stateQuestion={ this.checkState(item) }
							onCurrentQuestion={this.props.onCurrentQuestion}
						/>
				})}
			</div>
		)
	}
}

export default ProgressBar