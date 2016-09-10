import * as actions from './actions';

const initial = {
  isLoading: false,
  months: [],
  currentMonth: null,
  incomes: [],
  outcomes: [],
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
        isLoading: true,
      };

    case actions.RECEIVE_INITIAL_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        months: action.payload.months,
        currentMonth: action.payload.currentMonth,
        error: null,
      };

    case actions.RECEIVE_INITIAL_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
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
        isLoading: true,
      };

    case actions.RECEIVE_CHANGE_MONTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentMonth: action.month,
        error: null,
      };

    case actions.RECEIVE_CHANGE_MONTH_ERROR:
      return {
        ...state,
        isLoading: false,
        currentMonth: null,
        error: action.error,
      };

    /*
     * GET INCOMES
     */
    case actions.REQUEST_INCOMES:
      return {
        ...state,
        isLoading: true,
      };

    case actions.RECEIVE_INCOMES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        incomes: action.incomes,
        error: null,
      };

    case actions.RECEIVE_INCOMES_ERROR:
      return {
        ...state,
        isLoading: true,
        incomes: [],
        error: action.error,
      };

    default:
      return state;
  }
}

export default app;
