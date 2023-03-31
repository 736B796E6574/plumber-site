import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button'
import LogoutButton from "./LogoutButton";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (!isAuthenticated){
    return <Button onClick={() => loginWithRedirect() }variant="outline-light">Signin</Button>
}else{
  return <LogoutButton />
}

};

export default LoginButton;