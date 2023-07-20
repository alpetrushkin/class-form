import { Component } from 'react'

class Form extends Component {
	state = {
		email: '',
		isDone: false
	}

	handleEmail = e => {
		this.setState({ email: e.target.value })
	}

	handleCheckBox = e => {
		this.setState({ isDone: e.target.checked })
	}

	handleSubmit = () => {
		const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
			this.state.email
		)
		const validCheckBox = this.state.isDone
		if (!validEmail) {
			alert('Невалидный email')
			return
		}
		if (!validCheckBox) {
			alert('Поставьте галочку')
			return
		}
		this.setState({
			email: '',
			isDone: false
		})
		alert('Спасибо за подписку')
	}

	render() {
		const { email, isDone } = this.state
		return (
			<div>
				<input
					type='email'
					name='email'
					placeholder='Email'
					value={email}
					onChange={this.handleEmail}
				/>
				<br />
				<label>
					<input
						type='checkbox'
						name='isDone'
						checked={isDone}
						onChange={this.handleCheckBox}
					/>{' '}
					Принять условия
				</label>
				<br />
				<button onClick={this.handleSubmit}>Подписаться</button>
			</div>
		)
	}
}
export default Form
