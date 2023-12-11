const request=async(url="",option=null,errMsg=null)=>{


try{
const response=await fetch(url,option) ;
if(!response.ok) throw Error("Please Reload the App")


}
catch(err){
errMsg=err.Message
}
finally{
return errMsg;

}  



}
export default request