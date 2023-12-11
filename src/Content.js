
import './App.css';
import Listitem from './Listitem';
function Content({item,handlecheck,handledelete,count}) {


    return (

        <>
<Listitem
 item={item}

 handlecheck={handlecheck}
 handledelete={handledelete}

/>

           

        </>
    )



}

Content.defaultProps = {


}
export default Content;