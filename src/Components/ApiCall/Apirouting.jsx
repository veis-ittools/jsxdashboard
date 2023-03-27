import React from 'react'
import BIapicall from '../ApiCall/BIapicall';
import Apitest from '../ApiCall/Apitest';
import SAPApicall from './SAPApicall';

function Apirouting(props) {

  let apiparams2 = props.apiparams2
  console.log('api routing block----', apiparams2)
  let datasource = apiparams2.datasource
  console.log('api routing block----', datasource)



  // return (
  //   <div>
  //     Apirouting

  //   </div>
  
  // )

  if (datasource === 'BI') {
    return (
    // <div>
    //   <BIapicall apiparams2={apiparams2} ></BIapicall>
    // </div> 
      <div>
        <SAPApicall apiparams2={apiparams2} ></SAPApicall>
      </div>
    

    );
  }
  return <Apitest apiparams2={apiparams2}  ></Apitest> ;


  // }

}
export default Apirouting