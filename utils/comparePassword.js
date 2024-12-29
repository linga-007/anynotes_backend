import bcrypt from 'bcrypt';

const comparePassword = async(password , hashedPassword) =>{
    const cmp =  await bcrypt.compare(password , hashedPassword);
    return cmp;
}

export default comparePassword;