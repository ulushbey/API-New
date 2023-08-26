import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserTable = () => {

    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        get_users()
    }, [])

    const get_users = async () => {
        const res = await axios('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
        setLoading(false)
    }

    console.log("users: ", users    )
    if(loading){
        return <h1>loading...</h1>
    }

  return (
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((item) => (
                    <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
              </th>
              <td className="px-6 py-4">
                {item.username}
              </td>
              <td className="px-6 py-4">
                {item.email}
              </td>
              <td className="px-6 py-4">
                {item.phone}
              </td>
            </tr>
                ))
            }
           
          </tbody>
        </table>
      </div>
    );
  }

export default UserTable