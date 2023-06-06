import { useState} from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"
import styles from "./NavBar.module.css"
import { cleanDB,AllCountriesByName } from "../../redux/actions";



const NavBar = ()=>{   
    const dispatch = useDispatch()

    let [navState, setNavState] = useState("")

    let [barState, setBarState] = useState()
    
    const handleHome = (event)=>{
        dispatch(cleanDB())        
        setNavState(navState = event.target.name)
        setBarState("")
    }    

    const handleChange = (event)=>{
        if(!event.target.value){
            dispatch(cleanDB())
        } else dispatch(AllCountriesByName(event.target.value))
        setBarState(event.target.value)
    }

    return(
   
        <div className={styles.container}>
            <div className={styles.NavBar}>

            <NavLink to="/home">
                <button className={styles.home} onClick={handleHome} name={navState}>Home</button>
            </NavLink>
            <SearchBar handleChange={handleChange} value={barState}/>
            <NavLink to="/activity">
                <button className={styles.activity}>Create Activity</button>
            </NavLink>
            <NavLink to="/">
                <button className={styles.activity}>Exit</button>
            </NavLink>
            </div>
        </div>

    )
}

export default NavBar;