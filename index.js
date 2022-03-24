// Write your solution in this file!

const employee = {
    name : "Michael",
    streetAddress : "143 Appleridge Ave"
};

function updateEmployeeWithKeyAndValue(object,key,value){
    const newObj = {...object, [key] : value};
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value){
    object[key] = value
    return object;
}
const deleteFromEmployeeByKey=(object,key,value)=>{
    const newObj = {...object}
    newObj[key] = value;
    delete newObj.key;
    return newObj;
}


const destructivelyDeleteFromEmployeeByKey=(employee,key)=>{
    delete employee[key];
    return employee;
}
