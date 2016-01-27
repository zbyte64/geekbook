// Vendor Libraries
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

// Local Libraries
import TextInput from '~/app/views/shared/text_input'
import EmailInput from '~/app/views/shared/email_input'
import PasswordInput from '~/app/views/shared/password_input'

class Registration extends React.Component {
  static propTypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    email_confirm: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  submitForm(event) {
    event.preventDefault()

    const { email, emailConfirm } = this.refs

    if (this.props.email === this.props.email_confirm) {
      alert("Yay")
    } else {
      alert("Boo")
    }
  };

  valueChanged(ev) {
    const { name, value } = ev.target
    this.props.dispatch({ type: 'updateFormValue', name, value })
  }

  render() {
    const { first_name, last_name, email, email_confirm, password } = this.props

    return (
      <div className='registration'>
        <form className='registration-form' onSubmit={::this.submitForm}>
          <h1>Sign Up</h1>
          <p>It's free!</p>
          <TextInput
            ref='firstName'
            name='first_name'
            onChange={::this.valueChanged}
            value={first_name}
            className='input-group half'
            placeholder='First Name'
            errorMessage='First name is required'
            required
          />
          <TextInput
            ref='lastName'
            name='last_name'
            value={last_name}
            onChange={::this.valueChanged}
            className='input-group half'
            placeholder='Last Name'
            errorMessage='Last name is required'
            required
          />
          <EmailInput
            ref='email'
            name='email'
            onChange={::this.valueChanged}
            value={email}
            errorMessage='A valid email is required'
            placeholder='Email'
            required
          />
          <EmailInput
            ref='emailConfirm'
            name='email_confirm'
            onChange={::this.valueChanged}
            value={email_confirm}
            errorMessage='Emails must match'
            placeholder='Confirm Email'
            required
          />
          <PasswordInput
            ref='password'
            name='password'
            onChange={::this.valueChanged}
            value={password}
            placeholder='Password'
            errorMessage='Password must be at least 6 characters'
            required
          />
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    )
  };
}

export default connect(state => state)(Registration)
