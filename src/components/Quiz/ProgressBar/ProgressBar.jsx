import React, {Component} from 'react'
import style from './ProgressBar.module.scss'
import ProgressItem from './ProgressItem/ProgressItem'

class ProgressBar extends Component {
	constructor(prosp) {
		super(prosp)
		this.state = {
			nextItem: () => {
				return (this.props?.activeQuestion?.id && this.props?.activeQuestion?.id !== this.props.lengthQuiz) 
					? this.props?.activeQuestion?.id + 1 
					: false
			},
			chekedItem: this.props?.activeQuestion?.id
		}
	}

	checkState = (value) => {
		const stateItem = []
		if (this.props.startQuiz) {
			const activeItem = item => { 
					if (this.props?.activeQuestion?.id === (item + 1)) {
						stateItem.push('active')
					}
				},
				nextItem = item => {
					if (this.state.nextItem() === item + 1) {
						stateItem.push('next')
					}
				}

			activeItem(value)
			nextItem(value)
		}
		return stateItem
	}

	render() {
		console.log(this.state.chekedItem);
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