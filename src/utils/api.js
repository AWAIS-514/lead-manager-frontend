const API_URL = "http://localhost:8000/leads";

export const createLead = async (leadData) => {
  try {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
    });
    return res.json();
  } catch (error) {
    console.log(error,"create err")
  }
};

export const getLeads = async () => {
  try {
    const res = await fetch(API_URL);
    return res.json();
  } catch (error) {
    console.log(error,"get err")
  }
};
