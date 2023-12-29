const mysql = require('mysql2');

var pool = mysql.createPool({
    host: "82.165.231.16",
    port: "3306",
    user: "EmergencyOS",
    password: "BriggRP!2023",
    database: "HomePage"
});

// var pool = mysql.createPool({
//     host: "localhost",
//     port: "4040",
//     user: "root",
//     password: "root",
//     database: "briggtest"
// });



export async function logClientData({ data, tries }: {data:any, tries?:number}) {
    // console.log("data ", data);
    if (!tries) {
        tries = 0;
    }
    if (tries && tries > 3) {
        return;
    }

    pool.query(`INSERT INTO clientlog (ip,refUrl,browser,host,href) VALUES ("${data.ip}", "${data.refUrl}", "${data.browser}", "${data.host}", "${data.href}");`, (error: any, results: any) => {
        if (error) {
            // console.log(error);
            return;
        } else {
            return;
        }
    });
}

