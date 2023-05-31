import React from 'react'
import {useParams , useSearchParams} from 'react-router-dom'

function Routing() {
  const params = useParams();

  const [URLSearchParams, SetURLSearchParams] = useSearchParams()
  return (
    <>
       <div>Routing</div>
       <h1>route params - {JSON.stringify(params)}</h1>
       <h1>search params - { URLSearchParams.get("search")}</h1>
       <input type="search" placeholder='Enter any term' onChange={e => SetURLSearchParams({'search':e.target.value})} />
    </>
   
  )
}

export default Routing