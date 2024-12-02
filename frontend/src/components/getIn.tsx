import { useDispatch,  useSelector } from "react-redux"
import { AppDispatch , RootState } from "../app/store"
import { resetForm , updateFormField , getIn } from "../features/users/startUser"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const GetIn: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const {userName , email , status , error} = useSelector((state: RootState)=> state.user)

    const navigate = useNavigate()


const handleInputChange = (field: "userName" | "email" , value: string) => {

    dispatch(updateFormField({field , value}));
}

const handleSubmit = async (e: React.FormEvent)=>{


    e.preventDefault()
    const resultAction = await dispatch(
        getIn({ userName, email })
    );

    // Optional: Check the result
    if (getIn.fulfilled.match(resultAction)) {
        console.log("Login successful!");
    } else {
        console.error("Login failed!", resultAction.payload);
    }
    
};

useEffect(()=>{

    if(status === 'succeeded'){
        navigate('/home')
    }
},[status])


  return (
            
<div className="flex justify-center items-center w-full h-screen ">
<div className="w-80 h-96 h-full rounded-2xl bg-slate-900">
    <form onSubmit={handleSubmit}>
  <div className="flex flex-col gap-2 p-8">

    <p className="text-center text-3xl text-gray-300 mb-4">Get In</p>

    <input onChange={(e)=> handleInputChange('userName', e.target.value)} type="text" className="bg-slate-900 text-gray-300 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Name"/>

    <input onChange={(e)=> handleInputChange('email', e.target.value)} type="email"  className="bg-slate-900 text-gray-300 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="email"/>


    <button disabled={status === 'loading'} className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">{status === "loading" ? "Submitting..." : "Get Started"}</button>

    {status === "failed" && error && ( <p className="text-red-500">{error}</p>)}
    {status === "succeeded" && ( <p className="text-green-500">login successful!</p> )}
  </div>
  </form>
</div>      
</div>

 )
}


export default GetIn
