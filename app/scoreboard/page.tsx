'use client'

import BackgroundBGColor from "@/components/Background/BackgroundBGColor";
import { getAllPlayerNamesFromDB, readDataFromDB, writeJsonDataToDB } from "@/utils/dbConnection";
import Image from "next/image";

// export const revalidate = 300 // revalidate the data at most every 5 min
// export const dynamic = 'force-dynamic'

async function getAllPlayerNames(arr: Array<any>) {
    // var allPlayerNames:any = [];
    // arr.map(async(key: any, index: any) => {
    //     var playerName = await getAllPlayerNamesFromDB(key.license);
    //     allPlayerNames.push(playerName);
    // });
    // return allPlayerNames;

    return await getAllPlayerNamesFromDB();

}

export default async function Page() {
    return (
        <div>
            <h1 className="text-6xl font-bold">WIP</h1>
        </div>
    );
}


// export async function Scoreboard() {
//     // const leg: any = await writeJsonDataToDB();
//     // const playersInTop30: any = await readDataFromDB();
//     // const allPlayerNames: any = await getAllPlayerNames(playersInTop30);
//     // const leg: any = null;
//     // const playersInTop30: any = null;
//     // const allPlayerNames: any = null;
//     const leg: any = await fetch("http://localhost:3000/api/scoreboard/JsonToDB").then((res) => res.json());
//     const playersInTop30: any = await fetch("http://localhost:3000/api/scoreboard/ReadDataFromDB").then((res) => res.json());
//     const allPlayerNames: any = await fetch("http://localhost:3000/api/scoreboard/GetAllPlayersFromDB").then((res) => res.json());

//     var numOfChars: number = 0;
//     var zero = 0;

//     return (
//         <main className="pt-20">
//             <BackgroundBGColor />
//             <div className="max-w-[95vw] px-4  pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto  ">
//                 <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
//                     <h2 className="text-4xl font-bold md:text-4xl md:leading-tight text-[var(--text)]">
//                         Leaderboard
//                     </h2>
//                 </div>
                
//                 <div className="flex justify-center inherit-width ">
//                     <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
//                         {playersInTop30.map((key: any, index: any) => (
//                             <div key={key.license} className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
//                                 <h2 className="text-4xl font-bold pr-4 border-r h-full text-center self-center justify-center flex items-center w-20">
//                                     {index + 1}.
//                                 </h2>
//                                 <div className="sm:flex sm:flex-col sm:h-full sm:justify-center ">
//                                     <div className="sm:pb-2">
//                                         <h3 className="font-medium text-gray-800 dark:text-gray-200">
//                                             {key.name}
//                                         </h3>
//                                         <p className="mt-1 text-xs uppercase text-gray-500 overflow-hidden">
//                                             {allPlayerNames.map((akey: any) => (akey.license == key.license && akey.cid < 3 &&

//                                                 <span key={akey} className="text-xs uppercase text-gray-500">{akey.firstname} {akey.lastname} | </span>))}
//                                         </p>
//                                         <p className="mt-1 text-xs uppercase text-gray-500">
//                                             {(key.playtime / 60).toFixed(1)} h
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </main>
//     )
// }


// {playersInTop30.map((key: any, index: any) => (

//     <div key={key.license} className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
//         {/* <img
//     className="rounded-lg w-20 h-20"
//     alt="No alt"
//     src="/Team/adrian.png"
// /> */}
//         <h2 className="text-4xl font-bold pr-4 border-r h-full text-center self-center justify-center flex items-center w-20">
//             {index + 1}.
//         </h2>
//         <div className="sm:flex sm:flex-col sm:h-full sm:justify-center ">
//             <div className="sm:pb-2">
//                 <h3 className="font-medium text-gray-800 dark:text-gray-200">
//                     {key.name}
//                 </h3>
//                 <p className="mt-1 text-xs uppercase text-gray-500 overflow-hidden">
//                     {allPlayerNames.map((akey: any) => (akey.license == key.license && numOfChars++ < 2 &&

//                         <span key={akey} className="text-xs uppercase text-gray-500">{akey.firstname} {akey.lastname} | </span>))}
//                 </p>
//                 <p className="mt-1 text-xs uppercase text-gray-500">
//                     {(key.playtime / 60).toFixed(1)} h
//                 </p>
//             </div>
//             <div className="mt-2 sm:mt-auto space-x-2.5">


//             </div>
//         </div>
//         {/* Really wired way to reset the number of chars to 0 */}
//         <div className="hidden">
//             {(numOfChars = 0)}

//         </div>
//     </div>
// ))}