import classes from './LostPassword.module.css'

const LostPassword = () => {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <h2 className={classes.mainTitle}>Забыли пароль?</h2>
                <form className={classes.form}>
                    <label>Введите свой email:</label>
                    <input type="email" placeholder='sanekya_san@mail.ru' />
                    <button className={classes.button}>Отправить письмо</button>
                </form>
            </div>
        </div>
    )
}

export default LostPassword;