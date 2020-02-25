var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose')
let Hospital = require('./models/hospital');
var HospitalRoutes      = require("./routes/hospital");    
let data;

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(HospitalRoutes); 

mongoose
.connect('mongodb+srv://Rushikesh:JoS27NVgG2UW38jq@cluster0-bui4j.mongodb.net/hospitals?retryWrites=true&w=majority',{useNewUrlParser: true})
.then(result => {
  // Hospital.findOne().lean().exec().then(hospital => {
  //    if (hospital) {
  //     const hospital = new Hospital({
  //       _id:"2",name:"G B Pant Hospital, Port Blair",category:"Public",address:"GB Pant Road,City Centre, Port Blair",state:"Andaman and Nicobar Islands",district:"South Andaman",pincode:"744103",telephone:"03192 233665",emergency:"NA", email:"info@carehospitals.com",  website:"http://www.and.nic.in/C_charter/health/dhs/index.html#gph",specialities:"Surgery, Medicine, Gynaecology, Pediatrics, ENT",latitude: "11.675634", longitude:"92.747372",facilities:"NA"
  //     });
  //     hospital.save();
  //   console.log(hospital);

  // }
  // });
  // console.log(data)
  // data.records.forEach(async function(d){
  //   await  Hospital.insertMany([
  //    {
  //      _id: d._sr_no_,
  //      name: d.hospitalname,
  //      category: d.hospital_category,
  //      address: d.hostipalcaretype,
  //      state: d.state,
  //      district: d.district,
  //      pincode: d. _pincode,
  //      telephone: d.telephone,
  //      emergency: d.emergencynum,
  //      email: d.hospitalprimaryemailid,
  //      website: d.website,
  //      latitude: d._googlemapcorridinate_lati,
  //      longitude: d._googlemapcorridinate_longi,
  //      facilities: d.facilities
  //    }
  //   ])
  //   .catch(err => {
  //     console.log(err);
  //   })
  // });
  
  app.listen(3000,function(){
    console.log(" Server has started");
  })
})
.catch(err => {
  console.log(err);
})



var request = require('request');
request('https://api.data.gov.in/resource/7d208ae4-5d65-47ec-8cb8-2a7a7ac89f8c?api-key=579b464db66ec23bdd000001f077a08693744af45571d594ff223f1d&format=json&offset=0&limit=1000', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  data = JSON.parse(body)
  // console.log('body:',data.records); // Print the HTML for the Google homepage.
});



   



