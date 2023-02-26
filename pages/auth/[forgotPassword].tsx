
import { useRouter } from 'next/router';
import style from './[forgotPassword].module.scss';

const forgotPassword = ()=>{
  const {query} = useRouter()
  console.log(query.token);
  
    return(
       <div>
       </div>
    )
}
export default forgotPassword;