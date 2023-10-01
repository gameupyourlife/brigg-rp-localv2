import BackgroundBGColor from "@/components/Background/BackgroundBGColor";
import Image from "next/image";



export default async function Anfänger() {


    return (
        <main className="">
            <BackgroundBGColor />

            <div className="flex flex-col items-center pt-20 ">
                <div className="max-w-2xl pb-10 ">

                <h2 className="text-4xl font-bold pb-5">
                    GTA RP Server für Anfänger
                </h2>
                <p className="pb-10">
                    Willkommen bei Brigg RP, deinem idealen Einstieg in die aufregende Welt des GTA Roleplay (GTA RP)! Wir sind stolz darauf, einen einladenden und anfängerfreundlichen Server zu bieten, der dir den Start in das Abenteuer des Rollenspiels in Los Santos erleichtert.
                </p>
                <h3 className="text-2xl font-bold pb-3">
                    Warum Brigg RP für Anfänger?
                </h3>
                <ul  className="text-[var(--text-lighter)] pb-10">
                    <li className="mb-1"><span className="text-[var(--text)] font-bold">Anfängerfreundlich: </span>Unser Server wurde speziell für neue RP-Spieler entwickelt. Wir heißen dich herzlich willkommen und unterstützen dich bei deinen ersten Schritten in Los Santos.</li>
                    <li className="mb-1"><span className="text-[var(--text)] font-bold">Mittelgroß: </span>Brigg RP bietet eine lebendige Spielerbasis, ohne überwältigend zu sein. Du kannst dich leicht in die Community einfinden und neue Freunde finden.</li>
                    <li className="mb-1"><span className="text-[var(--text)] font-bold">Einfache Regeln: </span>Unsere Regeln sind klar und verständlich, um ein respektvolles und unterhaltsames RP-Erlebnis für alle zu gewährleisten.</li>
                    <li className="mb-1"><span className="text-[var(--text)] font-bold">Hilfsbereite Community: </span>Unsere Spieler und Teammitglieder sind gerne bereit, Fragen zu beantworten und dir bei deinem RP-Abenteuer zu helfen.</li>
                    <li className="mb-1"><span className="text-[var(--text)] font-bold">Kreative Freiheit: </span>Bei Brigg RP hast du die Freiheit, deinen eigenen Charakter zu gestalten und deine eigene Geschichte zu schreiben.</li>
                    <li><span className="text-[var(--text)] font-bold">Anfängerfreundlich: </span>Unser Server wurde speziell für neue RP-Spieler entwickelt. Wir heißen dich herzlich willkommen und unterstützen dich bei deinen ersten Schritten in Los Santos.</li>
                </ul>
                <h3 className="text-2xl font-bold pb-3">
                    Dein Einstieg in Los Santos
                </h3>
                <p>
                    Ob du nun als Gesetzeshüter, Arzt, Gangmitglied oder Geschäftsmann in die Welt von Los Santos eintauchen möchtest, bei Brigg RP findest du die Möglichkeiten und Unterstützung, die du brauchst.
                    <br />
                    <br />
                    Begib dich auf eine Reise voller spannender Geschichten, unerwarteter Wendungen und unvergesslicher Abenteuer. Brigg RP ist der Ort, an dem deine RP-Reise beginnt.
                    <br />
                    <br />
                    Schließe dich unserer Community an, erforsche die Straßen von Los Santos und schreibe deine eigene Geschichte. Wir freuen uns darauf, dich in unserer RP-Familie willkommen zu heißen und gemeinsam die Magie von GTA RP zu erleben!
                </p>
                </div>
            </div>
        </main>
    )
}