import type { State } from "./state.js";

export async function commandPokedex(state: State, ..._args: string[]): Promise<void>  {
  if (_args.length > 0) {
    console.log("Usage: pokedex");
    return;
  }
  if (Object.keys(state.pokedex).length === 0) {
    console.log("You have not caught any pokemon yet.");
    return;
  }
  console.log("Your Pokedex:");
  for (const [name] of Object.entries(state.pokedex)) {
    console.log(`- ${name}`);
  }

}
