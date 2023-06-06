import {NavLink} from "react-router-dom"
import styles from "./Card.module.css"


const Card = (props)=>{

    return(
        
        <div className={styles.CardContainer}>
            
            <NavLink to={`/detail/${props.id}`} className={styles.navLink} >
            <div className={styles.nameContainer}>
                <h2 className={styles.name}>{props.name}</h2>
                <h3 className={styles.continent}>{props.continent}</h3>
            </div>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={props.image} alt="" />
                </div>
            </NavLink>
        </div>
    )
}

export default Card;
