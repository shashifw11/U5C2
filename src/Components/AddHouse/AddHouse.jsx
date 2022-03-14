  import {useState,useEffect} from "react" ;  
export const AddHouse = () => { 
   const [formData , setFormData] = useState({
       name : "",
       ownerName :"",
       address : "" , 
       areaCode :"" ,
       rent :"" ,
       preferredTenant :"" ,
       bachelor : "" ,
       married : "",
      
   }) ; 

   const handleChange = ((e)=>{
      const {name} = e.target ;
      setFormData ({...formData,[name] : e.target.value})
   })
  return (
    <div className="addHouseContainer">
      <form onSubmit = {(e)=>{e.preventDefault();}}>
        <label>name</label>
        <input name = "name" onChange = {handleChange} type="text" className="name" value={""} required />
        <br />
        <label>ownerName</label>
        <input  name = "ownerName" onChange = {handleChange} value={""} type="text" className="ownerName" required />
        <br />
        <label>address</label>
        <input name = "address" onChange = {handleChange} value={""} type="text" className="address" required />
        <br />
        <label>areaCode</label>
        <input name = "areaCode" onChange = {handleChange} value={""} type="text" className="areaCode" required />
        <br />
        <label>rent</label>
        <input name = "rent" onChange = {handleChange} value={""} type="text" className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input name = "preferredTenant" onChange = {handleChange} checked={""} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input name = "bachelor" onChange = {handleChange} checked={""} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input name = "married" onChange = {handleChange} value={""} type="text" className="image" required />
        <br />
        <input value = "submit" className="submitBtn" type="submit" onClick = {()=>{
                //  const data = {Name : name  ,
                //   OwerName : ownerName ,
                //   Address : address , 
                //   AreaCode : areaCode , 
                //   Rent : rent ,
                //   PreferredTenent : preferredTenant ,
                //   Bachlore : bachelor ,
                //   Married :married 
               //} 
               fetch("http://localhost:8080/houses",{
                  method : "POST" ,
                  body : JSON.stringify(formData),
                  headers : {
                    "content-type " :"application/json",                  }
               })

        }}/>
      </form>
    </div>
  );
};
