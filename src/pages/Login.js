import { RaisedButton } from "../components";

import { useContext } from "react";
import { FirebaseContext } from "../hooks";

export default function Login() {
  const { firebase: { auth } } = useContext(FirebaseContext);

  return (
    <div className="login container">
      <RaisedButton onClick={auth.login}>LOGIN</RaisedButton>
    </div>
  )
}
