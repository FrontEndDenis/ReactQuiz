import React, {Component} from 'react'
import Modal from '../Modal/Modal'
import Button from '../UI/Button/Button'

class Content extends Component {
	state = {
		activeModal: false
	}

	handlerModal = () => {
		const activeModal = !this.state.activeModal;
		this.setState({
			activeModal
		})
	}

	closeModal = () => {
		this.setState({
			activeModal: false
		})
	}

	render() {
		return (
			<div>
				<Button
					class={['btn--accent', 'btn--wdh258', 'btn--h50']}
					onChangeClick={this.handlerModal}
					text={'Вызвать модальное окно'}
				/>
				{ (this.state.activeModal) ? <Modal closeModal={this.closeModal} /> : null}
			</div>
		);
	}
}

export default Content;