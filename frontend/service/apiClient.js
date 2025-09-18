

class ApiClient{

    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1",
        this.defaultHeaders = {
            "Content-Type" : 'application/json',
            Accept : 'application/json'
        };
     }

     async customFetch(endpoint , options = {}) {
        try{

            const url = `${this.baseUrl}${endpoint}`;
            const headers = {...this.defaultHeaders , ...options.headers}
            const config = {
                ...options ,
                headers,
                Credentials : 'include'
            }

            console.log(`Fetching : ${url}`);

            const response = await fetch(url , config);
            const  data = await response.json();

            return data;

        }catch(error){
            console.error("Api call error " , error);
            throw error

        }
     }


     //Auth endpints

     async signup(name , email ,password){
        return this.customFetch("/users/signup",{
            method: "POST",
            body : JSON.stringify({name , email , password})
        });
     }

     
     async login( email ,password){
        return this.customFetch("/users/login",{
            method: "GET",
            body : JSON.stringify({email , password})
        });
     }

     
     async logout( email ,password){
        return this.customFetch("/users/logout",{
            method: "GET",
            body : JSON.stringify({email , password})
        });
     }

     async getProfile(){
        return this.customFetch("/users/me");
     }


     
     




     



}
 

const apiClient = new ApiClient();


export default apiClient;