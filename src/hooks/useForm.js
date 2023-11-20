import { useState } from "react";

export const useForm = (initalValues, onSubmitHandler) => {
    //initialValues will take the value only at the first time
    // and will not listening for changes
    const [values, setValues] = useState(initalValues);
                                //custom hook
    const changeHandler = (e) => {
        //change the values by the name of the input which is changed
                            // take new reference based on the old one
        setValues(state => ({...state, [e.target.name]: e.target.value}))
                                    
    };

    const changeValues = (newValues) => {


        setValues(newValues)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        //onSubmitHandleer is calling through onSubmit function
        onSubmitHandler(values)
    }


    return {
        values,
        changeHandler,
        changeValues,
        onSubmit
    }
}