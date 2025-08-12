import type { State } from "./state.js";

export async function commandExplore(state: State, ..._args: string[]): Promise<void>  {
  if (_args.length === 0) {
    throw new Error("Please provide a location name to explore.");
  }
  const locName = _args[0];

  const location = await state.pokeAPI.fetchLocation(locName);
  console.log(`Exploring ${location.name}...`);
  if( !location.pokemon_encounters || location.pokemon_encounters.length !== 0) {
    console.log("Found Pokemon:");
    for (const loc of location.pokemon_encounters) {
      console.log(" - ", loc.pokemon.name);
    }
  }
}
