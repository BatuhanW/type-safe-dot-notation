import type { FlattenedWithDotNotation } from "./types";

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

/**
 * get() function with correct return type
 */
function get<T, TPath extends keyof FlattenedWithDotNotation<T> & string>(
  target: T,
  path: TPath
) {
  // quick-and-dirty deep getter in JS
  return path.split('.').reduce((current: unknown, key) => {
    return current && typeof current === 'object' && (current as any)[key];
  }, target) as FlattenedWithDotNotation<T>[TPath];
}

const value00 = get(exampleSchema, "key00.key13"); // type: number
const value001424 = get(exampleSchema, "key00.key14.key24"); // type: { key31: string; key32: string[]; key33: number; }
const invalidKey = get(exampleSchema, "key999"); // errors
