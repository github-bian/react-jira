import React from 'react'
import {SearchPanel} from './search-panel'
import {List} from './list'
import {useEffect,useState} from 'react';
import {cleanObject,useMount,useDebounce} from '../../utils/index'
import * as qs from 'qs'

export const ProjectListScreen=()=>{
  const [users,setUsers]=useState([])
  const [param,setParam]=useState({
    name:"",
    personId:""
 })
 const debounceParam=useDebounce(param,2000)

  const [list,setList]=useState([])
  
  const url=process.env.REACT_APP_API_URL

  
  useMount(() => {
    fetch(`${url}/users`).then(async response=>{
       if(response.ok){
        setUsers(await response.json())
       }
    })
  })

  useEffect(() => { 
    console.log("param",param)
    fetch(`${url}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response=>{
       if(response.ok){
         setList(await response.json())
       }
    })
  }, [debounceParam])
    return (
      <div> 
      <SearchPanel users={users} param={param} setParam={setParam}/>
      <List list={list} users={users}/>
    </div>
    )
   
       
}

