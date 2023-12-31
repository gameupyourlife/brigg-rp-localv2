// "use client"

import React from 'react'
// import { useState, useEffect } from 'react';



// export default function Page() {


//     return (
//         <>
//             <select value={person} onChange={e => {
//                 setPerson(e.target.value);
//             }}>
//                 <option value="Alice">Alice</option>
//                 <option value="Bob">Bob</option>
//                 <option value="Taylor">Taylor</option>
//             </select>
//             <hr />
//             <p><i>{bio ?? 'Loading...'}</i></p>
//         </>
//     );
// }



const Scoreboard = ({ playersInTop30, allPlayerNames }: { playersInTop30: any, allPlayerNames: any }) => {
    // const [person, setPerson] = useState('Alice');
    // const [bio, setBio] = useState(null);

    // useEffect(() => {
    //     async function startFetching() {
    //       setBio(null);
    //       const result = await fetchBio(person);
    //       if (!ignore) {
    //         setBio(result);
    //       }
    //     }
    
    //     let ignore = false;
    //     startFetching();
    //     return () => {
    //       ignore = true;
    //     }
    //   }, [person]);

    return (
        <div className="flex justify-center inherit-width ">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
                {playersInTop30.map((key: any, index: any) => (
                    <div key={key.license} className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                        <h2 className="text-4xl font-bold pr-4 border-r h-full text-center self-center justify-center flex items-center w-20">
                            {index + 1}.
                        </h2>
                        <div className="sm:flex sm:flex-col sm:h-full sm:justify-center ">
                            <div className="sm:pb-2">
                                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                    {key.name}
                                </h3>
                                <p className="mt-1 text-xs uppercase text-gray-500 overflow-hidden">
                                    {allPlayerNames.map((akey: any) => (akey.license == key.license && akey.cid < 3 &&

                                        <span key={akey} className="text-xs uppercase text-gray-500">{akey.firstname} {akey.lastname} | </span>))}
                                </p>
                                <p className="mt-1 text-xs uppercase text-gray-500">
                                    {(key.playtime / 60).toFixed(1)} h
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Scoreboard