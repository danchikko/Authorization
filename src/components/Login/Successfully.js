import classes from './Successfully.module.css'

const Successfully = () => {
	return (
		<div className={classes.container}>
			<div className={classes.main}>
				<h2 className={classes.title}>Успешно!</h2>
				<p className={classes.text}>
					Проверьте свою почту на наличие сообщения о востановлении
					пароля и пройдите все шаги что написаны в письме
				</p>
				<button className={classes.button}>Войти</button>
			</div>
		</div>
	)
}

export default Successfully
