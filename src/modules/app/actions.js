export const APP_ACTIONS = {
    APP_FILTER_EMPLOYEES: 'APP_FILTER_EMPLOYEES'
}

export function filterEmployees(fiterBy) {
    return {
        type: APP_ACTIONS.APP_FILTER_EMPLOYEES,
        payload: fiterBy
    };
}