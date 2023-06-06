import Card from "../Card/Card";
import { useSelector} from "react-redux";
import styles from "./Cards.module.css"


const Cards = ({CountriesToFilt}) => {

    const allCountriesByName = useSelector((state) => state.AllCountriesByName);
  // const CountriesToFilt = useSelector((state) => state.CountriesToFilt)

  let countriesFilter = []

  if(allCountriesByName.length){
    countriesFilter = allCountriesByName
  } else {
    countriesFilter = CountriesToFilt
  }



  return (
    <div className={styles.cards}>
      {countriesFilter && countriesFilter.map((country) => {
        return (
          <Card 
          name={country.name} 
          id={country.id}
          image={country.image}
          continent={country.continent}
          capital = {country.capital}
          subregion = {country.subregion}
          area = {country.area}
          population={country.population}
          />
        );
      })}
    </div>
  );
};

export default Cards
