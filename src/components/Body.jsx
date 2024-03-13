import React from 'react'
import { LiaStarOfLifeSolid } from "react-icons/lia";
import { SlArrowDown } from "react-icons/sl";
import "../App.css";

const Body = () => {
  return (
    <div className='main-container'>
        <div className='input-1'>
        
            <label for="">*status:</label>
          
          <select>
            <option value="option1">active</option>
            <option value="option2">inactive</option>
          </select> 
    </div>
    <div className='input-2'>
          <h1 className='hear'>Basic Info</h1>
            <LiaStarOfLifeSolid style={{blockSize:10}}/>
            <label for="">Patient Name:</label>
         <div> 
            <input type="text" id='1' placeholder='given name' readOnly />
          <select>
            <option value="option1">mr</option>
            <option value="option2">mrs</option>
          </select> 
           </div>   
          <input type="text" id='' placeholder='Middle Age' readOnly />
          <input type='text' id='' placeholder='surname' readOnly/>
    </div>

    <div>
        <label for="name">Alias Name:</label><input type='text' id="" placeholder='Alias Name'/>
        <LiaStarOfLifeSolid style={{blockSize:10}}/> <label for="text">Gender</label> <input type='text' id='' placeholder='' ></input>
        <label for="name">Blood Type</label><input type='item' id="" placeholder='Unknown'></input>
    </div>
        <div><input type='' placeholder='+ patient image'/></div>
    <div>
        <label for="text">Age:</label><input type='number'/>
        <LiaStarOfLifeSolid style={{blockSize:10}}/><label for="date">Date of Birth</label><input type='values' id="" placeholder='D.O.B'/>
        <label for="">Marital Status:</label><input type='yes/no/married'placeholder=' '/>
        <label for="name">ID NO / PASSPORT NO.:</label> <input type='number' placeholder='nationality/military/Birth cert'/>
        <LiaStarOfLifeSolid style={{blockSize:10}}/> <label for="number">Primary Contact</label> <input type='number' placeholder='Contact'/>
        <LiaStarOfLifeSolid style={{blockSize:10}}/><label for="">Residence</label><input type='name'/>
        <label for="name">Religion:</label><input type='name' placeholder='Not Specified'/>
        <LiaStarOfLifeSolid style={{blockSize:10}}/><label for="">Nationality</label><input type=''/> 
    </div>
    <div>
        <label for="name">Occupation:</label><input type='name' placeholder='select occupation'readOnly/>
        <select>
            <option value={"option 1"}>swimming</option>
            <option value={"option 1"}>teaching</option>
        </select>
        <label for="">Knew Us Through:</label><input type='' placeholder='select knew about us through' readOnly/>
    </div>
    <div>
        <label for="name">County</label><input type='name' placeholder='Select County' readOnly/>
        <label for="name"> Constituences:</label> <input type='name' placeholder='select constituency'readOnly/>
        <label for="name">Ward</label><input type='name' placeholder='select ward' readOnly/>    
        </div>

    </div>
  )
}

export default Body;