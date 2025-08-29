import { useEffect, useState } from 'react'

function FetchApi() {
    const [data,setData] = useState([]);
    const [get,setGet] = useState(false);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((result)=>setData(result))
    },[get])

      console.log(data)
  return (
    <div>
        <h1>Learn Fetch Api</h1>    
        {get === true ? (
            <ul>
                {data && data.length > 0 ? data.map((item:any) => (
                    <li key={item.id}>{item.title}</li>
                )) : <li>No Data Found</li>}
            </ul>
        ) : <h1>Click button to fetch user data</h1>}

        <button onClick={() => setGet(true)}>Fetch User Data</button>
    </div>
  )
}

export default FetchApi