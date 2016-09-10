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

export const REQUEST_OUTCOMES = 'REQUEST_OUTCOMES';
export const RECEIVE_OUTCOMES_SUCCESS = 'RECEIVE_OUTCOMES_SUCCESS';
export const RECEIVE_OUTCOMES_ERROR = 'RECEIVE_OUTCOMES_ERROR';

export const REQUEST_ALL = 'REQUEST_ALL';
export const RECEIVE_ALL = 'RECEIVE_ALL';

/*
 * INITIAL DATA
 */
export function fetchInitialData() {
  return (dispatch) => {
    dispatch(requestInitialData());

    return API.get('months')
      .then((months) => {
          const currentMonth = months[0];

          dispatch(receiveInitialDataSuccess({ months, currentMonth }));
          dispatch(fetchAll(currentMonth.code));
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
        dispatch(receiveChangeMonthSuccess(month))
        dispatch(fetchAll(month.code))
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

/*
 * OUTCOMES
 */
export function fetchOutcomes(monthCode) {
  return (dispatch) => {
    dispatch(requestOutcomes());

    return API.get(`outcomes/${monthCode}`)
      .then(
        (response) => {
          dispatch(receiveOutcomesSuccess(response));
        },

        (error) => {
          dispatch(receiveOutcomesError('Nenhum registro encontrado'));
        },
      );
  };
};

export function requestOutcomes() {
  return { type: REQUEST_OUTCOMES, };
};

export function receiveOutcomesSuccess(outcomes) {
  return { type: RECEIVE_OUTCOMES_SUCCESS, outcomes, };
};

export function receiveOutcomesError(error) {
  return { type: RECEIVE_OUTCOMES_ERROR, error, };
};

export function fetchAll(monthCode) {
  return (dispatch) => {
    dispatch(requestAll());

    return dispatch(fetchIncomes(monthCode))
        .then(() => dispatch(fetchOutcomes(monthCode)))
        .then(() => dispatch(receiveAll()));
  };
};

export function requestAll() {
  return { type: REQUEST_ALL };
};

export function receiveAll() {
  return { type: RECEIVE_ALL };
};
