const functions = require('firebase-functions');
const os = require("os");
const path = require("path");
const cors = require('cors')({origin: true});
const Busboy = require('busboy');
const fs = require('fs');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const gcs = admin.storage();
gcs.projectId = "house-rental-bba82";
gcs.keyFilename = "house-rental-bba82-firebase-adminsdk-tfcg1-709d31e597.json";
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.storage((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.uploadFile = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      if (req.method !== "POST") {
        return res.status(500).json({
          message: "Not allowed"
        });
      }
      const busboy = new Busboy({ headers: req.headers });
      let uploadData = null;
  
      busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
        const filepath = path.join(os.tmpdir(), filename);
        uploadData = { file: filepath, type: mimetype };
        file.pipe(fs.createWriteStream(filepath));
      });
  
      busboy.on("finish", () => {
        const bucket = gcs.bucket("house-rental-bba82.appspot.com");
        bucket
          .upload(uploadData.file, {
            uploadType: "media",
            metadata: {
              metadata: {
                contentType: uploadData.type
              }
            }
          })
          .then(() => {
            res.status(200).json({
              message: "It worked!"                
            }).end();
            return null;
          })
          .catch(err => {
            res.status(500).json({
              error: err
            }).end();
          });
      });
      busboy.end(req.rawBody);
    });
  });
    
