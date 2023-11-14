"server actions";

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    port: 4040,
    user: "root",
    password: "root",
    database: "briggtest"
});

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function getTransactionData() {
    console.log("getTransactionData");

    //Get Data from DB
    const data = await pool.promise().query(`SELECT * FROM transactions`);
    
    // await sleep(1000);
    return data;
}

export async function writeDummyData() {
    console.log("writeDummyData");
    var data = {
        event: "paycheck",
        betrag: 2000,
        sender: "state",
        empfaenger: '{ "name": "Thilo Leitner", "license": "license:1234567890" }',
        // empfaenger: "T.Leitner",
        caller: "qb-jobs"
    }

    // return new Promise((resolve, reject) => {
    //     pool.query(`INSERT INTO transactions (event,sender,empfaenger,betrag,caller) VALUES ('${data.event}','${data.sender}','${data.empfaenger}','${data.betrag}','${data.caller}')`, (error: any, results: any) => {
    //         if (error) {
    //             reject(error);
    //         } else {
    //             console.log(results);
    //             resolve(200);
    //         }
    //     });
    // });


    console.log("writeDummyData - pre loop");


    for (let index = 0; index < 20; index++) {
        console.log("writeDummyData - loop");
        data.empfaenger = '{ "name": "Thilo Leitner", "license": "license:1234567890" }',

            // await pool.promise().query(`INSERT INTO transactions (event,sender,empfaenger,betrag,caller) VALUES ('${data.event}','${data.sender}','${data.empfaenger}','${data.betrag}','${data.caller}')`, (error: any, results: any) => {
            //     if (error) {
            //     } else {
            //         console.log(results);
            //     }
            // });
            await pool.promise().query(`INSERT INTO transactions (event,sender,empfaenger,betrag,caller) VALUES ('${data.event}','${data.sender}','${data.empfaenger}','${data.betrag}','${data.caller}')`);


        data.empfaenger = '{ "name": "Franz Ferdinant", "license": "license:987654321" }';


        await pool.promise().query(`INSERT INTO transactions (event,sender,empfaenger,betrag,caller) VALUES ('${data.event}','${data.sender}','${data.empfaenger}','${data.betrag}','${data.caller}')`);

        await sleep(1000);
    }
    console.log("writeDummyData - post loop");


    return 200;
}