import bcrypt from 'bcrypt'

function createHashPassword(password: string) {

    const hashPassword = bcrypt.hashSync(password, 8)

    return hashPassword
}

function validateHashPassword(password: string, hashPassword: string) {

    return bcrypt.compareSync(password, hashPassword)
}

function transformStringIntoDate(string: string):Date{

    const dateString = string;
    const dateParts = dateString.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);
    const date = new Date(year, month, day);
    return date
}
const authServices = {
    createHashPassword,
    validateHashPassword,
    transformStringIntoDate
}

export default authServices