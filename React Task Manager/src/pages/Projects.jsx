import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../componenets/Input'

function Projects() {
  const {register, handleSubmit} = useForm();
  return (
    <div className='bg-TBlueLight h-full rounded-md'>
      <h1 className='text-left m-10 text-xl font-bold leading-tight tracking-tight'>Add Projects</h1>
      <form action="">
        <Input 
          label="Project Name"
          placeholder="Project Name"
          type="text"
          {...register("projectName")}
        />
        <Input 
          label="Deadline Date"
          placeholder="Deadline Date"
          type="date"
          {...register("deadlineDate")}
        />
        <Input 
          label="Project manager name"
          placeholder="Project manager name"
          type="text"
          {...register("managerName")}
        />
        <Input 
          label="Project Deletion Key"
          placeholder="Project Deletion Key"
          type="password"
          {...register("deletionKey")}
        />
      </form>
    </div>
  )
}

export default Projects