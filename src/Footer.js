import React from "react"

function Footer({count}) {
 let year = new Date();

 
   return (
    <footer>
     
     
{count}  list of  {count===1?'item':"items"}<br/>
Copyright-{year.getFullYear()}
      
     </footer>
  )
}

Footer.defaultProps={

  count:"Error"
}
export default Footer;