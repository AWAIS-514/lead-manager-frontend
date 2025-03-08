import AllLeads from "@/components/AllLeads";
import LeadForm from "@/components/LeadForm";
import { getLeads } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [leads,setLeads] = useState(null)

  const fetchLeads = async () => {
    const data = await getLeads();
    setLeads(data);
  };

  useEffect(()=>{
    fetchLeads();
  },[])
  
  return (
    <div className=" h-[100vh] w-[100wh] items-center flex">
        <LeadForm fetchLeads={fetchLeads} />
        <AllLeads leads={leads} />
    </div>
  );
}
