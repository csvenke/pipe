type AnyFunction = (arg: any) => any;

type Lookup<T, K extends keyof any, Else = never> = K extends keyof T
  ? T[K]
  : Else;

type Tail<T extends any[]> = ((...t: T) => void) extends (
  x: any,
  ...u: infer U
) => void
  ? U
  : never;

type ArgType<F, Else = never> = F extends (arg: infer A) => any ? A : Else;

type AsChain<
  F extends [AnyFunction, ...AnyFunction[]],
  G extends AnyFunction[] = Tail<F>
> = {
  [K in keyof F]: (arg: ArgType<F[K]>) => ArgType<Lookup<G, K, any>, any>;
};

type LastIndexOf<T extends AnyFunction[]> = ((...x: T) => void) extends (
  y: any,
  ...z: infer U
) => void
  ? U["length"]
  : never;

export default function pipe<F extends [AnyFunction, ...AnyFunction[]]>(
  ...f: F & AsChain<F>
): (arg: ArgType<F[0]>) => ReturnType<F[LastIndexOf<F>]>;
