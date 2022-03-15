import React, { useState, useEffect } from 'react'
import Layout from '../../pages/Layout'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

const Login = () => {

  const [isSignedIn, setIsSignedIn] = useState(false)
  const responseGoogle = (response) => {
    if (response.profileObj) {
      setIsSignedIn(true);
    }
    console.log(response);
  }

  const logout = () => {
    setIsSignedIn(false);
  }

  return (
    <div>
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        onSuccess={() => responseGoogle}
        onFailure={() => responseGoogle}
        cookiePolicy={'single host origin'}>
      </GoogleLogin>

      <GoogleLogout
        clientId={process.env.GOOGLE_CLIENT_ID}
        onLogoutSuccess={() => logout}>
      </GoogleLogout>
    </div>

  )
}

export default Login