import type { Principal } from '@dfinity/agent';
export default interface _SERVICE {
  'checkLiquidation' : () => Promise<string>,
  'closeTrove' : (arg_0: string, arg_1: bigint) => Promise<
      [string, bigint, boolean]
    >,
  'createTrove' : (arg_0: string, arg_1: bigint, arg_2: bigint) => Promise<
      string
    >,
  'decreaseICP' : (arg_0: string, arg_1: bigint) => Promise<[string, boolean]>,
  'decreaseSDR' : (arg_0: string, arg_1: bigint) => Promise<[string, boolean]>,
  'getTroveCollateralRatio' : (arg_0: string) => Promise<
      [string, number, boolean]
    >,
  'getTroveICP' : (arg_0: string) => Promise<[string, bigint, boolean]>,
  'getTroveSDR' : (arg_0: string) => Promise<[string, bigint, boolean]>,
  'increaseICP' : (arg_0: string, arg_1: bigint) => Promise<[string, boolean]>,
  'increaseSDR' : (arg_0: string, arg_1: bigint) => Promise<[string, boolean]>,
};