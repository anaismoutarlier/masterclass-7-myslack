import "sanitize.css";

import useFirebase, { FirebaseContext } from "./hooks";

import Chat from "./pages/Chat";
import Login from "./pages/Login";

import { firebaseConfig } from "./firebaseConfig";

function App() {
  const { user, firebase } = useFirebase(firebaseConfig);
  return (
    <FirebaseContext.Provider value={{ user, firebase }}>
      {user ? <Chat /> : <Login />}
    </FirebaseContext.Provider>
  );
}

export default App;
