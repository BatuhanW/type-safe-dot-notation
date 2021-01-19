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

type DotNotation = GenerateDotNotation<typeof exampleSchema>;

const key00: DotNotation = "key00";
const key0011: DotNotation = "key00.key11";
const key0012: DotNotation = "key00.key12";
const key0013: DotNotation = "key00.key13";
const key0014: DotNotation = "key00.key14";
const key001421: DotNotation = "key00.key14.key21";
const key001422: DotNotation = "key00.key14.key22";
const key001433: DotNotation = "key00.key14.key23";
const key001424: DotNotation = "key00.key14.key24";
const key00142431: DotNotation = "key00.key14.key24.key31";
const key00142432: DotNotation = "key00.key14.key24.key32";
const key00142433: DotNotation = "key00.key14.key24.key33";
const key01: DotNotation = "key01";
const key02: DotNotation = "key02";
const key03: DotNotation = "key03";

const invalidKey: DotNotation = "";
