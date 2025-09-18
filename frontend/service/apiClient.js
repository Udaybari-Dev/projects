

class ApiClient{

    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1",
        this.defaultHeaders = {
            "Content-Type" : 'application/json',
            Accept : 'application/json'
        };
     }

     async customFetch(ennpoint , option = {}) {
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

            


             

        }catch(error){
            console.error("Api call error " , error);
            throw error

        }
     }




}
 