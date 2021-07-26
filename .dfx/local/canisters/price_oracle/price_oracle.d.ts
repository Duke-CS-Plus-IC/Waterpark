import type { Principal } from '@dfinity/agent';
export default interface _SERVICE {
  'get_icp_to_sdr' : () => Promise<number>,
  'update_icp_to_sdr' : (arg_0: number) => Promise<undefined>,
};