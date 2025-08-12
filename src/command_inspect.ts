import type { State } from "./state.js";

export async function commandInspect(state: State, ..._args: string[]): Promise<void>  {
  if (_args.length === 0) {
    console.log("Usage: inspect <pokemon-name>");
    return;
  }
  const pokemonName = _args[0];
  const pokemon = state.pokedex[pokemonName];
  if (!pokemon) {
    console.log("you have not caught that pokemon");
    return;
  }
  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);
  console.log("Stats:");
  for (const stat of pokemon.stats) {
    console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
  }
  console.log("Types:");
  for (const type of pokemon.types) {
    console.log(`  - ${type.type.name}`);
  }
}
