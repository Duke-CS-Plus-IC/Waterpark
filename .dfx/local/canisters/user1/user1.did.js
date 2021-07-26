export default ({ IDL }) => {
  return IDL.Service({
    'close_Trove' : IDL.Func([IDL.Nat], [IDL.Text], []),
    'collect_ICP_from_Stability_Account' : IDL.Func([], [IDL.Text], []),
    'create_Account_User1' : IDL.Func([IDL.Text], [], []),
    'create_Stability_Account' : IDL.Func([], [IDL.Text, IDL.Bool], []),
    'create_Trove' : IDL.Func([], [IDL.Text], []),
    'current_collateral_ratio' : IDL.Func([], [IDL.Text], []),
    'deposit_ICP' : IDL.Func([IDL.Nat], [IDL.Text], []),
    'deposit_SDR' : IDL.Func([IDL.Nat], [IDL.Text], []),
    'deposit_to_stability_pool' : IDL.Func([IDL.Nat], [IDL.Text], []),
    'get_Free_ICP' : IDL.Func([], [IDL.Text], []),
    'get_Free_SDR' : IDL.Func([], [IDL.Text], []),
    'get_user_ID' : IDL.Func([], [IDL.Text], []),
    'icp_locked' : IDL.Func([], [IDL.Text], []),
    'sdr_outstanding' : IDL.Func([], [IDL.Text], []),
    'test_run' : IDL.Func([IDL.Text], [IDL.Text], []),
    'withdraw_ICP' : IDL.Func([IDL.Nat], [IDL.Text], []),
    'withdraw_SDR' : IDL.Func([IDL.Nat], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };