import { useDispatch, useSelector } from "react-redux"
import Cards from "../../components/Cards/Cards"
import {useState, useEffect } from "react"
import styles from "./Home.module.css"
import { orderCountries, orderContinents, AllCountries, AllActivities, all, orderPoblation} from "../../redux/actions"



const Home = ()=>{
    //filter order
    
    // let [countriesSorted, setCountriesSorted] = useState("")
    
    let [currentPage, setCurrentPage] = useState(1)
    
    const dispatch = useDispatch()
    
    const handleCountriesOrder = (event)=>{
        dispatch(orderCountries(event.target.value))
        // setCountriesSorted(countriesSorted = event.target.value)
        setCurrentPage(1)
    }
    
    const handlePoblationOrder = (event)=>{
        dispatch(orderPoblation(event.target.value))
        setCurrentPage(1)
    }
    
    const handleContinent = (event)=>{
        dispatch(orderContinents(event.target.value))
        setCurrentPage(1)
    }
    
    const handleAll = (event)=>{
        dispatch(all(event.target.value))
        setCurrentPage(1)
    }
    
    
    
    
    //paginado
    
    const countriesPerPage = 10
    const countriesToFilt = useSelector((state)=> state.CountriesToFilt)
    
    
    
    const lastIndex = currentPage * countriesPerPage
    const firstIndex = lastIndex - countriesPerPage
    let currentCountries = countriesToFilt.slice(firstIndex, lastIndex)
    
    const total = Math.ceil(countriesToFilt.length / 10) 

    const nextHandler = ()=>{
        if(currentPage < total){
            const nextPage = currentPage + 1
            setCurrentPage(nextPage)
        } else return;
    }
    
    const prevHandler = () =>{
        if(currentPage > 1){
            const prevPage = currentPage - 1
            setCurrentPage(prevPage)
        } else return;
    }
    
    useEffect(()=>{
        dispatch(AllCountries())
        dispatch(AllActivities()) 
    }, [])

    return(
        <>
            <div className={styles.home}>
                <div className={styles.AlphabeticalOrder}>
                    <h4>Order by name</h4>
                <label htmlFor="All">
                <input type="radio" id="All" value="All" name="orderName" onClick={handleAll}></input>
                - All -</label>
                <label htmlFor="Ascendent">
                <input type="radio" id="Ascendent" value="A" name="orderName" onClick={handleCountriesOrder}></input>
                Ascendent (A - Z)</label>
                <label htmlFor="Descendent">
                <input type="radio" id="Descendent" value="D" name="orderName" onClick={handleCountriesOrder}/>
                Descendent (Z - A)</label>
                </div>

                <div className={styles.poblation}>
                    <h4>Order by poblation</h4>
                    <label htmlFor="PoblationAll">
                        <input type="radio" id="PoblationAll" value="All" name="orderPoblation" onClick={handleAll} ></input>
                        - All -</label>
                    <label htmlFor="Highest">
                        <input type="radio" id="Highest" value="D" name="orderPoblation" onClick={handlePoblationOrder}/>
                        Highest</label>
                    <label htmlFor="Lowest">
                        <input type="radio" id="Lowest" value="A" name="orderPoblation" onClick={handlePoblationOrder}></input>
                        Lowest</label>
                </div>

                <div className={styles.continents}>
                    <label htmlFor="continent">Sort by Continent: </label>
                        <select name="continent" className={styles.select} onChange={handleContinent}>
                            <option value="All">- All -</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">Americas</option>
                            <option value="Antarctic">Antarctic</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                </div> 

            <div className={styles.paginate}>
                <div className={styles.buttons}>
            <button onClick={prevHandler} className={styles.prev}>Prev</button>
            <button onClick={nextHandler} className={styles.next}>Next</button>
            </div>
            <span>{`${currentPage} / ${total}`}</span>
            </div>
            </div>
                <Cards CountriesToFilt = {currentCountries}/>
                
                
        </>
    )
}

export default Home