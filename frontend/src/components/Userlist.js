
import { React,  useState, useEffect} from "react";
import axios from "axios"
export const Userlist = () =>{

   const[userData, setUserData]= useState(null)

   const fetchUserData = async () =>{
    const resp = await axios.get("/getUser");
    console.log(resp);

    //if no user are there pls donot set value
     if( resp.data.users.length > 0){  //object a jmn porechilm 
       setUserData(resp.data.users)
     }
   };
useEffect(()=>{
  fetchUserData();
}, [userData])  //[]= if anything happens i will hithit refresh automatically // userDAta ta ache bole data ta nijr theke reload mere niche change howr sathe ar purono gulo o thakche kono issues chara
//EDIT
  const handleEdit = async (user) => {  //user bcoz something is going to pass
     const userName = prompt("Write your new name")
     const userEmail = prompt("Write your new email")

     if (!userName || !userEmail) {
         alert(" PLEASE fill both your mail address and name")
     } else {
      const resp = await axios.put(`/updateUser/${user._id}`,{
        name:userName,
        email:userEmail,
      });
      console.log(resp);
     };
  }
  //delete
  const handleDelete = async (userId)=>  {
   const resp = await axios.delete(`/deleteUser/${userId}`);
   console.log(resp);
  }
    return(
        <div><section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            All Users
          </h1>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Email
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Edit
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {userData && userData.map ((user) => (
                <tr>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">
                  <button className="hover:text-green-500"
                  onClick={ () => handleEdit(user) }
                  >Edit</button>
                </td>
                <td className="px-4 py-3 text-lg text-gray-900">
                  <button className="hover:text-red-500"
                  onClick={()=>handleDelete(user._id)}
                  >Delete</button>
                </td>
              </tr>
              ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
</div>
    )
}