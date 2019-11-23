const conversion = (value, total) => {
  const foodCost = value * 0.3
  return {
    foodCost: foodCost.toFixed(3),
    annual: ((total * 1337) + foodCost).toFixed(3)
  }
}

const initialState = {
  monthlyRange: {
    value: 10,
    minValue: 10,
    maxValue: 100
  },
  employeeRange: {
    value: 1,
    minValue: 1,
    maxValue: 10
  },
  estimated: conversion(10, 1)
}

// Actions
const SET_MONTHLY_RANGE = 'modules/calculator/SET_MONTHLY_RANGE'
const SET_EMPLOYEE_RANGE = 'modules/calculator/SET_EMPLOYEE_RANGE'

// Action Creator
export const monthlyCalculator = value => async dispatch => {
  dispatch({
    type: SET_MONTHLY_RANGE,
    payload: value
  })
}

export const employeeCalculator = value => async dispatch => {
  dispatch({
    type: SET_EMPLOYEE_RANGE,
    payload: value
  })
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MONTHLY_RANGE:
      return {
        ...state,
        monthlyRange: {
          ...state.monthlyRange,
          value: action.payload
        },
        estimated: {
          ...state.estimated,
          ...conversion(action.payload, state.employeeRange.value)
        }
      }
    case SET_EMPLOYEE_RANGE:
      return {
        ...state,
        employeeRange: {
          ...state.employeeRange,
          value: action.payload
        },
        estimated: {
          ...state.estimated,
          ...conversion(state.monthlyRange.value, action.payload)
        }
      }

    default:
      return { ...state }
  }
}
