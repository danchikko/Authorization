import styled from 'styled-components'

const LostPassword = () => {
	return (
		<Container>
			<Main>
				<MainTitle>Забыли пароль?</MainTitle>
				<Form>
					<label>Введите свой email:</label>
					<input type='email' placeholder='sanekya_san@mail.ru' />
					<Button>Отправить письмо</Button>
				</Form>
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
	max-width: 450px;
	height: 352px;
`

const MainTitle = styled.h2`
	color: #4062ff;
	font-family: 'PT Sans Narrow', sans-serif;
	font-weight: 600;
	font-size: 50px;
	line-height: 61px;
	margin: 20px 0 20px 25px;
	@media (max-width: 420px) {
		font-size: 30px;
		line-height: 37px;
	}
`

const Form = styled.form`
	max-width: 339px;
	width: 100%;
	margin: 0 auto;
	& label {
		display: block;
		font-family: 'PT Sans Narrow', sans-serif;
		font-weight: 600;
		font-size: 18px;
		line-height: 22px;
		margin: 5px 0;
		@media (max-width: 420px) {
			font-size: 10.8593px;
			line-height: 13px;
		}
	}
	& input {
		max-width: 315px;
		width: 100%;
		height: 55px;
		display: block;
		background: #ffffff;
		box-shadow: 0px 0px 37.36px rgba(0, 0, 0, 0.05);
		border-radius: 12px;
		border: none;
		font-family: 'Outfit';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 18px;
		padding-left: 20px;
		outline: rgb(0, 0, 255);
		@media (max-width: 420px) {
			max-width: 265px;
			width: 100%;
			height: 33.18px;
		}
	}
`

const Button = styled.button`
	background-color: #3aa0ff;
	margin: 20px 0;
	max-width: 339px;
	width: 100%;
	height: 41px;
	border-radius: 16px;
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
	@media (max-width: 420px) {
		max-width: 265px;
		width: 100%;
		height: 24px;
		font-size: 9.04942px;
		line-height: 11px;
	}
`

export default LostPassword
