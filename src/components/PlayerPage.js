import classes from './PlayerPage.module.css'
import player from '../aseets/images/player.webp'

const PlayerPage = () => {
	return (
		<div className={classes.container}>
			<div className={classes.player}>
				<img className={classes.logo} src={player} alt='player' />
			</div>
			<button className={classes.button}>Выйти</button>
		</div>
	)
}

export default PlayerPage
