export default ({ IDL }) => {
  return IDL.Service({
    'checkLiquidation' : IDL.Func([], [IDL.Text], []),
    'closeTrove' : IDL.Func(
        [IDL.Text, IDL.Nat],
        [IDL.Text, IDL.Nat, IDL.Bool],
        [],
      ),
    'createTrove' : IDL.Func([IDL.Text, IDL.Nat, IDL.Nat], [IDL.Text], []),
    'decreaseICP' : IDL.Func([IDL.Text, IDL.Nat], [IDL.Text, IDL.Bool], []),
    'decreaseSDR' : IDL.Func([IDL.Text, IDL.Nat], [IDL.Text, IDL.Bool], []),
    'getTroveCollateralRatio' : IDL.Func(
        [IDL.Text],
        [IDL.Text, IDL.Float64, IDL.Bool],
        [],
      ),
    'getTroveICP' : IDL.Func([IDL.Text], [IDL.Text, IDL.Nat, IDL.Bool], []),
    'getTroveSDR' : IDL.Func([IDL.Text], [IDL.Text, IDL.Nat, IDL.Bool], []),
    'increaseICP' : IDL.Func([IDL.Text, IDL.Nat], [IDL.Text, IDL.Bool], []),
    'increaseSDR' : IDL.Func([IDL.Text, IDL.Nat], [IDL.Text, IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };