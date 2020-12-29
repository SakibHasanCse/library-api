import mongoose from 'mongoose';


export const DBCON = (mongourl) => {
    mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true,})
        .then( () => {
            console.log('Database connection established')
        }
        )
        .catch((err) => console.log(err.message));

    mongoose.set('useFindAndModify', false)
}

