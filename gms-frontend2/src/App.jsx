
import './App.css';
import Home from './Pages/Home/Home';
import { Route,Routes,useNavigate} from 'react-router-dom';
import  Dashboard  from './Pages/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';
import Member from './Pages/Member/Member';
import { useState ,useEffect} from 'react';
import GeneralUser from './Pages/GeneralUser/GeneralUser';
import MemberDetails from './Pages/MemberDetails/MemberDetails';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    const navigate=useNavigate();
    const [isLogin,setIsLogin]=useState(false);
    
    useEffect(()=>{
        let isLoggedIn=localStorage.getItem("isLogin");
        if(isLoggedIn){
            setIsLogin(true);
            navigate('/dashboard');
       
          }else{
            setIsLogin(false)
            navigate('/');
          }

    },[localStorage.getItem("isLogin")])
    return (
    <div className="flex">
        {
            isLogin && <Sidebar />
        }
     
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/member' element={<Member/>}/>
         <Route path='/specific/:page' element={<GeneralUser/>}/>
          <Route path='/member/:id' element={<MemberDetails/>}/>
         
      </Routes>
      
     
     
    </div>
  );
}

export default App;
