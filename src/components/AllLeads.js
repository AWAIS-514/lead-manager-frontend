
const AllLeads = ({leads}) => {
  return (
    <div className="bg-gray-50 w-1/2 min-h-full p-4 ">
    <div className="flex gap-2 flex-wrap ">
        {
            leads?.map((lead,index)=>(
                <div key={index} className="bg-gray-300 p-6 rounded-xl">
                    <p className="text-black">Name: {lead.name}</p>
                    <p className="text-black">Email: {lead.email}</p>
                    <p className="text-black">Status: {lead.status}</p>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default AllLeads