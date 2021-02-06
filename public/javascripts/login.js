window.addEventListener("load", (event) => {
    const demo = document.querySelector('.login-signup-form__demo-user')
    demo.addEventListener('click', () => {
        const email = document.querySelector('.login-signup-form__email')
        const password = document.querySelector('.login-signup-form__password')
        email.value = 'demo@email.user.com'
        password.value = 'password1234'
        document.querySelector('.login-signup-form').submit()
    });
});
