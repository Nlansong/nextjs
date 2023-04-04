import React from 'react'

function Userlist({users}) {
  return (
    <div>
        <h2>List of users</h2>
        {users.map((user =>{
            return(
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>

                </div>
            )
        }))}
    </div>
  )
}

export default Userlist

export async function getStaticProps() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(url);

    return{ props:{
        users: await response.json()
    }
    }
}