window.addEventListener("load", (event) => {
    const demo = document.querySelector('.login-signup-form__demo-user')
    demo.addEventListener('click', event => {
        const email = document.querySelector('.login-signup-form__email')
        const password = document.querySelector('.login-signup-form__password')
        email.value = 'demo123@email.com'
        password.value = 'password6'
        document.querySelector('.login-signup-form').submit()
    });
});
