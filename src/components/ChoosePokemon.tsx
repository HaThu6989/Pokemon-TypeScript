import React, {useState} from 'react'

interface ChoosePokemonProps {
    validate: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ChoosePokemon: React.FC<ChoosePokemonProps>  = ({validate}) => {
    const [pokemon1, setPokemon1] = useState<number | "">(); 
    const [pokemon2, setPokemon2] = useState<number | "">(); 

    const changePokemon1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value); 
        setPokemon1(isNaN(value) ? "" : value); 
    }
    
    const changePokemon2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value); 
        setPokemon2(isNaN(value) ? "" : value); 
    }

  return (
    <>
    <form onSubmit={validate}>
        <label>Entrez le numéro du premier pokemon
        <input min="0" type="number" id="pokemon1" value={pokemon1} onChange={changePokemon1} required/>
        </label>
        <label>Entrez le numéro du deuxième pokemon
        <input min="0" type="number" id="pokemon2" value={pokemon2} onChange={changePokemon2} required />
        </label>
        <button type="submit">Validez votre choix</button>
    </form>
    </>
  )
}

export default ChoosePokemon