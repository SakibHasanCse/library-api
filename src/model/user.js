import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name  cannot be empty'],
        trim: true,
        min: [2, 'Name can not be less then 2 characters'],
        maxlength: [50, 'Name can not be more then 50 characters']
    },
    phone: {
        type: String,
        required: [true, 'Number cannot be empty'],
        trim: true,
        min: [11, 'Number should be a valid '],
        match: [/(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/, 'Number should be a valid Bangladeshi mobile number']
    },
    role: {
        type: String,
        default: 'student',
        enum: ['student', 'librarian']
    },
    password: {
        type: String,
        required: true
    },
    active:{
         type: Boolean,
        default:true,
    }

}, { timestamps: true })

const user = mongoose.model('User', userSchema)
export default user