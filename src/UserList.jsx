import React from "react";
import useAPI from "./useAPI";

const url = "https://jsonplaceholder.typicode.com/users";

export default function UserList() {
  const { isLoading, data, error } = useAPI(url);
  if(isLoading) return <p>Loading....</p>
  if(error) return <p style={{color:'red'}}> {error} </p> 
  return  (
    <div className="UserList" style={{backgroundColor: "#eafffc" , padding:10 , maxWidth: 700, margin:"0 auto", marginBottom: 25}}>
    { data.map((record) => (
      <p key={record.id}>
        {record.id} - {record.name} - {record.email}
      </p>
    )) }
    </div>
  )
}
