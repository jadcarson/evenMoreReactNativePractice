import {
  EMPLOYEE_UPDATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  console.log("value", value)
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};
