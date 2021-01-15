### Type-safe dot-notation

```typescript
  import type { GenerateDotNotation } from "./types";

  const exampleSchema = {
    key00: {
      key11: "foo",
      key12: ["foo", "bar"],
      key13: 44,
      key14: {
        key21: "foo",
        key22: ["foo", "bar"],
        key23: 44,
        key24: {
          key31: "foo",
          key32: ["foo", "bar"],
          key33: 44,
        },
      },
    },
    key01: "foo",
    key02: ["foo", "bar"],
    key03: 44,
  };

  const key00: GenerateDotNotation<typeof exampleSchema> = "key00";
  const key0011: GenerateDotNotation<typeof exampleSchema> = "key00.key11";
  const key0012: GenerateDotNotation<typeof exampleSchema> = "key00.key12";
  const key0013: GenerateDotNotation<typeof exampleSchema> = "key00.key13";
  const key0014: GenerateDotNotation<typeof exampleSchema> = "key00.key14";
  const key001421: GenerateDotNotation<typeof exampleSchema> = "key00.key14.key21";
  const key001422: GenerateDotNotation<typeof exampleSchema> = "key00.key14.key22";
  const key001433: GenerateDotNotation<typeof exampleSchema> = "key00.key14.key23";
  const key001424: GenerateDotNotation<typeof exampleSchema> = "key00.key14.key24";
  const key00142431: GenerateDotNotation<typeof exampleSchema> = "key00.key14.key24.key31";
  const key00142432: GenerateDotNotation<typeof exampleSchema> = "key00.key14.key24.key32";
  const key00142433: GenerateDotNotation<typeof exampleSchema> = "key00.key14.key24.key33";
  const key01: GenerateDotNotation<typeof exampleSchema> = "key01";
  const key02: GenerateDotNotation<typeof exampleSchema> = "key02";
  const key03: GenerateDotNotation<typeof exampleSchema> = "key03";

  const invalidKey: GenerateDotNotation<typeof exampleSchema> = "";
```
