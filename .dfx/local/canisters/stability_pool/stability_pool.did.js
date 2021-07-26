export default ({ IDL }) => {
  return IDL.Service({
    'burn_reserve' : IDL.Func([IDL.Int], [IDL.Text, IDL.Bool], []),
    'closedTrove' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Text], []),
    'collect_ICP' : IDL.Func([IDL.Text], [IDL.Nat], []),
    'create_Stability_Account' : IDL.Func([IDL.Text], [IDL.Text, IDL.Bool], []),
    'deposit_ICP' : IDL.Func([IDL.Nat], [], []),
    'deposit_Reserve' : IDL.Func([IDL.Nat], [], []),
    'deposit_SDR' : IDL.Func([IDL.Text, IDL.Nat], [IDL.Text, IDL.Bool], []),
    'get_ICP' : IDL.Func([IDL.Text], [IDL.Int], []),
    'get_SDR' : IDL.Func([IDL.Text], [IDL.Int], []),
    'get_reserve_sdr_amount' : IDL.Func([], [IDL.Int], []),
    'get_total_deposited_sdr' : IDL.Func([], [IDL.Int], []),
    'icp_remaining' : IDL.Func([], [IDL.Int], []),
    'sdr_to_burn_remaining' : IDL.Func([], [IDL.Int], []),
    'totalSDR' : IDL.Func([], [IDL.Int], []),
  });
};
export const init = ({ IDL }) => { return []; };