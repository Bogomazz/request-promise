let request             = require('request');

let requestPromise = {};

requestPromise.send = (options)=>{
    return new Promise((resolve, reject) =>{
        request(options, (err, resp, body) =>{
            if (!err){
                let response = {
                    status: resp.statusCode,
                    body: typeof body == 'object'? body :JSON.parse(body),
                    headers: resp.headers
                }
                resolve(response);
                return;
            }
            else {
                reject(err);
            }
        })
    });
}

module.exports = requestPromise;