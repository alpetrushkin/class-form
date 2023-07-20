import { Component } from 'react'
import './App.css'

class App extends Component {
	state = {
		firstName: '',
		email: '',
		message: '',
		select: '',
		checkSelect: false,
		gender: ''
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	validateFirstName = () => {
		if (this.state.firstName.length < 3) {
			this.setState({ firstName: '' })
			alert('Количество символов должно быть больше 5')
		}
	}

	validateEmail = () => {
		if (
			!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
		) {
			alert('email is not valid')
		}
	}

	checkSelectHandler = event => {
		this.setState({ [event.target.name]: event.target.checked })
	}

	render() {
		return (
			<>
				<input
					type='text'
					name='firstName'
					placeholder='First Name'
					value={this.state.firstName}
					onChange={this.handleChange}
					onBlur={this.validateFirstName}
				/>
				<input
					type='email'
					name='email'
					placeholder='Email'
					value={this.state.email}
					onChange={this.handleChange}
					onBlur={this.validateEmail}
				/>
				<br />
				<textarea
					name='message'
					value={this.state.message}
					onChange={this.handleChange}
				></textarea>
				<br />
				<select
					name='select'
					value={this.state.select}
					onChange={this.handleChange}
				>
					<option disabled></option>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</select>
				<br />
				<label>
					<input
						type='checkbox'
						name='checkSelect'
						checked={this.state.checkSelect}
						onChange={this.checkSelectHandler}
					/>
					Subscription
				</label>
				<br />
				<form>
					<input
						type='radio'
						name='gender'
						value='male'
						onChange={this.handleChange}
						checked={this.state.gender === 'male'}
					/>{' '}
					Male
					<br />
					<input
						type='radio'
						name='gender'
						value='female'
						onChange={this.handleChange}
						checked={this.state.gender === 'female'}
					/>{' '}
					Female
				</form>
			</>
		)
	}
}

export default App
