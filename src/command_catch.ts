import type { State } from "./state.js";

export async function commandCatch(state: State, ..._args: string[]): Promise<void>  {
  if (_args.length === 0) {
    console.log("Usage: catch <pokemon-name>");
    return;
  }
  const pokemonName = _args[0];
  console.log(`Throwing a Pokeball at ${pokemonName}...`);
  try {
    const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);
    // Use base_experience to determine catch chance
    const baseExp = pokemon.base_experience || 50;
    // Lower base experience = easier to catch
    // Clamp chance between 0.2 and 0.85
    const catchChance = Math.max(0.2, Math.min(0.85, 1 - baseExp / 400));
    if (Math.random() < catchChance) {
      if (!state.pokedex[pokemonName]) {
        state.pokedex[pokemonName] = pokemon;
        console.log(`${pokemonName} was caught!`);
        console.log("You may now inspect it with the inspect command.");
      } else {
        console.log(`${pokemonName} is already in your Pokedex!`);
      }
    } else {
      console.log(`${pokemonName} escaped!`);
    }
  } catch (e) {
    console.error((e as Error).message);
  }
}
