import { useState } from 'react'

import logic from '../logic'

import Field from '../components/core/Field'
import SubmitButton from '../components/core/SubmitButton'
import Link from '../components/core/Link'
import Title from '../components/core/Title'

import FormWithFeedback from '../components/library/FormWithFeedback'
import View from '../components/library/View'
import { SystemError } from 'com/errors'
import useContext from '../useContext'

function Register({ onUserRegistered, onLoginLinkClick }) {
    console.log('Register -> render')
    const { alert } = useContext()
    const [message, setMessage] = useState('')

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const surname = form.surname.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value
        const passwordRepeat = form.passwordRepeat.value

        try {
            logic.registerUser(name, surname, email, username, password, passwordRepeat)
            .then(() => {
                onUserRegistered()
                alert('Registration completed! 🎉')
            })
            .catch(error => {
                console.log(error)
                if (error instanceof SystemError) {
                    alert(error.message)

                    return
                }
                setMessage(error.message)
            })
        } catch (error) {
            console.error(error)

            setMessage(error.message)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()

        onLoginLinkClick()
    }

    return <View tag="main">
        <div className='Titles'><Title>Register - Welcome to SocialCode 👋</Title></div>

        <FormWithFeedback onSubmit={handleRegisterSubmit} message={message}>
            <Field id="name" placeholder="name">Name</Field>

            <Field id="surname" placeholder="surname">Surname</Field>

            <Field id="email" type="email" placeholder="name@example.com">E-mail</Field>

            <Field id="username" placeholder="username">Username</Field>

            <Field id="password" type="password" placeholder="password">Password</Field>

            <Field id="passwordRepeat" type="password" placeholder="password repeat">Password Repeat</Field>

            <SubmitButton>Register</SubmitButton>
        </FormWithFeedback>
        <div className='Link'><Link onClick={handleLoginClick}>...Back to login</Link></div>
    </View>
}

export default Register