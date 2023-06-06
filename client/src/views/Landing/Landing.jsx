import { NavLink} from "react-router-dom";
import styles from "./Landing.module.css"

const Landing = ()=>{
    

    return(
        <div className={styles.container}>
            <div className={styles.landing}>
                <h1>¡Welcome to Henry Countries!</h1>
            <NavLink to="/home">
                <button className={styles.home}>HOME</button>
            </NavLink>
            </div>
        </div>
    )
}

export default Landing