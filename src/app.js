

import bodyparser from 'body-parser'
import cors from 'cors'
import express from 'express'
import fileUpload from 'express-fileupload'
import helmet from 'helmet'
import passport from 'passport'
import xss from 'xss-clean'
import { errorhandle, setCorrelationId } from './middlewares/appMid'
import { conPassport } from './middlewares/auth'
import bookRouter from './router/book'
import authRouter from './router/user'

const app = express()



app.use(fileUpload())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(cors())
app.use(helmet())
app.use(xss())

app.use(passport.initialize())
conPassport(passport)

app.use(setCorrelationId)

app.use(authRouter)
app.use(bookRouter)

app.use(errorhandle)
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Page Not Found'
    })
})


export default app
