import camelcase from "camelcase";
import { useDispatch, useSelector } from "react-redux";
import { apiActions } from "modules/api/actions";
import { selectApiState } from "modules/api/selectors";
import { useCallback, useMemo } from "react";

const useFetch = endpoint => {
    const dispatch = useDispatch();
    const apiState = useSelector(selectApiState);
    const performFetch = useCallback(data => dispatch(apiActions.fetch(endpoint, data)), [endpoint, dispatch]);
    const response = useMemo(() => apiState[camelcase(endpoint)], [apiState, endpoint])

    return { response, performFetch };
}

export default useFetch;