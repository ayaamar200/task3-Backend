
const request = require ('request')

const forecast = (latitude , longtitude , callback ) => {

const url = "http://api.weatherapi.com/v1/current.json?key=69d8ae48d31f4c5aa10173654231607&q=" + latitude + "," + longtitude

request ({url, json : true} , (error , response) => {

if(error) {
    callback ("Unable to connect weather service" , undefined)
} else if(response.body.error){
    callback (response.body.error.message , undefined)
} else {
        callback (undefined , 'Cuntry Name : ' +response.body.location.name + ' --> Current Weather Is :  ' + response.body.current.condition.text 
        + " --> Temperature Is :  " + response.body.current.temp_c    )
}
})
}

module.exports = forecast;