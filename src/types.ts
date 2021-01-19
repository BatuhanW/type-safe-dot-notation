type AddPrefix<TKey extends string, Prefix> = Prefix extends string ? `${Prefix}.${TKey}` : TKey;

export type GenerateDotNotation<Schema, Prefix = null> = {
  [K in keyof Schema]: AddPrefix<`${string & K}`, Prefix> | (
    Schema[K] extends Array<any> ? never : (
      Schema[K] extends object ?
        /* recursion is allowed in conditional branches from TS 4.1 onwards */
        /* see: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types */
        GenerateDotNotation<Schema[K], AddPrefix<`${string & K}`, Prefix>> :
        never
    )
  );
}[keyof Schema];
