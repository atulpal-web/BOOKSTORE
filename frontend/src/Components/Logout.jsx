import React from 'react'
import { useAuth } from '../Context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogOut= () =>{
        try {
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem("Users");
            toast.success("Logout Successfully");
            setTimeout(() => { window.location.reload();
            }, 1000);
        } catch(error){
            toast.error("Error in Logout : "+ error);
            setTimeout (()=>{

            },1000);
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogOut}>LogOut</button>
    </div>
  )
}

export default Logout
