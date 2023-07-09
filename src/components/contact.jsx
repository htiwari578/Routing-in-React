import React from 'react';

    const Contact =({email ,address})=>{
    
        // const {email, address} = this.props.contact;

    
    
    return (
        <div className ="container ">
                 <h4>Welcome to the Contact Page</h4>
                <h6>Email :{email}</h6>
                <h6>address : {address}</h6>
                
            </div>
        )};
    
    


export default Contact;