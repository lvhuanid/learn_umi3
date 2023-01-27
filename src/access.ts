export default (initialState: API.IUser) => {
  console.log(initialState);
  return {
    isAdmin: initialState.role?.isAdmin,
    isEditor: initialState.role?.isEditor,
    isRoot: () => true,
    canAccess: (t: number) => t === 1,
  };
};
