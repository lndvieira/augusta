'use strict';

const functions = require('firebase-functions');
const accessKey = '8c46514faebd4dffbb6d242f3cca794a';
const uri = 'brazilsouth.api.cognitive.microsoft.com';
const pathLanguages = '/text/analytics/v2.0/languages';
const pathSentiment = '/text/analytics/v2.0/sentiment';
const pathKeyPhrases = '/text/analytics/v2.0/keyPhrases';
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

let response_handler = function (response) {
    let body = '';
    response.on ('data', function (d) {
        body += d;
    });
    response.on ('end', function () {
        let body_ = JSON.parse (body);
        let body__ = JSON.stringify (body_, null, '  ');
        console.log (body__);
    });
    response.on ('error', function (e) {
        console.log ('Error: ' + e.message);
    });
};

let getLanguage_request_params = {
    method : 'POST',
    hostname : uri,
    contentType : 'application/json',
    path : pathLanguages,
    headers : {
        'Ocp-Apim-Subscription-Key' : accessKey,
    }
};
exports.getLanguage = functions.https.onRequest((getLanguage_request_params, response) =>{
	let str = "";
	let body = JSON.stringify (getLanguage_request_params.body);
	response.on('data' , function(chunk){
		str += chunk
		response.send(str);
		console.log(data);
	}).on('end', function (){
		response.send(getLanguage_request_params.body);
		console.log(getLanguage_request_params.body);
	})
	//response.setEncoding('utf8');
	response.send();
	
 });

/*var getLanguage = request({
	    url: "brazilsouth.api.cognitive.microsoft.com/text/analytics/v2.0/languages",
	    method: "POST",
	    json: true,
	    body: { 'documents': [
    				{ 
    					'id': '1', 
    					'text': 'Não gostei do café, a comida era horrivel' 
    				}
			]},
	    headers : {
        	'Ocp-Apim-Subscription-Key' : '8c46514faebd4dffbb6d242f3cca794a',
    	}
	}, function (error, response, body){
    	console.log(response);
});

exports.getLanguage = functions.https.onRequest(getLanguage);
*/



