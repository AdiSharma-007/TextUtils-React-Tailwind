import React from 'react'

export default function Alert(props){
        const capitalize=(word)=>{
        const cap=word.charAt(0).toUpperCase()+word.slice(1);
        return cap;
    }

   

    return(
       <div style={{height:"60px"}}>
         { props.alert &&<div className=" flex items-center w-full bg-green-100 text-blue-900 border-2 border-green-300  px-4 py-4 rounded-md  shadow-md">
      <strong className='mr-1'>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
    </div>}
        </div>
    );
}