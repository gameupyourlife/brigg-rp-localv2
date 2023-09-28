import Image from "next/image";

export default function Scoreboard() {
    const arr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
    return (
        <main className="pt-20 bg-[var(--background)]">

            <div className="max-w-[85rem] px-4  pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto  ">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-4xl font-bold md:text-4xl md:leading-tight text-[var(--text)]">
                        Scoreboard
                    </h2>
                    {/* <p className="mt-1 text-gray-600 dark:text-gray-400">Creative people</p> */}
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
                    {arr.map(e => ( 

                    <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                        {/* <img
                            className="rounded-lg w-20 h-20"
                            alt="No alt"
                            src="/Team/adrian.png"
                        /> */}
                        <h2 className="text-4xl font-bold pr-4 border-r h-full text-center self-center justify-center flex items-center w-20">
                            {e}.
                        </h2>
                        <div className="sm:flex sm:flex-col sm:h-full sm:justify-center ">
                            <div className="sm:pb-2">
                                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                    gameup
                                </h3>
                                <p className="mt-1 text-xs uppercase text-gray-500">
                                    Thilo Leitner, Manfred Krause
                                </p>
                            <p className="mt-1 text-xs uppercase text-gray-500">
                                    124,4h Spielzeit
                                </p>
                            </div>
                            <div className="mt-2 sm:mt-auto space-x-2.5">
                                

                            </div>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </main>
    )
}