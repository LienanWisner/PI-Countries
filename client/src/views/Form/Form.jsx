import { useState, useEffect} from "react"
import { useDispatch} from "react-redux"
import { AllCountriesByName, cleanDB, postActivity } from "../../redux/actions"
import CardsForm from "./CardsForm/CardsForm"
import Validate from "./validation"
import styles from "./Form.module.css"


const Form = ()=>{

    const dispatch = useDispatch()
    
    const [ActivityData, setActivityData] = useState({
        name : "",
        difficulty : null,
        duration : null,
        season : "",
        countryName : []
    })

    const [selectedCountries, setSelectedCountries] = useState([])

    const [errors, setErrors] = useState({})


    const handleName = (event)=>{
        setActivityData({...ActivityData, [event.target.name]: event.target.value})
        setErrors(Validate({...ActivityData, [event.target.name]: event.target.value}))
    }

    const handleDifficulty = (difficulty)=>{
        setActivityData({...ActivityData, [difficulty.target.name] : difficulty.target.value})
    }

    const handleDuration = (duration)=>{
        setActivityData({...ActivityData, [duration.target.name] : duration.target.value})
        setErrors(Validate({...ActivityData, [duration.target.name]: duration.target.value}))
    }

    const handleSeason = (season) =>{
        setActivityData({...ActivityData, [season.target.name] : season.target.value})
        setErrors(Validate({...ActivityData, [season.target.name] : season.target.value}))
    }

    const handleCountryName = (search)=>{
        if(!search.target.value){
            dispatch(cleanDB())
        } else dispatch(AllCountriesByName(search.target.value))
        setErrors(Validate({...ActivityData, [search.target.name]: search.target.value}))        
    }
    
    const handleClickCards = (country)=>{
        if(ActivityData.countryName.includes(country)){
            setActivityData({...ActivityData})
        } else setActivityData({...ActivityData, countryName : [...ActivityData.countryName, country]})

        if(selectedCountries.includes(country)){
            setSelectedCountries([...selectedCountries])
        } else setSelectedCountries([...selectedCountries, country])
    }
        
    const handleSubmit = (event)=>{
        event.preventDefault()
        dispatch(postActivity(ActivityData))
        setActivityData({
            name : "",
            difficulty : "",
            duration : "",
            season : "",
            countryName : []
        })
         setSelectedCountries([])
    }
        
        
        useEffect(()=>{
            return()=> dispatch(cleanDB)
        },[ActivityData.countryName])



    // useEffect(() => {
    //     console.log(selectedCountries);
    //   }, [selectedCountries]);

    //   useEffect(() => {
    //     console.log(ActivityData);
    //   }, [ActivityData]);
    
      

    return(
        <div className={styles.container} >
        <form className={styles.form}>
            

            <div className={styles.activityContainer}>
                <label htmlFor="name" className={styles.activityName} >Activity Name:  </label>
                <input name="name" type="text" value={ActivityData.name} onChange={handleName} required autoComplete="off" className={styles.writeName}/>
            </div>
                <p>{errors.name}</p>
            <div className={styles.difficultyContainer}>
                <label htmlFor="difficulty" className={styles.activityName}>Difficulty: </label>
                
                <input type="range" name="difficulty" min={1} max={5} value={ActivityData.difficulty} onChangeCapture={handleDifficulty} required></input>
                <span>{ActivityData.difficulty}</span>
            </div>
            <div className={styles.durationContainer}>
                <label htmlFor="duration" className={styles.activityName}>Duration: (in hours)</label>
                <input type="number" name="duration" value={ActivityData.duration} min={1} max={24} onChange={handleDuration} required className={styles.writeName}/>

            </div>
                <p>{errors.duration}</p>
            <div className={styles.seasonContainer}>
                <label htmlFor="season" className={styles.activityName}>Season: </label>
                <select name="season" onChange={handleSeason} required className={styles.writeName} value={ActivityData.season} >
                    <option value= "0" >Select season</option>
                    <option value="Summer">Summer</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                </select>
            </div>
                <p>{errors.season}</p>

            <div className={styles.countries}>

                <div className={styles.countryNameContainer}>
                    <label htmlFor="countryName" className={styles.activityName}>Search Country: </label>
                    
                    <input type="search" name="countryName"  onChange={handleCountryName} autoComplete="off" maxLength={15} required className={styles.writeName}/>
                    <span><CardsForm  onClick={handleClickCards} /></span>
                </div>

                <div className={styles.selectedCountries}>
                    <label htmlFor="" className={styles.activityName}>Selected Countries: </label>
                        <div className={styles.eachCountry}>

                        {selectedCountries.length > 0 && selectedCountries.map((country, key)=>{
                            return(
                                <p key={key} className={styles.p}>{country}</p>               
                            )
                        }) }
                        </div>
                </div>
            </div>


                <p>{errors.countryName}</p>
            <button className={styles.createActivity}  disabled={!ActivityData.name || !ActivityData.duration || !ActivityData.countryName || errors.name || errors.duration || errors.countryName || errors.season} onClick={handleSubmit}>¡Create Activity!</button>
           

        </form>
        </div>
    )
}

export default Form