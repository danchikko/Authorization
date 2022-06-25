import styled from 'styled-components'

const Successfully = () => {
	return (
		<Container>
			<Main>
				<Title>Успешно!</Title>
				<Text>
					Проверьте свою почту на наличие сообщения о востановлении
					пароля и пройдите все шаги что написаны в письме
				</Text>
				<Button>Войти</Button>
			</Main>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	background: #f5f5f5;
	height: 600px;
	padding-top: 10%;
	padding: 0 20px;
`

const Main = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 580px;
	text-align: center;
`

const Title = styled.h2`
	color: #4062ff;
	font-family: 'PT Sans Narrow', sans-serif;
	font-weight: 600;
	font-size: 50px;
	line-height: 61px;
	@media(max-width: 420px) {
		font-size: 30px;
		line-height: 37px;
	}
`

const Text = styled.p`
	font-family: 'PT Sans Narrow', sans-serif;
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	@media(max-width: 420px) {
		font-size: 10px;
		line-height: 12px;
	}
`

const Button = styled.button`
	background-color: #3aa0ff;
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
	@media(max-width: 420px) {
		max-width: 265px;
		width: 100%;
		height: 24px;
		font-size: 9.04942px;
		line-height: 11px;
	}
`

export default Successfully
