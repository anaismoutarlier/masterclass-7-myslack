import { RaisedButton } from "../components";


export default function Chat() {
  return (
    <div className="chat container">
      <div className="sider">
        <div>
          <img SRC="" alt="" className="sider-avatar" />
          <h2>Anais</h2>
          <h3>anais@lacapsule.academy</h3>
        </div>
        <RaisedButton>LOGOUT</RaisedButton>
      </div>
      <div className="content">
        <div className="message-container">
            <div className="message">
              <img src="" alt="" className="avatar" />
              <div>
                <h6>Bienvenue !</h6>
                <p>
                  10h11
                </p>
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
