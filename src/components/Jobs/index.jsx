import Navigation from "components/common/Navigation";
import useFetch from "hooks/useFetch";
import { JOBS } from "modules/api/endpoints";
import React, { useEffect } from "react";

export default function Jobs() {
    const { response, performFetch } = useFetch(JOBS);
    const { loading, data } = response;

    useEffect(() => {
        performFetch();
    }, [performFetch]);

    console.log(response);

    return (
        <Navigation loading={loading} services={data} title={'Jobs agency'} />
    )
}