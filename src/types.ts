type LevelOne<Schema> = {
  [K in keyof Schema]: `${string & K}` | LevelTwo<Schema, K>;
}[keyof Schema];

type LevelTwo<Schema, K extends keyof Schema> = {
  [L in keyof Schema[K]]: Schema[K] extends Array<any>
    ? never
    : Schema[K] extends object
    ? `${string & K}.${string & L}` | LevelThree<Schema, K, L>
    : never;
}[keyof Schema[K]];

type LevelThree<Schema, K extends keyof Schema, L extends keyof Schema[K]> = {
  [M in keyof Schema[K][L]]: Schema[K][L] extends Array<any>
    ? never
    : Schema[K][L] extends object
    ? `${string & K}.${string & L}.${string & M}` | LevelFour<Schema, K, L, M>
    : never;
}[keyof Schema[K][L]];

type LevelFour<Schema, K extends keyof Schema, L extends keyof Schema[K], M extends keyof Schema[K][L]> = {
  [N in keyof Schema[K][L][M]]: Schema[K][L][M] extends Array<any>
    ? never
    : Schema[K][L][M] extends object
    ? `${string & K}.${string & L}.${string & M}.${string & N}` | LevelFive<Schema, K, L, M, N>
    : never;
}[keyof Schema[K][L][M]];

type LevelFive<
  Schema,
  K extends keyof Schema,
  L extends keyof Schema[K],
  M extends keyof Schema[K][L],
  N extends keyof Schema[K][L][M]
> = {
  [O in keyof Schema[K][L][M][N]]: Schema[K][L][M][N] extends Array<any>
    ? never
    : Schema[K][L][M][N] extends object
    ? `${string & K}.${string & L}.${string & M}.${string & N}.${string & O}`
    : never;
}[keyof Schema[K][L][M][N]];

export type GenerateDotNotation<Schema> = LevelOne<Schema>;
