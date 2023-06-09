import React, { useState } from "react";
import { blockDriver } from "../../../axios/services/admin/admin";

export default function DriverModal({driverStatus,id,setDriverModal}) {
  console.log(driverStatus,'this  is driverStatus');
 
   
 async  function updateDriver (status) {
    const driver = await  blockDriver(driverStatus,id);
      console.log(driver.data,'this is a driver');
      setDriverModal(false)

  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Alert</h3>
              <button
                className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setDriverModal(false)}
              >
                X
              </button>
            
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              {<p className="my-4 text-slate-500 text-lg leading-relaxed">
               do you want to {driverStatus === 'verify' ? 'verify':'reject'} Driver
              </p>}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
             onClick={()=>{
                setDriverModal(false)
             }} >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={updateDriver}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
