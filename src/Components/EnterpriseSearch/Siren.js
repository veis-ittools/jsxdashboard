import React, {useEffect, useState} from 'react'
import Datagrid from './Datagrid'
import axios from "axios";

// const baseURL = "https://navik.veis-ittools.fr:5900/FR/Regions/";
// const baseURL = "https://navik.veis-ittools.fr:5900/FR/enterprise/data/391635844"

function Siren(props) {
  
  let sirenvar =props.sirenvar
  let baseURL = `https://navik.veis-ittools.fr:5900/FR/enterprise/data/${sirenvar}`

  console.log(baseURL)



  const [apiresponse, setApiresponse] = useState(null)
  
  useEffect(() => {
    axios.post(baseURL).then((response) => {
      setApiresponse(response.data);
      console.log(response.data)
    });
  }, []);

  if (!apiresponse) return null;

  return (
    <div>
      <div>
        {apiresponse.INSEE.map(item => 
          <div>
            <p>{item.Name} -  {item.Département} - {item.Région} - {item.SIREN}</p>
          </div>
        )}
      </div>


    </div>


  );
  // return (
  //   <div>
  //     <h3>entered siren is {sirenvar} </h3>
  //     <div>
  //     <h1>{apiresponse.title}</h1>
  //     <p>{apiresponse.body}</p>
  //   </div>
  //   </div>
  // )
}




export default Siren
