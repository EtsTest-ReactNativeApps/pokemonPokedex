import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import Home from './components/home';
import Favorites from './components/favorites';
import FavoritesNav from './components/favoritesNav';
import HomeNav from './components/homeNav';
import Footer from './components/footer';


const Loading = () => {
  return (
      <View style={{justifyContent:'center', alignContent:'center', flex: 1}}>
          <ActivityIndicator size='large' color='#0000ff'/>
      </View>
  )
}

class Pokemon{
  constructor(name, id, supertype, subtype, evolvesFrom, hp, releaseDate, rarity, pokedexNum, imageUrl, liked) {
    this.name = name;
    this.id = id;
    this.supertype = supertype;
    this.subtype = subtype;
    this.evolvesFrom = evolvesFrom;
    this.hp = hp;
    this.releaseDate = releaseDate;
    this.rarity = rarity;
    this.pokedexNum = pokedexNum;
    this.imageUrl = imageUrl;
    this.liked = liked;
  }
}

export default function App() {
  const [isFavorites, setIsFavorites] = useState(false);
  const [loading, setLoading] = useState(true);

  const [allPokemon, setAllPokemon] = useState([]);
  const [favoritePokemon, setFavoritePokemon] = useState([]);

  const goToFavorites = () => {
    setIsFavorites(!isFavorites);
  }

  const handleFavorites = (pokemon) => {
    if (!pokemon.liked) {
      pokemon.liked = true;
      setFavoritePokemon([...favoritePokemon, pokemon]);

    } else {
      pokemon.liked = false;
      setFavoritePokemon(favoritePokemon.filter(thisPokemon => thisPokemon !== pokemon));
    }
  }

  useEffect(() => {
    let mounted = true;

    const getData = async () => {
        var response = await fetch("https://api.pokemontcg.io/v2/cards");
        var jsonResponse = await response.json();

        var fetchedPokemon = []

        jsonResponse.data.slice(0,100).map(pokemon => {
          var newPokemon = new Pokemon(
            pokemon.name,
            pokemon.id, 
            pokemon.supertype, 
            pokemon.subtypes[0], 
            pokemon.evolvesFrom,
            pokemon.hp,
            pokemon.set.releaseDate,
            pokemon.rarity,
            pokemon.nationalPokedexNumbers[0],
            pokemon.images.small,
            false
            )
            fetchedPokemon.push(newPokemon)
        })
        setAllPokemon(fetchedPokemon);
        if (mounted) { setLoading(false) };

    }

    getData();

    return () => {
        mounted = false;
    }

  }, []);

  if (loading) {
    return <Loading />
  }

  if (isFavorites) {
    return (
      <View style={{flex: 1}}>
        <FavoritesNav goToFavorites={goToFavorites} listLength={favoritePokemon.length}/>

        <Favorites favorites={favoritePokemon} handleFavorites={handleFavorites}/>

        <Footer />

      </View>
    )
  }

  return (
    <View style={{flex: 1}}>
      <HomeNav goToFavorites={goToFavorites} listLength={allPokemon.length}/>

      <Home allPokemon={allPokemon} handleFavorites={handleFavorites}/>

      <Footer />

    </View>
    
  );
}
