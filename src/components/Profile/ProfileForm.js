import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { passwordChangeAPIKey } from '../Auth/api-key';
import AuthContext from '../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () =>
{
  const newPasswordInputRef = useRef()

  const history = useHistory()

  const authCtx = useContext(AuthContext)

  const submitHandler = (e) =>
  {
    e.preventDefault()

    const enteredNewPassword = newPasswordInputRef.current.value

    fetch(passwordChangeAPIKey, {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res =>
      {
        // TODO: Add some code here. The assumption is that this code always goes through
        history.replace('/')
      })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input
          type='password'
          id='new-password'
          minLength='7'
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button type='submit'>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
