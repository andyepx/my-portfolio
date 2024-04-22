'use client';

import {useEffect} from 'react';

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <p>Oh no! Something went wrong... try a refresh?</p>
        </div>
    );
}
