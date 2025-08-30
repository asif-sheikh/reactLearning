// import { useContext } from 'react'
import { useContext } from 'react';
import  { UserContext } from '../../components/useContext/UseContext' 

function ChildC() {
  const user = useContext(UserContext);
  if (!user) return <p>No context found</p>;
  return (
    <div>return <h2>Profile: {user.user}</h2>;</div>
  )
}

export default ChildC