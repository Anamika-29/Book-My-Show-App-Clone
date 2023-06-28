import React from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import http from './services/httpServer';
import authSys from './services/authSys';
function App(props) {
  async function  postData(url, obj) {

    let response = await http.post(url, obj);
    let {data}=response
    console.log(data)
authSys.login(data)

const user=authSys.getUser()
console.log(user)
 window.location=`/home/${props.location1}/Movies`
    }
  const handleFacebookLoginSuccess = (response) => {
    console.log(response)
    
    let arr={email:response.data.email,lastname:response.data.last_name,firstname:response.data.first_name,Married:"No"}
    console.log(arr)
    postData("/login",response.data)
  };

  const handleFacebookLoginFailure = (error) => {
    console.log(error)
  };

  return (
    <LoginSocialFacebook
      appId="585146860193518"
      onResolve={handleFacebookLoginSuccess}
      onReject={handleFacebookLoginFailure}
      
    >
  <  FacebookLoginButton/>
  </LoginSocialFacebook>
  );
}
export default App;
