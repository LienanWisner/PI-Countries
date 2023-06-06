import { useSelector } from "react-redux"


let Validate = (ActivityData)=>{
    

    const error = {}
    if(!ActivityData.name){
        error.name = "Please add an activity name"
    } else if(ActivityData.name.length > 20){
        error.name = "Activities name can not be too long"
    } else if(/\d/.test(ActivityData.name)){
        error.name = "Activities name can not contain numbers"
    } else error.name=""
    
    if(ActivityData.duration < 1){
        error.duration = "Duration can not be less than 1 hour"
    } else if( ActivityData.duration > 24){
        error.duration = "Duration can not be more than 24 hours"
    } else error.duration= ""

    if(/\d/.test(ActivityData.countryName)){
        error.countryName = "Countries can not contain numbers"
    } else if(!ActivityData.countryName){
        error.countryName = "Please asign countries to your activity"
    } else error.countryName = ""

    if(ActivityData.season === "0"){
        error.season = "Please select season"
    } else error.season = ""
    
    
    return error
}

export default Validate