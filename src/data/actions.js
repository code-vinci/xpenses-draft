import API from '../services/api';

export const REQUEST_INITIAL_DATA = 'REQUEST_INITIAL_DATA';
export const RECEIVE_INITIAL_DATA_SUCCESS = 'RECEIVE_INITIAL_DATA_SUCCESS';
export const RECEIVE_INITIAL_DATA_ERROR = 'RECEIVE_INITIAL_DATA_ERROR';

export const REQUEST_CHANGE_MONTH = 'REQUEST_CHANGE_MONTH';
export const RECEIVE_CHANGE_MONTH_SUCCESS = 'RECEIVE_CHANGE_MONTH_SUCCESS';
export const RECEIVE_CHANGE_MONTH_ERROR = 'RECEIVE_CHANGE_MONTH_ERROR';

export const REQUEST_INCOMES = 'REQUEST_INCOMES';
export const RECEIVE_INCOMES_SUCCESS = 'RECEIVE_INCOMES_SUCCESS';
export const RECEIVE_INCOMES_ERROR = 'RECEIVE_INCOMES_ERROR';


/*
 * INITIAL DATA
 */
export function fetchInitialData() {
  return (dispatch) => {
    dispatch(requestInitialData());

    return API.get('months')
      .then((months) => {
          dispatch(receiveInitialDataSuccess({
            months,
            currentMonth: months[1],
          }));
          dispatch(fetchIncomes(months[1].code));
      });
  };
};

export function requestInitialData() {
  return { type: REQUEST_INITIAL_DATA };
};

export function receiveInitialDataSuccess(payload) {
  return { type: RECEIVE_INITIAL_DATA_SUCCESS, payload };
};

export function receiveInitialDataError(error) {
  return { type: RECEIVE_INITIAL_DATA_ERROR, error };
};

/*
 * CHANGE MONTH
 */
export function changeMonth(month) {
  return (dispatch, getState) => {
    dispatch(requestChangeMonth());

    if (month) {
      dispatch(receiveChangeMonthSuccess(month));
      dispatch(fetchIncomes(month.code));
    } else {
      dispatch(receiveChangeMonthError('Mês inválido'));
    }
  };
};

export function requestChangeMonth() {
  return { type: REQUEST_CHANGE_MONTH, };
};

export function receiveChangeMonthSuccess(month) {
  return { type: RECEIVE_CHANGE_MONTH_SUCCESS, month};
};

export function receiveChangeMonthError(error) {
  return { type: RECEIVE_CHANGE_MONTH_ERROR, error };
};

/*
 * INCOMES
 */
export function fetchIncomes(monthCode) {
  return (dispatch) => {
    dispatch(requestIncomes());

    return API.get(`incomes/${monthCode}`)
      .then(
        (response) => {
          dispatch(receiveIncomesSuccess(response));
        },

        (error) => {
          dispatch(receiveIncomesError('Nenhum registro encontrado'));
        },
      );
  };
};

export function requestIncomes() {
  return { type: REQUEST_INCOMES, };
};

export function receiveIncomesSuccess(incomes) {
  return { type: RECEIVE_INCOMES_SUCCESS, incomes, };
};

export function receiveIncomesError(error) {
  return { type: RECEIVE_INCOMES_ERROR, error, };
};
