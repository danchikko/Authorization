import classes from './Login.module.css'

const Login = () => {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
            <h2 className={classes.title}>Авторизация</h2>
            <form className={classes.form}>
                <label>Введите свой email, телефон или id:</label>
                <input type="email" placeholder='#3923943294'/>
                <label>Введите свой пароль:</label>
                <input type="password" placeholder='********'/>
            </form>
            <p className={classes.text}>Забыли пароль?</p>
            <button className={classes.button}>Войти</button>
            </div>
        </div>
    )
}

export default Login;