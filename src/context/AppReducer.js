export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_ACCOUNT":
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
      };

    case "EDIT_ACCOUNT":
      const updatedAccount = action.payload;

      const updatedAccounts = state.accounts.map((account) => {
        if (account.id === updatedAccount.id) {
          return updatedAccount;
        }
        return account;
      });

      return {
        ...state,
        accounts: updatedAccounts,
      };

    case "REMOVE_ACCOUNT":
      return {
        ...state,
        accounts: state.accounts.filter(
          (account) => account.id !== action.payload
        ),
      };

    default:
      return state;
  }
};