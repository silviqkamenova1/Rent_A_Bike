export default function Validation(values){
    const errors = {}

    const whitespace_pattern = /\s+/g
    const size_pattern = /^[A-Z]{1,}$/;
    const year_pattern = /^\d{4}$/;
    const price_pattern = /^\d{1,}$/;
    const image_pattern = /^https?:\/\/(.+)/;
       
    
    // if(!whitespace_pattern.test(values.frame)){
    //     errors.frame = 'Frame is an empty input!'
    // }
    // if(!whitespace_pattern.test(values.type)){
    //     errors.type = 'Type is an empty input!'
    // }

    // if(!whitespace_pattern.test(values.size)){
    //     errors.size = 'Size is an empty input!'
    // }
    // if(!whitespace_pattern.test(values.year)){
    //     errors.year = 'Year is an empty input!'
    // }
    // if(!whitespace_pattern.test(values.price)){
    //     errors.price = 'Price is an empty input!'
    // }
    // if(!whitespace_pattern.test(values.image)){
    //     errors.image = 'Image is an empty input!'
    // }
    // if(!whitespace_pattern.test(values.description)){
    //     errors.description = 'Description is an empty input!'
    // }


    if(values.frame === ''){
        errors.frame = 'Frame is required!';
    } else if((values.frame).length < 3){
        errors.frame = 'Frame input should be at least 3 characters!'
    } else {
        
    }

    if(values.type === ''){
        errors.type = 'Type is required!';
    } else if((values.type).length < 5){
        errors.type = 'Type input should be at least 5 characters!'
    } else if((values.type).length > 15){
        errors.type = 'Type name input no longer than 15 characters!'
    }

    if(values.size === ''){
        errors.size = 'Size is required!';
    } else if(!size_pattern.test(values.size)){
        errors.size = 'Size is invalid!'
    } 

    if(values.year === ''){
        errors.year = 'Year is required!';
    } else if(!year_pattern.test(values.year)){
        errors.year = 'Year is invalid!'
    } 

    if(values.price === ''){
        errors.price = 'Price is required!';
    } else if(!price_pattern.test(values.price)){
        errors.price = 'Price is invalid!'
    } 

    if(values.image === ''){
        errors.image = 'Image is required!';
    } else if(!image_pattern.test(values.image)){
        errors.image = 'Image is invalid!'
    } 

    if(values.description === ''){
        errors.description = 'Description is required!';
    } else if((values.description).length < 10){
        errors.description = 'Description should be at least 5 characters!'
    } 

    return errors;
}