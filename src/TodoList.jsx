import React from "react";
import useAPI from "./useAPI";

const url = "https://jsonplaceholder.typicode.com/todos";

export default function TodoList() {
  const { isLoading, data, error } = useAPI(url);
  if(isLoading) return <p>Loading....</p>
  if(error) return <p style={{color:'red'}}> {error} </p> 
  return (
    <div className="TodoList" style={{backgroundColor: "#ffd0d7" , padding:"10", maxWidth: 700, margin:"0 auto", marginBottom: 25}}>
      { data.map((record) => (
        <p key={record.id}>
          {record.id} - {record.title}
        </p>
        ))
      }
    </div>
  )
}
