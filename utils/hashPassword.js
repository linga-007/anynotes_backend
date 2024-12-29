import bcrypt from 'bcrypt';

const hashPassword = async(password) =>{
    const salt = 10;
    const hashed = await bcrypt.hash(password , salt);
    console.log(hashed);
    return hashed;
};

export  default hashPassword;