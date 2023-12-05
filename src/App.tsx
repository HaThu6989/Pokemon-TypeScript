import React, {useEffect, useState} from 'react';
import Pokemon from './entities/pokemon';
import fetchPokemon from './utils/fetchPokemon';
import ChoosePokemon from './components/ChoosePokemon';
import './App.css';

function App() {
  const [firstPokemon, setFirstPokemon] = useState<Pokemon | null>(null)
  const [secondPokemon, setSecondPokemon] = useState<Pokemon | null>(null)
  const [pokemonInput1, setPokemonInput1] = useState<number | null>(null);
  const [pokemonInput2, setPokemonInput2] = useState<number | null>(null);

  const validate = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  
  const pokemon1Input = form.querySelector('#pokemon1') as HTMLInputElement;
  const pokemon2Input = form.querySelector('#pokemon2') as HTMLInputElement; 

  fetchPokemon(Number(pokemon1Input.value))
      .then(response => {
        setFirstPokemon(response[0]?.forms[0])
  })
  fetchPokemon(Number(pokemon2Input.value))
    .then(response => {
      setSecondPokemon(response[0]?.forms[0])
    }
  )
}
console.log('firstPokemon.image', firstPokemon)
  return (
    <div className="App">
        <ChoosePokemon validate={validate}/>
        {firstPokemon ? (<p>{firstPokemon.name}</p>) : (<p>Erreur lors du chargement des données</p>)}
        {secondPokemon ? <p>{secondPokemon.name}</p> : <p>Erreur lors du chargement des données</p>}
        <img src={firstPokemon ? firstPokemon.image : undefined} alt="" />
    </div>
  );
}


export default App;
