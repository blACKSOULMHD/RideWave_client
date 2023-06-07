import { axiosDriverInstance } from "../../instances/instance";

export const driverSignup = async (values) => {

  try {
    const config = {
      headers: {
        // Accept: "application/json",
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
   
    
    const response = await axiosDriverInstance.post("/signup", values, config);
    return response;
  } catch (error) {
    if(error.message==='Request failed with status code 500');
    return error.message
   
  }

};
export const driverLogin = async(values)=>{
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
 
  
  const response = await axiosDriverInstance.post("/login", values, config);
  return response;
 } catch (error) {
  console.log(error.message);
 }
}

 