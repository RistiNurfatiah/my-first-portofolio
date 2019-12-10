import React, { Component } from 'react';
import Background from './gambar.png';
import { Button } from './components';
import logo from './icon.svg';
class App extends Component {
    render(){
      return(
          <div style={styles.background}>
            <div style={styles.overlay}>
              <div style={styles.container}>
              <div style={{display: 'flex',justifyContent: 'space-between', width: '100%', margin: 42, color: 'white', marginLeft: 140}}>
                <div>Go Green</div>
                <img src={logo}
                style={{
                  marginRight: 20, lineHeight: '140px', width: '50px', height: '40px'
                }}/>
                </div>
                    <div style={{display: 'flex', fontWeight: 1000, fontFamily: "Poppins", fontSize: '50px', marginTop: 40, lineWeight:10, textAlign:'center',fontSize: '48px', marginLeft: '20px', marginTop: '13%', color: 'white'}}>
                         <div><b>Make it Green</b></div> 
                         </div>
                         <div style={{display: 'flex', color: 'white', lineHeight: '35px', textAlign: 'center',marginLeft:'20px', fontWeight: 20, margin: 'center', fontSize: '36px', marginTop: 20, marginRight:'30px'}}>
                        <div>Now more than ever. Our planet is need our</div>
                        </div>
                        <div style= {styles.wrapperInput}> 
                            <Button title="Do It now"/>
                        </div>
                    </div>
              </div>
            </div>
      );
    }
  }
  let w = window.innerWidth;
  let h = window.innerHeight;
const styles = {
    background: {
      display: 'flex',
      backgroundImage: `url(${Background})`,
      height: '100%',
      top: 0,
      left: 0,
      bottom: 0,
      right:0,
  }, 
  overlay: {

     height: h,
     width: '90%'
  }, 
  container: {
    display:'flex',
     flexDirection: 'column',
     alignItems: 'center',
     fontFamily: 'Poppins'
  },
  wrapperInput: {
     display: 'flex',
     alignSelf: 'center', 
     marginTop: 60,
  },
 }
  
  export default App;