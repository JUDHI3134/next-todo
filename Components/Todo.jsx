import React from 'react'

const Todo = ({title, description, complete,id,deleteTodo,mongoId,completeTodo}) => {
  return (
    <tr className="bg-white dark:bg-gray-800">
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {id+1}
    </th>
    <td className={`px-3 py-1 md:px-6 md:py-4 ${complete? "line-through": ""}`}>{title}</td>
    <td className={`px-3 py-1 md:px-6 md:py-4 ${complete? "line-through": ""}`}>{description}</td>
    <td className="px-3 py-1 md:px-6 md:py-4">{complete? "Completed": "Pending"}</td>
    <td className="px-3 py-1 md:px-6 md:py-4 flex gap-2">
    <button onClick={()=>deleteTodo(mongoId)} className='bg-red-500 text-white rounded-lg px-4 py-2'>Delete</button>
    {complete? "" :
    <button onClick={()=>completeTodo(mongoId)} className='bg-green-500 text-white rounded-lg px-4 py-2'>Done</button>}
    </td>
  </tr>
  )
}

export default Todo
