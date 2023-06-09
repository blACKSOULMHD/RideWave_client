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
export const carRegistor = async(values,token)=>{
  console.log(values,'this is vvalue');
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
 
  
  const response = await axiosDriverInstance.post("/car", values, config);
  return response;
 } catch (error) {
  console.log(error.message);
 }
}
export const editeProfile = async(data,token)=>{
  console.log(token,'this axios');
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
 
  
  const response = await axiosDriverInstance.patch("/profile", {data}, config);
  return response;
 } catch (error) {
  console.log(error.message);
 }
}
export const getProfile = async(data,token)=>{
 
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
 
  
  const response = await axiosDriverInstance.get(`/profile?data=${data}`,config,);
  return response;
 } catch (error) {
  console.log(error.message);

 }
}
export const car = async(driverid,token)=>{

 try {
  const config = {
    headers: {
      // Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
 
  
  const response = await axiosDriverInstance.get(`/car?driverid=${driverid}`,config);
  return response;
 } catch (error) {
  console.log(error.message);

 }
}
export const editCar = async(data,token)=>{
    
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
 
  
  const response = await axiosDriverInstance.patch(`/car`,data,config);
  return response;
 } catch (error) {
  console.log(error.message);

 }
}
export const DriverLocation = async(token,driverCoordinates,driverid,active)=>{
    console.log(token,driverCoordinates,driverid ,'driver location');
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
 
  
  const response = await axiosDriverInstance.post(`/location`,{driverCoordinates,driverid,active},config);
  return response;
 } catch (error) {
  console.log(error.message);

 }
}
export const carfind = async (driverid)=>{
   
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  
  
  const response = await axiosDriverInstance.get('/Carfound',{params:{driverid}},config);
  return response;
 } catch (error) {
  console.log(error.message);

 }
}
export const availableRides = async (driverid,token)=>{
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    params:{driverid}
  };
  
 
  const response = await axiosDriverInstance.get('/ride',config);
  return response;
 } catch (error) {
  console.log(error.message);

 }
}
export const trip = async (tripid,driverid,status,token)=>{
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
   
  };
  
 
  const response = await axiosDriverInstance.post('/ride',{tripid,driverid,status},config);
  return response;
 } catch (error) {
  console.log(error.message);

 }
}
export const getTrip = async (driverid,token)=>{

 try {
  const config = {
    headers: {
      // Accept: "application/json",
      // Authorization: `Bearer ${token}`, 
      "Content-Type": "application/json",
    },
    params:{driverid}
   
  };
  
 
  const response = await axiosDriverInstance.get('/trip',config);
  return response;
 } catch (error) {
  console.log(error.message);

 }
}
export const tripFind = async (tripid)=>{

 try {
  const config = {
    headers: {
      // Accept: "application/json",
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    params:{tripid}
   
  };
  
 
  const response = await axiosDriverInstance.get('/trip_status',config);
  return response;
 } catch (error) {
  console.log(error.message);

 }
}
export const StartedToDestination = async (tripid,otp,token)=>{
      
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
   
   
  };
  
 
  const response = await axiosDriverInstance.post('/trip_status',{tripid,otp},config);
  return response;
 } catch (error) {
  console.log(error.message);

 }
}
export const tripCompleted = async (tripid,token)=>{
      
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
   
   
  };
  
 
  const response = await axiosDriverInstance.post('/trip__status',{tripid},config);
  return response;
 } catch (error) {
  console.log(error.message);

 }
}
export const riport = async (token,driverid)=>{
      
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
   params:{driverid}
   
  };
  
 
  const response = await axiosDriverInstance.get('/riport',config);
  return response;
 } catch (error) {
  console.log(error.message);

 }
}



 