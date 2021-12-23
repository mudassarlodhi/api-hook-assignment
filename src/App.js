import { useState } from "react";
import APIProvider from "./APIProvider";
import "./styles.css";
import TodoList from "./TodoList";
import UserList from "./UserList";

function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="App">
      <APIProvider>
        <UserList />
        <UserList />
        <TodoList />
        {isShow && <>
          <TodoList />
          <UserList />
        </>}
        <button onClick={() => setIsShow(true)}>Load More Data</button>
      </APIProvider>
    </div>
  );
}

export default App;
