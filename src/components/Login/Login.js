import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Login = () => {
	const [email, setEmail] = useState('')
	const [checkEmail, setCheckEmail] = useState(false)
	const [password, setPassword] = useState('')
	const [checkPassword, setCheckPassword] = useState(false)
	const [formValid, setFormValid] = useState(null)

	const emailChangeHandler = (e) => {
		setEmail(e.target.value)
		const validEmailRegex = RegExp(
			/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
		)
		if (!validEmailRegex.test(String(e.target.value).toLowerCase())) {
			setCheckEmail(false)
		} else {
			setCheckEmail(true)
		}
	}

	const passwordChangeHandler = (e) => {
		setPassword(e.target.value)
		if (password.length < 6) {
			setCheckPassword(false)
		} else {
			setCheckPassword(true)
		}
	}

	const submitHandler = (event) => {
		event.preventDefault()
	}

	useEffect(() => {
		if (checkEmail === true && checkPassword === true) {
			setFormValid(true)
		} else {
			setFormValid(false)
		}
	}, [checkEmail, checkPassword])

	return (
		<Container>
			<Main>
				<Title>Авторизация</Title>
				<Form onSubmit={submitHandler}>
					<label>Введите свой email, телефон или id:</label>
					<input
						type='email'
						value={email}
						onChange={emailChangeHandler}
						placeholder='#3923943294'
					/>
					<label>Введите свой пароль:</label>
					<input
						type='password'
						value={password}
						onChange={passwordChangeHandler}
						placeholder='********'
					/>
				</Form>
				<Text>Забыли пароль?</Text>
				<Button disabled={!formValid}>Войти</Button>
			</Main>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	background: #f5f5f5;
	height: 650px;
	padding-top: 10%;
	padding: 0 20px;
`

const Main = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 330px;
	height: 352px;
`

const Title = styled.h2`
	color: #4062ff;
	font-family: 'PT Sans Narrow', sans-serif;
	font-weight: 700;
	font-size: 50px;
	line-height: 61px;
	letter-spacing: 3px;
	margin: 10px 0;
	@media (max-width: 420px) {
		font-size: 38.8889px;
		line-height: 47px;
	}
`

const Form = styled.form`
	& label {
		display: block;
		font-size: 18px;
		color: #000000;
		font-family: 'PT Sans Narrow', sans-serif;
		font-weight: 600;
		margin: 20px 0 0 0;
		@media (max-width: 420px) {
			max-width: 271.44px;
			width: 100%;
			height: 42.78px;
		}
	}
	& input {
		width: 100%;
		max-width: 305px;
		height: 55px;
		background: #ffffff;
		box-shadow: 0px 0px 37.36px rgba(0, 0, 0, 0.05);
		border-radius: 12px;
		font-family: 'Outfit';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 18px;
		border: none;
		padding-left: 20px;
		outline: rgb(83, 83, 161);
		@media (max-width: 420px) {
			font-size: 14px;
			line-height: 17px;
		}
	}
`

const Text = styled.p`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 300;
	font-size: 11px;
	line-height: 13px;
	color: #000000;
	margin-top: 0;
	@media(max-width: 420px) {
		font-size: 8.55556px;
		line-height: 10px;
	}
`

const Button = styled.button`
	/* background: linear-gradient(
		90deg,
		#3aa0ff 0%,
		#137cf9 52.76%,
		#0152f9 103.37%
	); */
	background-color: #3aa0ff;
	border-radius: 16px;
	max-width: 329px;
	width: 100%;
	height: 41px;
	margin-top: 20px;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 18px;
	color: white;
	border: none;
	:hover {
		background-color: #137cf9;
	}
	:active {
		background-color: #0152f9;
	}
	@media(max-width: 420px) {
		max-width: 271.44px;
		width: 100%;
		height: 31.89px;
        font-size: 9.04942px;
		line-height: 11px;
	}
`

export default Login
