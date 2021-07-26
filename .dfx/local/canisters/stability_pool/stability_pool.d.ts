import type { Principal } from '@dfinity/agent';
export default interface _SERVICE {
  'burn_reserve' : (arg_0: bigint) => Promise<[string, boolean]>,
  'closedTrove' : (arg_0: bigint, arg_1: bigint) => Promise<string>,
  'collect_ICP' : (arg_0: string) => Promise<bigint>,
  'create_Stability_Account' : (arg_0: string) => Promise<[string, boolean]>,
  'deposit_ICP' : (arg_0: bigint) => Promise<undefined>,
  'deposit_Reserve' : (arg_0: bigint) => Promise<undefined>,
  'deposit_SDR' : (arg_0: string, arg_1: bigint) => Promise<[string, boolean]>,
  'get_ICP' : (arg_0: string) => Promise<bigint>,
  'get_SDR' : (arg_0: string) => Promise<bigint>,
  'get_reserve_sdr_amount' : () => Promise<bigint>,
  'get_total_deposited_sdr' : () => Promise<bigint>,
  'icp_remaining' : () => Promise<bigint>,
  'sdr_to_burn_remaining' : () => Promise<bigint>,
  'totalSDR' : () => Promise<bigint>,
};