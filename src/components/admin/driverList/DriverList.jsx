import React, { useEffect, useState } from "react";
import { blockDrivers, getDrivers } from "../../../axios/services/admin/admin";
import { useNavigate } from "react-router-dom";

export default function DriverList() {
  const navigate = useNavigate()
  const [refresh,setrefresh] = useState(false)
  const [driverData, setDriverData] = useState([]);

  useEffect(() => {
    getDrivers().then((res) => {
      console.log(res, "this is res");
      setDriverData(res.data);
      console.log(driverData, "this driver");
    });
  }, [refresh]);

  function handleEdit(id){
  navigate("/admin/driver_verify/",{state:{id}})

  }
   async function handleStatus(status,id) {
  const res = await blockDrivers(status,id)
     setrefresh(!refresh)
  }

  return (
    <>
      <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-regal-blue">
        <div className="space-y-2 col-span-full lg:col-span-1">
          <p className="font-extrabold text-lg text-real-orange">
            Driver Information
          </p>
        </div>
      </fieldset>
      <div className="">
        <div className="min-w-screen  flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6 overflow-x-scroll scrollbar-hide">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Client license</th>
                    <th className="py-3 px-6 text-center">Contact</th>
                    <th className="py-3 px-6 text-center">Rides</th>
                    <th className="py-3 px-6 text-center">Driver right</th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">View</th>
                  </tr>
                </thead>
                {driverData &&
                  driverData.map((item) => {
                    return (
                      <tbody className="text-gray-600 text-sm font-light">
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                          <td className="py-3 px-6 text-left">
                            <div className="flex items-center">
                              <div className="mr-2">
                                <img
                                  className="w-6 h-6 rounded-full"
                                  src={item.license}
                                />
                              </div>
                              <span>{item.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-6 text-center whitespace-nowrap">
                            <div className=" text-center">
                              <span className="font-medium ">{item.email}</span>
                            </div>
                          </td>
                          <td className="py-3 px-6 text-center">
                            <div className="flex items-center justify-center">
                              0
                            </div>
                          </td>
                          <td className="py-3 px-6 text-center">
                            {item.isverify === 'verified'? (
                              <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                verified
                              </span>
                            ) : item.isverify === 'not verified'? (
                              <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                not verified
                              </span>
                            ): <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                               Rejected
                          </span>}
                          </td>
                          <td className="py-3 px-6 text-center">
                            {item.DriverStatus ? (
                              <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs" onClick={()=>handleStatus('active',item._id)}>
                                active
                              </span>
                            ) : (
                              <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs"onClick={()=>handleStatus('block',item._id)}>
                                block
                              </span>
                            )}
                          </td>
                          
                          <td className="py-3 px-6 text-center">
                            <div className="flex item-center justify-center">
                              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={()=>handleEdit(item?._id)}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </div>
        </div>
            
      </div>
          
    </>
  );
}
