import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (


   <>
   

   <div className='bg-gray-800'>

<main>
    <Outlet/>
</main>

   </div>
   
   </>
  )
}
