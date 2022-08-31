import axios from "axios";

const BASE_URL2 = 'https://localhost:44324/api/';



export const ENDPIONTS2 = {
    ADDPROPERTY:'Property'
}

export const createAPIEndpoint2 = endpoint => {

    let url2 = BASE_URL2 + endpoint + '/';
    
    return {
        fetchAll: () => axios.get(url2),
        fetchById: id => axios.get(url2 + id),
        create: newRecord => axios.post(url2, newRecord),
        update: (id, updatedRecord) => axios.put(url2 + id, updatedRecord),
        delete: id => axios.delete(url2 + id)
    }
}