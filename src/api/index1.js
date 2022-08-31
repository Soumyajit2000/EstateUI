import axios from "axios";

const BASE_URL1 = 'https://localhost:44387/api/';



export const ENDPIONTS1 = {
    ADDEXECUTIVE:'Executive'
}

export const createAPIEndpoint1 = endpoint => {

    let url1 = BASE_URL1 + endpoint + '/';
    
    return {
        fetchAll: () => axios.get(url1),
        fetchById: id => axios.get(url1 + id),
        create: newRecord => axios.post(url1, newRecord),
        update: (id, updatedRecord) => axios.put(url1 + id, updatedRecord),
        delete: id => axios.delete(url1 + id)
    }
}