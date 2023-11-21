
"use server";

import fs from 'fs';
const mysql = require('mysql2');

var pool = mysql.createPool({
    host: "82.165.231.16",
    port: "3306",
    user: "EmergencyOS",
    password: "BriggRP!2023",
    database: "QBCoreMain"
});

export async function getLocalJsonData(): Promise<any[]> {

    return new Promise((resolve, reject) => {
        console.log("process.cwd()", process.cwd());
        if (process.cwd().includes("var/www/html")) {
            fs.readFile("../../../rpserver/main/txData/default/data/playersDB.json", 'utf8', (err, data) => {
                if (err) {
                    // console.error(err);
                    reject(err);
                } else {
                    resolve(JSON.parse(data));
                }
            });
        }
        else {
            // fs.readFile("public/playersDB.json", 'utf8', (err, data) => {
            //     if (err) {
            //         // console.error(err);  
            //         reject(err);
            //     } else {
            //         resolve(JSON.parse(data));
            //     }
            // });
        }
    });
}

export async function writeJsonDataToDB() {
    const data: any = await getLocalJsonData();
    // console.log(data);

    pool.getConnection(function (err: any, connection: any) {
        if (err) throw err;

        data.players.forEach(function (element: any) {
            var playerLicense = "license:" + element.license;
            var playerLastconn = element.tsLastConnection;
            var playerStart = element.tsJoined;
            var playerPlaytime = element.playTime;

            connection.query(`UPDATE players SET playtime = "${playerPlaytime}", lstconnect = "${playerLastconn}", start = "${playerStart}" WHERE license = "${playerLicense}"`, function (err: any, result: any, fields: any) {
                if (err) console.error(err);
                // console.log(result);
            });
        });
        pool.releaseConnection(connection);

    });
}

function getUnixTimestampTwoWeeksAgo(): number {
    const now = new Date();
    const twoWeeksAgo = new Date(now.getTime() - (14 * 24 * 60 * 60 * 1000));
    return twoWeeksAgo.getTime() / 1000 | 0;
}

export async function readDataFromDB() {
    var time = getUnixTimestampTwoWeeksAgo();

    return new Promise((resolve, reject) => {
        pool.getConnection(function (err: any, connection: any) {
            if (err) throw err;
            connection.query(`SELECT name, license, playtime, start, firstname, lastname FROM players WHERE lstconnect > "${time}" GROUP BY license ORDER BY playtime DESC LIMIT 30`, function (err: any, result: any, fields: any) {
                if (err) {
                    // console.error(err);
                    pool.releaseConnection(connection);
                    reject(err);
                } else {
                    // console.log(result);
                    pool.releaseConnection(connection);
                    resolve(result);
                }
            });
        });
    })
}

// export async function getAllPlayerNamesFromDB(license: any) {
//     console.log("license", license);
//     con.getConnection(async function (err: any) {
//         // { WHERE lstconnect > "${time}"   }     
//         console.log("----");

//         con.query(`SELECT * FROM players `, 
//         async function (err: any, result: any, fields: any) {

//                 console.log("result", result);
//                 console.log("fields", fields);

//                 con.release();
//                 return result;
//         });
//     });
// }

export async function getAllPlayerNamesFromDB() {

    return new Promise((resolve, reject) => {
        pool.getConnection(function (err: any, connection: any) {
            if (err) throw err;
            connection.query(`SELECT cid, name, license, playtime, start, firstname, lastname FROM players ORDER BY cid ASC`, function (err: any, result: any, fields: any) {
                if (err) {
                    // console.error(err);
                    pool.releaseConnection(connection);
                    reject(err);
                } else {
                    // console.log(result);
                    pool.releaseConnection(connection);
                    resolve(result);
                }
            });
        });
    })
}




