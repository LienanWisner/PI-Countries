import styles from "./CardForm.module.css"


const CardForm = (props)=>{

    return(
        <div className={styles.CardContainer} onClick={()=>{props.onClick(props.name)}}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={props.image} alt="" />
            </div>
            <div className={styles.NameContainer}>
            <span className={styles.name}>{props.name}</span>
            </div>
        </div>
    )
}

export default CardForm;
