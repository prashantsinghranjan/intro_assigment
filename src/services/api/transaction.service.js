import axios from '../axios'

class Transection{
    async getAllTransaction(){
       const Response=await axios.get("http://localhost:5000")
       return Response
    }
}
export const TransactionServices= new Transection()