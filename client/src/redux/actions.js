import { GET_ALL_COUNTRIES, GET_ALL_COUNTRIES_BY_NAME, GET_COUNTRY_BY_ID, GET_ALL_ACTIVITIES, POST_ACTIVITY, DELETE_ACTIVITY, CLEAN_DB, ORDER_COUNTRIES, ORDER_CONTINENTS, ORDER_POBLATION, ALL} from "./actions-type";
import axios from "axios"

const endpointCountries = 'http://localhost:3001/countries';
const endpointActivities = 'http://localhost:3001/activities';

export const AllCountries = ()=>{
return (dispatch) => {
    try{
        return fetch(endpointCountries)
        .then(response=>response.json())
        .then((data) => dispatch({
           type: GET_ALL_COUNTRIES,
           payload: data,
        }));
    }
    catch(error){
        console.log("Action error: AllCountries")
    }
};
};



export const AllCountriesByName =(countryName)=>{
    return async(dispatch)=>{
        try{
            const {data} = await axios.get(`${endpointCountries}/name?name=${countryName}`)
            return dispatch({
                type: GET_ALL_COUNTRIES_BY_NAME,
                payload: data
            })
        } catch(error){
            console.log("Action error: AllCountriesByName")
        }
    }
}

export const CountryById = (countryID)=>{
    return async(dispatch)=>{
        try{
            const {data} = await axios.get(`${endpointCountries}/${countryID}`)
            return dispatch({
                type: GET_COUNTRY_BY_ID,
                payload: data
            })
        } catch(error){
            console.log("Action error: CountryById")
        }
    }
}

export const AllActivities = ()=>{
    return async(dispatch)=>{
        try{
            const {data} = await axios.get(endpointActivities)
            return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: data
            })
        } catch(error){
            console.log("Action error: AllActivities")
        }
    }
}

export const postActivity = (activity)=>{
    console.log(activity)
    return async(dispatch)=>{
        try{
            const {data} = await axios.post(endpointActivities, activity)
            console.log(data)
            return dispatch({
                type: POST_ACTIVITY,
                payload: data
            })
        } catch(error){
            console.log(error.response.data.message)
        }
    }
}

export const deleteActivity = (idAct)=>{
    return async(dispatch)=>{
        try{
            const {data} = await axios.delete(`${endpointActivities}/${idAct}`)
            return dispatch({
                type: DELETE_ACTIVITY,
                payload: data
            })
        } catch(error){
            console.log("Action error: deleteActivity")
        }
    }
}

export const cleanDB = ()=>{
    return{
        type: CLEAN_DB
    }
}

export const orderCountries = (order)=>{
    
    return{
        
        type: ORDER_COUNTRIES, payload: order
    }
}

export const orderContinents = (order)=>{
    return{
        type: ORDER_CONTINENTS, payload: order
    }
}

export const orderPoblation = (order)=>{
    return{
        type: ORDER_POBLATION, payload: order
    }
}

export const all = (value)=>{
    return{
        type: ALL, payload: value
    }
}