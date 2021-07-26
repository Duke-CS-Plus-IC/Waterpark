export default ({ IDL }) => {
  return IDL.Service({
    'get_icp_to_sdr' : IDL.Func([], [IDL.Float64], []),
    'update_icp_to_sdr' : IDL.Func([IDL.Float64], [], []),
  });
};
export const init = ({ IDL }) => { return []; };