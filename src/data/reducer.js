import * as actions from './actions';

const initial = {
  isLoading: [],
  months: [],
  currentMonth: null,
  incomes: [],
  outcomes: [],
  balance: null,
  error: null,
};

function app(state = initial, action) {
  switch (action.type) {
    /*
     * INITIAL DATA
     */
    case actions.REQUEST_INITIAL_DATA:
      return {
        ...state,
        isLoading: state.isLoading.concat(1),
      };

    case actions.RECEIVE_INITIAL_DATA_SUCCESS:
      return {
        ...state,
        isLoading: state.isLoading.slice(1),
        months: action.payload.months,
        currentMonth: action.payload.currentMonth,
        error: null,
      };

    case actions.RECEIVE_INITIAL_DATA_ERROR:
      return {
        ...state,
        isLoading: state.isLoading.slice(1),
        months: [],
        currentMonth: null,
        error: action.error,
      };

    /*
     * CHANGE MONTH
     */
    case actions.REQUEST_CHANGE_MONTH:
      return {
        ...state,
        isLoading: state.isLoading.concat(1),
        currentMonth: null,
      };

    case actions.RECEIVE_CHANGE_MONTH_SUCCESS:
      return {
        ...state,
        isLoading: state.isLoading.slice(1),
        currentMonth: action.month,
        error: null,
      };

    case actions.RECEIVE_CHANGE_MONTH_ERROR:
      return {
        ...state,
        isLoading: state.isLoading.slice(1),
        currentMonth: null,
        error: action.error,
      };

    /*
     * GET INCOMES
     */
    case actions.REQUEST_INCOMES:
      return {
        ...state,
        isLoading: state.isLoading.concat(1),
      };

    case actions.RECEIVE_INCOMES_SUCCESS:
      return {
        ...state,
        isLoading: state.isLoading.slice(1),
        incomes: action.incomes,
        error: null,
      };

    case actions.RECEIVE_INCOMES_ERROR:
      return {
        ...state,
        isLoading: state.isLoading.slice(1),
        incomes: [],
        error: action.error,
      };

    /*
     * GET OUTCOMES
     */
    case actions.REQUEST_OUTCOMES:
      return {
        ...state,
        isLoading: state.isLoading.concat(1),
      };

    case actions.RECEIVE_OUTCOMES_SUCCESS:
      return {
        ...state,
        isLoading: state.isLoading.slice(1),
        outcomes: action.outcomes,
        error: null,
      };

    case actions.RECEIVE_OUTCOMES_ERROR:
      return {
        ...state,
        isLoading: state.isLoading.slice(1),
        outcomes: [],
        error: action.error,
      };

    /*
     * GET BALANCE
     */
    case actions.REQUEST_BALANCE:
      return {
        ...state,
        isLoading: state.isLoading.concat(1),
      };

    case actions.RECEIVE_BALANCE_SUCCESS:
      return {
        ...state,
        isLoading: state.isLoading.slice(1),
        balance: action.balance,
        error: null,
      };

    case actions.RECEIVE_BALANCE_ERROR:
      return {
        ...state,
        isLoading: state.isLoading.slice(1),
        balance: null,
        error: action.error,
      };

    /*
     * GET ALL
     */
    case actions.REQUEST_ALL:
      return {
        ...state,
        isLoading: state.isLoading.concat(1),
      };

    case actions.RECEIVE_ALL:
      return {
        ...state,
        isLoading: state.isLoading.slice(1),
      };

    default:
      return state;
  }
}

export default app;
