import { useCallback, useRef, useState } from "react";
import APIContext from "./APIContext";
import "./styles.css";
import TodoList from "./TodoList";
import UserList from "./UserList";

function App() {
  const requests = useRef(new Map());
  const [isShow, setIsShow] = useState(false);

  const onRequest = useCallback((url) => {
      if (requests.current.has(url)) {
        return requests.current.get(url);
      }

      const promise = fetch(url).then((response) => { 
        if (!response.ok) {
          return Promise.reject(new Error("Error Fetching Data"));
         }
         return response.json(); 
      });
      requests.current.set(url, promise);
      return promise;
   } , [requests]);

  return (
    <APIContext.Provider
        value={{
          onRequest
        }}
      >
        <div className="App">
            <UserList />
            <UserList />
            <TodoList  />
            {isShow && <>
              <TodoList  />
              <UserList />
            </>}
            <button onClick={() => setIsShow(true)}>Load More Data</button>
        </div>
      </APIContext.Provider>
    
  );
}

export default App;
