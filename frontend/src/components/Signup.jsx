import { useState } from "react";
import apiClient from "../../service/apiClient";
import { useNavigate } from "react-router";


function  Signup() {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState("testedge");

    //for nav use hook useNavigate 
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // make a api call to backend with data
        // get response from backend 
        // take action based on response 

        try {
            console.log(`trying to do signup `);
            const data = await apiClient.signup(name , email ,password);

            console.log("Signup response" , data);

            if(data.success){
                navigate('/login');
            }else{
                setError(data.massage || 'Signup-failed');
            }
            
        } catch (error) {
            console.log("Signup failed" , error);
             
        }


    };

 
    return(
        <div className="signup">
          <h1>Welcome to Signup page</h1>

          {error && <div> Error : {error}</div>}

          <form onSubmit = {handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name :</label>
                <input 
                type="text"
                name ="name"
                id ="name"
                value = {name} // showed in input field
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input 
                type="email"
                email ="email"
                id ="name"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password :</label>
                <input 
                type="password"
                password ="password"
                id ="password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            {/*conditional rendering */}
                
            <button
            type="submit"
            disabled= {loading}
            >{ loading ? 'Singup....' : 'Singup'}</button>


          </form>
        </div>
    )

}


export default Signup;
