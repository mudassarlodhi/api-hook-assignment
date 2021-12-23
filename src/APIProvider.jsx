import React ,  { useCallback, useRef } from "react";
import APIContext from "./APIContext";

export default function APIProvider({ children }) {
    const requests = useRef(new Map());

    const onRequest = useCallback((url) => {
        if (requests.current.has(url)) {
            return requests.current.get(url);
        }
        const promise = fetch(url).then((response) => {
            if (!response.ok) {
                return Promise.reject(new Error("Error Fetching Data"));
            }
            return response.json();
        });
        requests.current.set(url, promise);
        return promise;
    }, [requests]);

    return (
        <APIContext.Provider
            value={{
                onRequest
            }} >
            {children}
        </APIContext.Provider>
    )
}