import React, { Component } from 'react'
import '../App.css'

class FormRef extends Component {
	constructor() {
		super()
		this.cardRef = React.createRef()
		this.emailRef = React.createRef()
	}

	handleSubmit = event => {
		event.preventDefault()
		if (this.cardRef.current.length < 16) {
			alert('invalid card number')
			return
		}
		if (
			!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
				this.emailRef.current.value
			)
		) {
			alert('invalid email')
			return
		}
		this.cardRef.current.value = ''
		this.emailRef.current.value = ''
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' name='card' placeholder='card' ref={this.cardRef} />
				<input
					type='email'
					name='email'
					placeholder='Email'
					ref={this.emailRef}
				/>
				<button>Send</button>
			</form>
		)
	}
}
export default FormRef
