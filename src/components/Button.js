import React, { Component } from 'react';

const Button = props => {
    return(
        <div style={styles.button}>
     {props.title}
      </div>
    )
}

export default Button
const styles ={
    button:{
        display:'flex', fontFamily: 'Poppins',backgroundColor: 'orange', padding: 16, paddingLeft: 50, paddingRight: 50, color: '#fff', borderRadius: 30, marginLeft: 80, padding: '10px', border: 20
        }
}