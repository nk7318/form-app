import { useState } from "react";
import "./App.css";

function App() {
  const[formData, setFormData] = useState({
    firstName:"",lastName:"", email:"",country:"India",streetAddress:"",city:"",state:"",postalCode:"",
    comments:false, candidate:false, offers:false,pushNotification:""
  })
  function changeHandler(event) {
    const{name, value, checked, type}= event.target;
    setFormData( (prev) => ({...prev, [name]: type === "checkbox" ? checked:value}))
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("finally printing the form data");
    console.log(formData)
  }
  return (
   <div className="flex flex-col items-center w-[50%] bg-white bg-origin-content mx-auto drop-shadow-xl">
        <form onSubmit={submitHandler}>
        <label htmlFor="firstName" className="">First Name</label>
        <br/>
        <input
          type="text"
          name="firstName"
          placeholder="Nitesh"
          value={formData.firstName}
          onChange={changeHandler}
          className=" outline-offset-1 outline-blue-400 w-[500px] rounded-sm mt-1"
        />
        <br/>
        
        <label htmlFor="LastName">Last Name</label>
        <br/>
        <input
          type="text"
          name="lastName"
          placeholder="Kumar"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline outline-offset-1 outline-blue-400 w-[500px] rounded-sm mt-1"
        />
        <br/>
        
        <label htmlFor="email">Email Address</label>
        <br/>
        <input
          type="text"
          name="email"
          placeholder="Nitesh@abcd.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline outline-offset-1 outline-blue-400 w-[500px] rounded-sm mt-1"
        />
        <br/>
        <label htmlFor="country">Country</label>
        <br/>
        <select 
        name="country"
        id="country"
        className="outline outline-offset-1 outline-blue-400 w-[500px] rounded-sm mt-1"
        value={formData.country}
        onChange={changeHandler}>
        
        <option>India</option>
        <option>United State</option>
        <option>Canada</option>
        <option>Mexico</option>

        </select>

        <br/>
        <label htmlFor="streetAddress">Street Address</label>
        <br/>
        <input
          type="text"
          name="streetAddress"
          placeholder="BNCET-0"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline outline-offset-1 outline-blue-400 w-[500px] rounded-sm mt-1"
        />
        
        <br/>
        <label htmlFor="city">City</label>
        <br/>
        <input
          type="text"
          name="city"
          placeholder="Bakshi ka talab"
          value={formData.city}
          onChange={changeHandler}
          className="outline outline-offset-1 outline-blue-400 w-[500px] rounded-sm mt-1"
        />
        <br/>
        <label htmlFor="state">State/ Province</label>
        <br/>
        <input
          type="text"
          name="state"
          placeholder="Uttar Pardesh"
          value={formData.state}
          onChange={changeHandler}
          className="outline outline-offset-1 outline-blue-400 w-[500px] rounded-sm mt-1"
        />
          <br/>
        <label htmlFor="postalCode">Postal Code</label>
        <br/>
        <input
          type="text"
          name="postalCode"
          placeholder="226201"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline outline-offset-1 outline-blue-400 w-[500px] rounded-sm mt-1"
        />
        
        <fieldset className="mt-4   "  >
          <legend className="font-bold">By Email</legend>
          <div className="flex space-x-4">
         
            <input type="checkbox"
             id="comments"
             name="comments"
             checked={formData.comments}
             onChange={changeHandler}
             className="">
             

            </input>
            <label htmlFor="comments" className="font-semibold">Comments</label>
            <br/>
            
            
            
             
           
          </div>
          <div className="px-7 ">
          <p>Get notified when someone post a comments on a posting.</p>
          
         </div>
         
          <div className="flex space-x-4">
            <input type="checkbox"
             id="candidate"
             name="candidate"
             checked={formData.candidate}
             onChange={changeHandler}>

            </input>
            <label htmlFor="candidate " className="font-semibold">Candidate</label>
           
          </div>
          <div className="px-7">
               
               <p className="flex-col">Get notified when someone post a comments on a posting.</p>


            </div>
          <div className="flex  space-x-4">
            <input type="checkbox"
             id="offers"
             name="offers"
             checked={formData.offers}
             onChange={changeHandler}>

            </input>
            <label htmlFor="offers" className="font-semibold">Offers</label>
            
          </div>
          <div className="px-7">
              
               <p>Get notified when someone post a comments on a posting.</p>


            </div>
          
        </fieldset>
        

        <fieldset className="mt-2">
          <legend className="font-bold">Push Notification</legend>
          <p className="font-semibold">These are deliverd via SMS to your mobile phone</p>
          <input
            type="radio"
            id="pushEverything"
            name="pushNotification"
            value="Everything"
            onChange={changeHandler}


          />
          <label htmlFor="pushEverything" className="font-medium">Everything</label>
          <br/>
          <input
            type="radio"
            id="pushEmail"
            name="pushNotification"
            value="pushEmail"
            onChange={changeHandler}


          />
          <label htmlFor="pushEmail" className="font-medium">Same as Email</label>
          <br/>
          <input
            type="radio"
            id="pushNoting"
            name="pushNotification"
            value="pushNoting"
            onChange={changeHandler}


          />
          <label htmlFor="pushNoting" className="font-medium">No Push Notification</label>
        </fieldset>
        <button 
        className="bg-blue-500 text-white font-bold rounded py-2 px-4 mt-3"
        >Save</button>



        </form>



   </div>
  );
}

export default App;
