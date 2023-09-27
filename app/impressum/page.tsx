import Modal from '@/components/Modal/Modal'
import TeamCard from '@/components/TeamCards/TeamCard'
import TeamCardHolder from '@/components/TeamCards/TeamCardHolder'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Brigg RP - Impressum',
    description: 'Das Impressum von Brigg RP.',
}

export default function Home() {
    return (
        <main className='pt-20 bg-[var(--background)] h-full px-auto  justify-center min-h-screen w-full  text-[var(--text)]' >
            <div className='px-5 md:px-20 gap-5 flex flex-col pb-10'>
                <h2 className='text-4xl font-bold'>
                    IMPRESSUM
                </h2>

                <ul>
                    <li>
                        Mirco Richtberg
                    </li>
                    <li>
                        Hauptstr. 77
                    </li>
                    <li>
                        64683 Einhausen
                    </li>
                </ul>

                <div>
                    <h3 className='text-2xl font-medium'>
                        Kontakt
                    </h3>
                    <p className="text-[var(--text-lighter)]" >
                        E-Mail: phillip.abendroth91@gmail.com
                    </p>
                </div>

                <div>
                    <h3 className='text-2xl font-medium'>
                    Haftungsausschluss
                    </h3>
                    <p className="text-[var(--text-lighter)]">
                        Dieser Haftungsausschluss gilt als Bestandteil des Internetangebots der Website, von der aus Sie verwiesen wurden. Wenn Abschnitte oder einzelne Bestimmungen dieser Erklärung nicht, nicht mehr oder nicht vollständig legal oder korrekt sind, bleiben der Inhalt und die Gültigkeit der anderen Teile von dieser Tatsache unbeeinflusst.
                    </p>
                </div>

                <div>
                    <h3 className='text-2xl font-medium'>
                    Haftung für den Inhalt dieser Website
                    
                    </h3>
                    <p className="text-[var(--text-lighter)]">
                    Der Inhalt unserer Website wurde mit größter Sorgfalt erstellt. Wir können jedoch nicht die Richtigkeit, Vollständigkeit und Aktualität des Inhalts garantieren. Als Dienstleister sind wir gemäß den allgemeinen Gesetzen für unsere eigenen Inhalte auf diesen Seiten verantwortlich. Wir sind jedoch nicht verpflichtet, übertragene oder gespeicherte Informationen Dritter zu überwachen oder Umstände zu untersuchen, die auf illegale Aktivitäten hinweisen. Die Verpflichtung, die Verwendung von Informationen gemäß den allgemeinen Gesetzen zu entfernen oder zu blockieren, bleibt unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer bestimmten Zuwiderhandlung möglich. Wenn wir Kenntnis von solchen Verstößen erhalten, werden wir diese Inhalte unverzüglich entfernen.

                    </p>
                </div>

                <div>
                    <h3 className='text-2xl font-medium'>
                    Haftung für Links zu Websites Dritter
                    </h3>
                    <p className="text-[var(--text-lighter)]">
                    Unsere Website enthält Links zu Websites Dritter, deren Inhalt nicht unter unserer Kontrolle steht. Daher können wir für solche externen Inhalte keine Haftung übernehmen. In jedem Fall haftet der Betreiber oder Anbieter von Informationen für die verlinkten Websites für deren Inhalt. Die verlinkten Seiten wurden zum Zeitpunkt der Erstellung des Links auf mögliche Rechtsverletzungen überprüft. Zum Zeitpunkt der Erstellung der Links waren für uns keine Rechtsverletzungen erkennbar. Eine ständige Überwachung des Inhalts verlinkter Seiten ohne konkrete Hinweise auf einen Verstoß ist jedoch nicht zumutbar. Wir werden solche Links sofort entfernen, wenn wir Kenntnis von Rechtsverletzungen erhalten.
                    </p>
                </div>

                <div>
                    <h3 className='text-2xl font-medium'>
                    Urheberrechte
                    </h3>
                    <p className="text-[var(--text-lighter)]">
                    Die Betreiber dieser Website bemühen sich, stets die Urheberrechte anderer zu respektieren oder selbst erstellte und lizenzfreie Werke zu verwenden. Die Inhalte und Werke der Website-Betreiber dieser Website unterliegen dem Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Das Kopieren, Verarbeiten, Verteilen und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung des jeweiligen Autors oder Urhebers. Downloads und Kopien dieser Website sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                    </p>
                </div>
            </div>

        </main>
    )
}
