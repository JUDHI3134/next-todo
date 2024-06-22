"use client"
import Todo from "@/Components/Todo";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const [formData, setFormData] = useState({
    title: "",
    description:""
  })


  const onChangeHandler = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setFormData(form => ({...form,[name]:value}))
    console.log(formData);
  }

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    try {
      //api code


      toast.success("Todo Added")
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  return (
    <>
    <ToastContainer theme="dark"/>
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-2 w-[80%] items-start mt-24 max-w-[600px] px-2 mx-auto">
        <input
        onChange={onChangeHandler}
        value={formData.title}
          className="px-3 py-2 border-2 w-full"
          type="text"
          name="title"
          placeholder="Enter Title"
        />
        <textarea
        onChange={onChangeHandler}
        value={formData.description}
          className="px-3 py-2 border-2 w-full"
          name="description"
          placeholder="Enter description"
        ></textarea>
        <button
          className="bg-blue-500 px-4 py-2 text-white font-semibold rounded-lg mt-5"
          type="submit"
        >
          ADD TODO
        </button>
      </form>

      <div className="relative overflow-x-auto mx-auto w-[60%] mt-24">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <Todo />
            <Todo />
            <Todo />
          </tbody>
        </table>
      </div>
    </>
  );
}
