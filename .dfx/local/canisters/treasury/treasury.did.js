export default ({ IDL }) => {
  return IDL.Service({
    'addICP' : IDL.Func([IDL.Nat], [IDL.Text, IDL.Bool], []),
    'burnSDR' : IDL.Func([IDL.Nat], [IDL.Text, IDL.Bool], []),
    'getMinCollateralRatio' : IDL.Func([], [IDL.Float64], ['query']),
    'get_ICP_Supply' : IDL.Func([], [IDL.Int], ['query']),
    'get_SDR_Supply' : IDL.Func([], [IDL.Int], ['query']),
    'init' : IDL.Func([], [], ['oneway']),
    'mintSDR' : IDL.Func([IDL.Nat], [IDL.Text, IDL.Bool], []),
    'removeICP' : IDL.Func([IDL.Nat], [IDL.Text, IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };