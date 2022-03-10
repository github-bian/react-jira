import React from 'react'

export interface User{
  id:string;
  name:string;
  title:string;
  email:string;
}
interface SearchPanelProps{
  users: User[],
  param:{
    name:string;
    personId:string
  },
  setParam:(param:SearchPanelProps['param'])=>void;
}

export const SearchPanel=({users,param,setParam}:SearchPanelProps)=>{
  
  const handleParam=(evt:any)=>{
    console.log("evt.target.value",evt.target.value)
    console.log("...param",{...param,personId:evt.target.value})
    console.log("...param",{...param})
  setParam({
      ...param,personId:evt.target.value
  })
  }
return (
    <form >
     <div>
       <input type="text" value={param.name} onChange={evt=>setParam({
         ...param,
        name:evt.target.value
        })} />
     </div>

        {/* setParam(Object.assign({}, param, {name:evt.target.value})) */}
        {/* setParam({...param,personId:evt.target.value}) */}
     <select value={param.personId} onChange={evt=>handleParam(evt)}>

       <option value={''}>负责人</option>
      {
        users.map((user:any)=>
          <option key={user.id} value={user.id}>{user.name}</option>
        )
      }

     </select>

    </form>
  )
}