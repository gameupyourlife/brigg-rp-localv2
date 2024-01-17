import CustomButton from '@/components/CustomButton';
import { TeamCard } from '@/components/TeamCard';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Brigg RP - Team',
    description: 'Das aktive, kompetente und freundliche Team von Brigg RP.',
}

export default function Team2() {
    return (
        <>
            <div className="pt-20 bg-[var(--background)]">

                <div className="max-w-[85rem] px-4  pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto  ">
                    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 className="text-4xl font-bold md:text-4xl md:leading-tight text-[var(--text)]">
                            Das Brigg Team
                        </h2>
                        {/* <p className="mt-1 text-gray-600 dark:text-gray-400">Creative people</p> */}
                    </div>

                    

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
                        <TeamCard image='/Team/adrian.png' name='@adrian_prinsen' role='Projektleitung' twitch="https://www.twitch.tv/drygin91" />
                        <TeamCard image='/Team/gameup.png' name='@gameup_' role='Admin | Developer' twitch="https://www.twitch.tv/gameupyourlife" github="https://github.com/gameupyourlife"/>
                        <TeamCard image='/Team/saint.png' name='@lob_star' role='Community Manager | Support Leitung' twitch="https://www.twitch.tv/king_lost_tv" />
                        <TeamCard image='/Team/dean.png' name='@.marcdean' role='Support' twitch="https://www.twitch.tv/kekksdog" />
                        <TeamCard image='/Team/luis.jpg' name='@nasu9748' role='Moderator'   />
                        

                        <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                        <img
                            className="rounded-lg w-20 h-20"
                            alt="No alt"
                            src="https://preline.co/assets/img/160x160/img1.jpg"
                        />
                        <div className="">
                            <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                Wir suchen neue Mitglieder!
                            </h3>
                            <a
                                className="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500"
                                href="https://discord.gg/jnrYzNcpSJ"
                                target='_blank'
                            >
                                Bewirb dich jetzt!
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </>

    );
}
