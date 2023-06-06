import styles from "./SearchBar.module.css"

 const SearchBar = ({handleChange, value}) =>{

    return(
        <div >
            <input type="text" value={value} onChange={handleChange} placeholder="Search country..." className={styles.input} />
        </div>
    )
 }

 export default SearchBar