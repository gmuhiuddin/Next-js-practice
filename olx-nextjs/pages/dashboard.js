import React from 'react'

async function Dashboard() {
    
let res = await fetch('https://dummyjson.com/products', {cache: 'no-store'});
const result = await res.json();

  return(
    <div>
      Dashboard
      {result?.products.map(element => {
        return(
          <div>
            <img className='w-34' src={element.thumbnail} />
          </div>
        )
      })}
    </div>
  )
}

export default Dashboard;