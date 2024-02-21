import React from 'react'
import { useEffect, useState } from 'react'
import { url } from '../data/data.js';
import Table from 'react-bootstrap/Table';

export default function MyUsers() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(url + 'users?_embed')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setUser(data)
                })
            .catch(err => console.error(err))
    }, [])

  return (
    <>
    <div style={{minHeight: "73vh"}}>
        <h2 className='text-center mt-5'>Admin List</h2>
        <Table 
         striped bordered hover 
         className='w-50 mx-auto mb-5 mt-3'
         >
            <thead>
                <tr>
                <th>ID</th>
                <th>Admin Name</th>
                </tr>
            </thead>
            <tbody>
            {user.sort((a, b) => a.id - b.id).map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                </tr>
                ))}
            </tbody>
        </Table> 
    </div>

    </>
  )
}