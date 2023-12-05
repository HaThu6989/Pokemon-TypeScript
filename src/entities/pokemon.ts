interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
  stats: any[];
}

export default class Pokemon {
  private _name: string;
  private _image: string;
  private _types: string[];
  private _stats: any[];
  private _life: number;

  constructor(private _data: PokemonData[]) {
    this.init(_data);
    this._name = "";
    this._image = "";
    this._types = [];
    this._stats = [];
    this._life = 0;
  }

  init(pokemon: PokemonData[]) {
    this._name = pokemon[0].name;
    this._image = pokemon[0].sprites.front_default;
    this._types = pokemon[0].types.map(
      (type: { type: { name: string } }) => type.type.name
    );
    this._stats = pokemon[0].stats;
    this._life = this._stats[0].base_stat;
  }

  get name(): string {
    return this._name;
  }

  get image(): string {
    return this._image;
  }

  get types(): string[] {
    return this._types;
  }

  get stats(): any[] {
    return this._stats;
  }

  get life(): number {
    return this._life;
  }
}
