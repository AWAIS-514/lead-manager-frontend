import { createLead } from "@/utils/api";
import { useState } from "react";

const initialState = { name: "", email:"", status: "" };
const LeadForm = ({fetchLeads}) => {
    const [state,setState]=useState(initialState);

    const onUpdate = (e) => {
        const { name, value } = e.target;
        setState(s=>({...s,[name]:value}))
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        await createLead(state);
        setState(initialState);
        fetchLeads()
    }

  return (
    <div className=" w-1/2 h-full items-center justify-center flex">
        <form className="w-full mx-20" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="name" id="name" value={state.name} onChange={onUpdate} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
            </div>
            <div className="relative z-0 mb-5 w-full group">
                <input type="email" name="email" id="email" value={state.email} onChange={onUpdate} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
            
            <label for="countries" className="block mb-2 text-sm font-medium text-gray-500 ">Status</label>
            <select id="countries" value={state.status} onChange={onUpdate} name="status" className=" border mb-5 border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5 outline-none">
                <option selected>Choose an option</option>
                <option value="New">New</option>
                <option value="Engaged">Engaged</option>
                <option value="Proposal Sent">Proposal Sent</option>
                <option value="Closed-Won">Closed-Won</option>
                <option value="Closed-Lost">Closed-Lost</option>
            </select>

        
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Lead</button>
        </form>
    </div>

  )
}

export default LeadForm