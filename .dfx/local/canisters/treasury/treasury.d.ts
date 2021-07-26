import type { Principal } from '@dfinity/agent';
export default interface _SERVICE {
  'addICP' : (arg_0: bigint) => Promise<[string, boolean]>,
  'burnSDR' : (arg_0: bigint) => Promise<[string, boolean]>,
  'getMinCollateralRatio' : () => Promise<number>,
  'get_ICP_Supply' : () => Promise<bigint>,
  'get_SDR_Supply' : () => Promise<bigint>,
  'init' : () => Promise<undefined>,
  'mintSDR' : (arg_0: bigint) => Promise<[string, boolean]>,
  'removeICP' : (arg_0: bigint) => Promise<[string, boolean]>,
};