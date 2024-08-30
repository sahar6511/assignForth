export const validate =(data)=>{
    const errors ={};
    if(data.id === ""){
        errors.id = "فیلد کد درس نباید خالی باشد"
    }
    if(data.courseName === ""){
        errors.courseName = "فیلد نام درس نباید خالی باشد"
    }
    if(data.vahed === ""){
        errors.vahed = "فیلد تعداد واحد نباید خالی باشد"
    }   
    if(data.teacherFamily === ""){
        errors.teacherFamily = "نام استاد باید  انتخاب شود"
    }   
    return errors;
}





