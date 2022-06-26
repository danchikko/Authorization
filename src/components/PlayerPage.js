import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const PlayerPage = () => {
	const navigate = useNavigate()

	return (
		<Container>
			<Play>
				<video width="100%" height="100%" controls>
					<source src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' type='video/mp4' />
				</video>
			</Play>
			<Button onClick={() => {
				navigate('/', {replace: true})
			}}>Выйти</Button>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	background: #f5f5f5;
	height: 1000px;
	display: flex;
	justify-content: center;
	padding: 0 20px;
`

const Play = styled.div`
	margin: 170px 0 0 10px;
	max-width: 1280px;
	width: 100%;
	height: 720px;
	background: #ffffff;
	box-shadow: 0px 0px 37.36px rgba(0, 0, 0, 0.05);
	border-radius: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 420px) {
		max-width: 309px;
		width: 100%;
		height: 173.81px;
	}
` 

const Button = styled.button`
	margin: 1px 100px 39px 78px;
	width: 142px;
	height: 41px;
	background-color: #3aa0ff;
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
		margin: 39px 25px 262px -50px;
		width: 55.69px;
		height: 18px;
		font-weight: 400;
		font-size: 6.5625px;
		line-height: 8px;
	}
`

export default PlayerPage
