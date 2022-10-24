import { RaisedButton } from "../components";
import { useContext } from "react";
import { FirebaseContext } from "../hooks";

export default function Chat() {
  const { user, firebase: { auth } } = useContext(FirebaseContext);
  return (
    <div className="chat container">
      <div className="sider">
        <div>
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="sider-avatar"
          />
          <h2>{user.displayName}</h2>
          <h3>{user.email}</h3>
        </div>
        <RaisedButton onClick={auth.logout}>LOGOUT</RaisedButton>
      </div>
      <div className="content">
        <div className="message-container">
          <div className="message">
            <img src="" alt="" className="avatar" />
            <div>
              <h6>Bienvenue !</h6>
              <p>10h11</p>
            </div>
          </div>
        </div>
        <form className="input-container">
          <input />
          <RaisedButton type="submit">SEND</RaisedButton>
        </form>
      </div>
    </div>
  );
}
