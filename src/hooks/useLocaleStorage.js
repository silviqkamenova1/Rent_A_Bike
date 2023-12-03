import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        //if its persisted
        const persistedStateSerialized = localStorage.getItem(key);
        if (persistedStateSerialized) {
            const persistedState = JSON.parse(persistedStateSerialized);

            return persistedState;
        };
        //if its not resisted
        return initialValue;
    });

    // the function which update the locale state
    const setLocaleStorageState = (value) => {
        //set to locale state
        setState(value);

        //set it into locale storage
        localStorage.setItem(key, JSON.stringify(value));
        //by the key we will set the data in localestorage
        //overwrote the state
    };

    return [
        state,
        setLocaleStorageState
    ];




}

