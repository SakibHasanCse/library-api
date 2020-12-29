import express from 'express';
import { validatorhandler } from '../middlewares/appMid';
import { userRagister ,userLogin ,userProfile, singleUser ,singleStudent} from './../controllers/user';
import user from '../model/validation/user';
import login from '../model/validation/login';
import { isAuth, isLibarian } from '../middlewares/auth';
import { isStudent } from './../middlewares/auth';


const router = express.Router();

router
    .route('/signup')
    .post(validatorhandler(user),userRagister)

router
    .route('/signin')
    .post(validatorhandler(login), userLogin)
   
router
    .route('/profile')
    .get(isAuth, userProfile)
   
router
        .route('/getstudent')
        .post(isAuth, isStudent() , singleStudent)
       
router
    .route('/getlibrarian')
    .post(isAuth, isLibarian() ,singleUser )
   
export default router
