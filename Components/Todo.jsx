import React from 'react'

const Todo = () => {
  return (
    <tr className="bg-white dark:bg-gray-800">
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      1
    </th>
    <td className="px-6 py-4">Study</td>
    <td className="px-6 py-4">this is Study</td>
    <td className="px-6 py-4">pending</td>
    <td className="px-6 py-4 flex gap-2">
    <button className='bg-red-500 text-white rounded-lg px-4 py-2'>Delete</button>
    <button className='bg-green-500 text-white rounded-lg px-4 py-2'>Done</button>
    </td>
  </tr>
  )
}

export default Todo
