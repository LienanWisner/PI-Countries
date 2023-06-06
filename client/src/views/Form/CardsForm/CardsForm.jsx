import CardForm from "../CardForm/CardForm";
import { useSelector } from "react-redux";


const CardsForm = ({onClick}) => {
  const allCountriesByName = useSelector((state) => state.AllCountriesByName);


  const countriesSlice = allCountriesByName.slice(0,5)

  return (
    <>
      {allCountriesByName && countriesSlice.map((country) => {
        return (
          <CardForm 
          name={country.name} 
          image={country.image}
          onClick={onClick}
          />
        );
      })}
    </>
  );
};

export default CardsForm
