import React from "react"

import Layout from "../components/Layout"
import {ExampleButton} from "../components/button"
export default ()=> (
   <div>
     <Layout >
     <h1 style={{color:"red",textTransform:"uppercase"}}>Home page
     </h1>
     <ExampleButton>
       click here
     </ExampleButton>
     </Layout>
     
     </div>
  
)
