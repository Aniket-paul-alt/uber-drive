const captainModel = require("../models/captain-model")

module.exports.createCaptain = async({
    firstname, lastname, email, password, color, plate,capacity, vehicleType
}) =>{
    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error("All fields are required")
    }
    const captain = captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain
}

// {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ3MzY3Y2E0ZTQ3NmRhMWI1NjYyM2EiLCJpYXQiOjE3MzI3MjAyNTIsImV4cCI6MTczMjgwNjY1Mn0.ABfiSYvZGqTWdzPHqGnnrfS_Kpu4ySZTvu02_OTy1CU",
//     "captain": {
//         "fullname": {
//             "firstname": "Aniket",
//             "lastname": "Paul"
//         },
//         "email": "test@gmail.com",
//         "password": "$2b$10$KRN7Tvih0uS.uJ1z0rYW0OngLOEltdmdMTK6x3KUDwqsdlyk2C386",
//         "status": "inactive",
//         "vehicle": {
//             "color": "red",
//             "plate": "WB 12 AB 2546",
//             "capacity": 3,
//             "vehicleType": "car"
//         },
//         "_id": "6747367ca4e476da1b56623a",
//         "__v": 0
//     }
// }