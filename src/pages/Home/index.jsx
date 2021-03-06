import { Helmet } from 'react-helmet'
import './style.css'
// ATOMS
import { Button } from '../../components/atoms'

export default function Home(){
   return(
      <div>
         <Helmet>
            <title>Blanja - Home</title>
         </Helmet>
         <div className="displayColumn inDevelopment">
            <h1>Home - In Development</h1>
            <Button cls="loginBtn" btnClr="#273AC7" ftClr="white" val="Home"/>
         </div>
      </div>
   )
}