import { useRef } from 'react';
import { passwordChangeAPIKey } from '../Auth/api-key';
import classes from './ProfileForm.module.css';

const ProfileForm = () =>
{
  const newPasswordInputRef = useRef()

  const submitHandler = (e) =>
  {
    e.preventDefault()

    const enteredNewPassword = newPasswordInputRef.current.value

    fetch(passwordChangeAPIKey, {
      method: 'POST',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input
          type='password'
          id='new-password'
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
