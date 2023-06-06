import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux"
import { useParams, NavLink } from "react-router-dom";
import { cleanDB, CountryById, deleteActivity } from "../../redux/actions";
import styles from "./Detail.module.css"

const Detail = ()=>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const countryById = useSelector((state) => state.CountryById);

    let [detailState, setDetailState] = useState("")

    const handleDelete = (event)=>{
        dispatch(deleteActivity(event.target.value))
        setDetailState(detailState = event.target.value)
    }
    
    useEffect(()=>{
        dispatch(CountryById(id))
        return () => dispatch(cleanDB())
    }, [detailState])

    return(
        <div className={styles.container}>
        
            <div className={styles.detail}>
            
            <h1>{countryById.name}</h1>
            <h2>ID: {countryById.id}</h2>
            <h3>Continent: {countryById.continent}</h3>
            <h3>Capital: {countryById.capital}</h3>
            <h3>Sub-region: {countryById.subregion}</h3>
            <h3>Area: {countryById.area}</h3>
            <h3>Population: {countryById.population}</h3>
            <img src={countryById.image} alt="" />
            </div>
            <div className={styles.activities}> 
            <h2>Activities</h2>
            <NavLink to="/activity">
                <button className={styles.activity}>Create Activity</button>
            </NavLink>
                {countryById.activitiesCountry && countryById.activitiesCountry.map((activity)=>{
                    return(
                        <div className={styles.eachActivity}> 
                        <h3>{activity.name}</h3>
                        <p>Difficulty: {activity.difficulty}</p>
                        <p>Duration: {activity.duration}</p>
                        <p>Season: {activity.season}</p>
                        <button onClick={handleDelete} value={activity.id} name="" className={styles.deleteButton}>Delete Activity</button>
                        </div>
                    )
                })}
            </div>
       
        </div>
    
    )
} 

export default Detail