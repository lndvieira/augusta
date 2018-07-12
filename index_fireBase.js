'use strict';

let https = require ('https');

const accessKey = '8c46514faebd4dffbb6d242f3cca794a';
const uri = 'brazilsouth.api.cognitive.microsoft.com';
const pathLanguages = '/text/analytics/v2.0/languages';
const pathSentiment = '/text/analytics/v2.0/sentiment';
const pathKeyPhrases = '/text/analytics/v2.0/keyPhrases';

const documents = { 'documents': [
    { 'id': '1', 'text': 'Não gostei do café, a comida era horrivel' }
]};

//-------------------------------------------------------

const functions = require('firebase-functions');
var google       = require('googleapis');
var request     = require('request');
const config = {
    "server": {
        "app_name": "KickOff_1.2.1",
        "hostname": "localhost",
        "port": 3000
    },
    "db": {
        "connect": "mongodb://localhost/kickoff"
    },
    "google": {
        "client_id" : "635221822847-5cojc6krq0oum2iquece2rq5qkpuodn8.apps.googleusercontent.com",
		"client_secret" : "luSeI9eoxp2zt7bwvXrb5UTZ",
        "service_account": {
			"type": "service_account",
			"project_id": "api-project-635221822847",
			"private_key_id": "d5c0db2a039e48d8539fa6dde30eb35189b75e6c",
			"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCR6KAIMC2P1H6D\n2eB3c82tXNoRahEqppu799p+JBYJFMcFRTaHSj5y9ppc3iD+C+NxQ9XIZxLbnVnP\nQFpV2w+26bzCiiWs0VChreznDl7JWBJWr1nG34vTBseHLVhDVoYTziCE4omaQkAa\nkF2yX5IkwFKNULOzKqRDc3/rEKP/TrjKLAzH0Cb2KM0ZsUrN49gV3yYqoUaq1X6F\nYYAsTuovBmL81J+xjJuwNJ9s+fGr9Uzed06peYZ2OJAj0fwSCrJ9f2GLLwz+oqPJ\n7k77lOIvAt1GR9QnBr5PAc3bPTdPXuLfje4nkkZ9QlCRI7daIsFLALesVb6bjYru\nE0x+LW6bAgMBAAECggEAQP1TorIK6UCl5Ya7Y5lyKGDuRMlwwgWZ4lygtoTOR9c4\nWpGcmyAntr8+vFS4b0/OS9oCNBQtIyLwKM8qLYm4cymjSSeNZm+JMaqtlbEh6R7Q\ndEoAfAOAXUtsvjolUUEN0W6Dr4zT66DMushI47WL+9CqNIWYtRouNlkQxhwQYBv7\nSbWGhfoX7M30zB/v5MSixm/frvTx9rcWcQNSH3YzpTARh5C0oBwcENwfLyXjxRsg\nKBVs+VpzM0fpMgCxx7i1zUVxj1oSl25wrfImRRaCZ7adcyfznYDGvB6VdCcekzkB\n+FVzvNCj2UzEDVw1BlpZhRY61TLlLHZt6zu1IqDjkQKBgQDf9jyMT5zOEWBksayE\ntc5k3Px+mcyqC1vRHBofRzwOYqskA2bn8xzbEbHecD0G+Vhh5BIX4yKoqrNnRM6m\ndzE/UYdIDsWIRo7c3HtiJMiRDZGCOVAw4Qn+Cgdd7iScsw94FcIckjdTQhfKUjLy\nh8ecpttnHB7CNViJMsd1JyEa8wKBgQCmx/vh/o7Dx/4XaFGz2v0QsUxUdKFIX8wR\ni1NLpb5wdgChPlKA2K2c/NZdcEee/yFvuaJE3G1CeZdqDJu6xRteOsU8bUCbkZzN\n+942m9crbVzt50Vm3yGgRy08XKStkWU8Gn4OVqORNhd9pD0N3pPwCTPh0HBI4vPa\nNX+P9953uQKBgAwijG9R1P45ZM6v7dgW/cLrUmcNsFA6Y1Q2QJgXRQLGh91grc+9\nlX+tOsUBsdzR398V+4D91p/q9+ONj+DnLmzu3vShkERtBkqjS7AqrA9n+81hi53K\nY783DeUiBSvUa+8mxqjDp2nEeAOHZqlLgB5V0CeLF4OQXma4sKQBZcLPAoGAWtxo\npV6BeLfj/eyfVlTfudBdvUUs+Lj3/DbjUjsh3TLsdOv3Fqr1Kqm0P4OEAWMNXEjN\n1qYgAC8uBmCIFuB7YIK0IY+Duz1BKBcnoKiWONqD3jg43yqAr0kXo+L09HpZpLzq\nH/WjduD5O0HW4U95WTQqR8O+6HZ8U00CCfUIBkECgYAkLUketAFyCSGN6lztQKC+\nzvtMyd+Y8uoGhHK6bNWjl3RSy3xxYyl7ZATDuPCeQx7bJZyIQ4YX45zxU7/Wwr3U\nS1J0A41GdPVQpCBagAhr28o1uEF8cScH6lFCXD0y+DDYTOJgVjSY58+/HjCuLuQU\nbmHONyb9+4JITymkZHKmCA==\n-----END PRIVATE KEY-----\n",
			"client_email": "extra-o-google-sheets@api-project-635221822847.iam.gserviceaccount.com",
			"client_id": "108094119058877361174",
			"auth_uri": "https://accounts.google.com/o/oauth2/auth",
			"token_uri": "https://accounts.google.com/o/oauth2/token",
			"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
			"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/extra-o-google-sheets%40api-project-635221822847.iam.gserviceaccount.com"
		}
    },
    "files": {
        "dest" : "D:\\BI\\Dados\\DadosGA",
        "log"  : ".\\logs"
    }
}

//tutorial post https://itnext.io/working-with-firebase-functions-http-request-22fd1ab644d3

var OAuth2Client = google.google.auth.OAuth2;
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


//------------------- Azure

exports.getLanguage = functions.https.onRequest(function(request,response){
	console.log('vai chamar o get language');
	get_language (documents , function(err, data){
		console.log(data);
		response.send(data);
	});
	//get_sentiments (documents);
	//get_key_phrases (documents);
})

let response_handler = function(response) {
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

function get_language(documents , cb) {
    let data = JSON.stringify (documents);

    /*var options = {
		method : 'POST',
		url : uri+pathLanguages,
		headers: {
			'Ocp-Apim-Subscription-Key' : accessKey,
		},
		body: data
	};
	console.log(JSON.stringify(options));
	request(options, function (err, data) {
		if(err){ console.log('error ' + err)};
		var json = JSON.parse(data);
		cb(null , json);

	});*/

    let request_params = {
        method : 'POST',
        url : 'https://'+uri+pathLanguages,
        body : data,
        headers : {
            'Ocp-Apim-Subscription-Key' : accessKey,
        }
    };
    console.log(request_params);
    request(request_params, function (err, r, data) {
		if(err){ console.log('error ' + err)};
		var json = JSON.parse(data);
		console.log("json" + json);
		cb(null , json);

	});
    /*request(request_params, function(response){
    	let body = '';
	    response.on ('data', function (d) {
	        body += d;
	    });
	    response.on ('end', function () {
	        let body_ = JSON.parse (body);
	        let body__ = JSON.stringify (body_, null, '  ');
	        console.log (body__);
	        cb(null, body__);

	    });
	    response.on ('error', function (e) {
	        console.log ('Error: ' + e.message);
	    });
    });*/
    //req.write (data);
    //req.end ();

    //console.log(typeof req);
    //console.log(response_handler);
    //cb(null , response_handler);
}
/*
function get_sentiments(documents) {
    let body = JSON.stringify (documents);

    let request_params = {
        method : 'POST',
        hostname : uri,
        path : pathSentiment,
        headers : {
            'Ocp-Apim-Subscription-Key' : accessKey,
        }
    };

    let req = https.request (request_params, response_handler);
    req.write (body);
    req.end ();
}

function get_key_phrases(documents) {
    let body = JSON.stringify (documents);

    let request_params = {
        method : 'POST',
        hostname : uri,
        path : pathKeyPhrases,
        headers : {
            'Ocp-Apim-Subscription-Key' : accessKey,
        }
    };

    let req = https.request (request_params, response_handler);
    req.write (body);
    req.end ();
}*/


//-------------------------- ga
exports.getData = functions.https.onRequest(function(request , response){
         var query = {
		   "_id":"5b2955374de1990cb496cfd8",
		   "scheduling":"* * * * * *",
		   "segment":"",
		   "directory":"AudienciaGA",
		   "filters":"",
		   "sort":"",
		   "end_date":"D-1",
		   "start_date":"D-1",
		   "dimensions":"ga:hour,ga:channelGrouping,ga:sourceMedium,ga:campaign,ga:deviceCategory",
		   "metrics":"ga:sessions,ga:transactions,ga:bounces,ga:timeonsite,ga:goal10Completions,ga:goal14Completions",
		   "ids":"ga:73941944",
		   "name":"boticario.audiencia",
		   "account_id":"5b29539a4de1990cb496cfd7",
		   "__v":0
		}
		 
		 var accounte = {
        	"_id":"5b2bbcec21f64b2144401616",
        	"created_at":"2018-06-21T14:57:48.593Z",
        	"modified_at":"2018-06-21T14:57:48.593Z",
        	"querys":[],
        	"tokens":
        		{
        			"expiry_date":"1529596668054",
        			"refresh_token":"1/x6pzGIruB-eECVhUgyqU1u_lkzBXNvGixQDv-h2QoSk",
        			"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImRhZDQ0NzM5NTc2NDg1ZWMzMGQyMjg4NDJlNzNhY2UwYmMzNjdiYzQifQ.eyJhenAiOiI2MzUyMjE4MjI4NDctNWNvamM2a3JxMG91bTJpcXVlY2UycnE1cWtwdW9kbjguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI2MzUyMjE4MjI4NDctNWNvamM2a3JxMG91bTJpcXVlY2UycnE1cWtwdW9kbjguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTM4ODE0NzM4MzU2MDg4MDE0NjgiLCJlbWFpbCI6ImxlYW5kcm8udmllaXJhQGF1bmljYS5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IllqbEhBeUpoS0g4eWoxN0YySkNwemciLCJleHAiOjE1Mjk1OTY1NDYsImlzcyI6ImFjY291bnRzLmdvb2dsZS5jb20iLCJpYXQiOjE1Mjk1OTI5NDZ9.KcoWVRmoM1G-WzBMzosaa2jGvHTDBsCn3ZSXUQlFm7aejJZ7phbsL3QYnj27xl4P8VHhjXmfRrD4tf316j2KOrbeXd1UXXrHklRP-HhEd2NUAjsr_1MdV05XeuS_T0eshWdBXnKYFCS9Cp0LCWCubg_4hFQ_hZLKg20JoP9rtIopFLJ2u_JH2vO01ZMvKeHpTXbZpig7GEv8mkemOTmjCgr0NryuJysikPt_ADTaL2CPHc1YQ92CHtShB6P7KsIgSmoo21g07RsU61SZ2I2myL-vfufMDwD8CukoGAOx7ID033r5q7qRxBX3R-ZKyTbiOnQJFMLHmaRfOWu7caqkkw",
        			"token_type":"Bearer",},
        			"access_token":"ya29.GlzhBSldfDRNPcZErEi9AUFVCZ_E8soSSJCaXGDUdlwYNSceaLoxbFW6i8_SFpPQCenJj9xsW2K2vabDsocsM8PV6DdQ_jxKgVow5MDk5VK2uRE6VCKLBd_QomWwpQ",
        		
        	"directory":"baseappcartao\\google-analytics\\leandro.vieira@aunica.com",
        	"project_id":"5b2bbcd421f64b2144401615",
        	"email":"leandro.vieira@aunica.com",
        	"__v":0
        }
        console.log("vai chamar o getWithNewTokens");
         getWithNewTokens(
				accounte,
				function(err, account){
	                if (err) {	
	                	console.log("err" + err);
						cb(err, null);
					}
	                else {
						query.start_date = parse_date(query.start_date);
						query.end_date = parse_date(query.end_date);
						extractGA(
							query,
							account.tokens,
							function(err, data){
								if(err) console.log('error: ' + err.error.message);
								response.send(data);
						});
					}
            });
    });

/*exports.extract = functions.https.onRequest(request , response){
	var query = request.query;
	var account = request.account;
	extractGA(query, account , function(resp){
		response.send(resp);
	})
}*/


function extractGA(query , tokens , cb){
	//function extract(query, tokens, cb, report) {
    var options = {
			url: 'https://www.googleapis.com/analytics/v3/data/ga',
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + tokens.access_token
			},
			qs: { //analisar como passar esses parametros no request
				// definir como sera o json a ser enviado
				ids: query.ids,
				'start-date': query.start_date,
				'end-date': query.end_date,
				metrics: query.metrics,
				dimensions: query.dimensions,
				'max-results': 10000,
				"start-index": 1,
				samplingLevel : 'HIGHER_PRECISION'
			}
		};

	if ( query.sort.trim() )    options.qs.sort    = query.sort.trim();
	if ( query.filters.trim() ) options.qs.filters = query.filters.trim();
	if ( query.segment.trim() ) options.qs.segment = query.segment.trim();
	console.log("vai fazer o request")
	request(options, function (err, r, data) {
		if(err){ console.log('error ' + err)};
		var json = JSON.parse(data);
		console.log("json" + json);
		cb(null , json);

	});
//}
}

function get_day(mod) {
	let	today   = new Date();
	let thatday = new Date(today);
	let month, day;

	mod = mod || 0;
	thatday.setDate(today.getDate() + mod);

	day = thatday.getDate() + '';
	day = day.length === 1 ? '0' + day : day;

	month = (thatday.getMonth() + 1) + '';
	month = month.length === 1 ? '0' + month : month;

	return [
		thatday.getFullYear(),
		month,
		day
	].join('-');
}

function parse_date(date_string) {
	var default_date = get_day(-1);

	if (date_string === 'D-1') {
		return default_date;
	}
	else if (date_string.indexOf('D') === 0) {
		return get_day(parseInt(date_string.replace('D',''), 10));
	}

	return date_string;
}

function getWithNewTokens(account, cb) {
    console.log("get with new tokens", account)
		refreshTokens(account.tokens, function(err, tokens){
			if (err) console.log(err);
			else {
				console.log("antes" + account.tokens);
				account.tokens = tokens;
				console.log("depois" + account.tokens);
				cb(null, account)
			}
		})
    
}


function refreshTokens(tokens, cb) {
    if (isExpiredTokens(tokens.expiry_date)) {
        var refresh_token = tokens.refresh_token;
        var oauth2Client = getOAuth2Client();

        oauth2Client.credentials = {
            refresh_token: refresh_token
        };

        oauth2Client.refreshAccessToken(function (err, tokens) {
            if ( tokens ) cb(null, tokens);
            else cb(err, null);
        });
    }
    else {
        cb(null, tokens);
    }
}


function isExpiredTokens(expiry_date) {
    if ( Date.now() > expiry_date ) return true;
    return false;
}


function getOAuth2Client(project_id) {
    project_id = project_id || '';
    return new OAuth2Client(
            config.google.client_id,
            config.google.client_secret,
            'urn:ietf:wg:oauth:2.0:oob'
        );
}


