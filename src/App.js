import logo from './logo.svg';
import './App.css';
 import {useEffect, useState} from "react" ;
 
function App() {  
  const [getdata , setGetdata] = useState([]);

  const [data , setData] = useState({
    name : "",
    ownerName :"",
    address : "" , 
    areaCode :"" ,
    rent :"" ,
    preferredTenant :"" ,
    bachelor : "" ,
    married : "",
  }) 
 
  
   const handleChange = (e)=>{
         // console.log(e.target.name,e.target.value);
         const {name} = e.target ; 
          setData({...data,[name] : e.target.value}) 
           //console.log(data);
   } 


    useEffect(()=>{
       getData();
    },[])
     const getData = ()=>{
       fetch("http://localhost:8080/houses").then((d)=>d.json()).then((res)=>{
            setGetdata(res);
            // console.log(getdata);
       })
     }
  return (
    <div className="App"> 

    <div className="addHouseContainer">
      <form onSubmit={(e)=>{
                e.preventDefault() ; 
      }}>
       <label>Name</label>
       <input onChange ={handleChange} name = "name" type = "text" className="name" placeholder = "Enter Name"/><br/><br/>
      
      <label>ownerName</label>
       <input onChange ={handleChange}  name = "ownerName" type = "text" className="ownerName"  placeholder = "Enter OwnerName"/><br/><br/>
  
       <label>Address</label>
       <input onChange ={handleChange} name = "Addresh" type = "text"  className="address" placeholder = "Enter Addresh"/><br/><br/>
        
       <label>AreaCode</label>
        <input name = "areaCode" onChange = {handleChange}  type="text" className="areaCode" />
        <br />

        <label>rent</label>
        <input name = "rent" onChange = {handleChange}  type="text" className="rent" />
        <br />
            
        <label>bachelor</label>
        <input name = "preferredTenant" onChange = {handleChange}  type="checkbox" className="bachelor" />
        <br />

        <label>married</label>
        <input name = "bachelor" onChange = {handleChange}  type="checkbox" className="married" />
        <br />
      
        <input onClick = {()=>{ 
                  const Data = data ;
                 fetch("http://localhost:8080/houses",{
                  method:"POST" ,
                  body : JSON.stringify(Data),
                  headers :{
                    "content-type" : "application/json" ,
                  }
                } ).then(getData);
        }} type = "submit" value = "submit"/>
       </form> 
      <table className="table">
      <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
    {getdata.map((e)=>
        <tbody key = {e.id} className="houseDetails">
            <tr>
            <td className="houseId">{e.id}</td>
             <td className="houseName">{e.name}</td>
             <td className="ownersName">{e.ownerName}Year</td>
             <td className="address">{e.address}</td>
             <td className="areaCode">{e.areaCode}</td>
             <td className="rent">{e.rent}</td>
             <td className="preferredTenants">{e. preferredTenant}</td>
             <td>{e.bachelor?"Yes":"No"}</td>
             <td>{e.married?"Married":"un-Married"}</td>
             <td className="houseImage">
                  <img src={e.image} alt="house" />
                </td>
          </tr>
             </tbody>
            )}
          </table>  
        </div>
    </div>
  );
}

export default App;  

     
             
