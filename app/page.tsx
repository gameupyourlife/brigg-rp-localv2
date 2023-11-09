import Background from '@/components/Background/Background'
import FAQ from '@/components/FAQ/FAQ'
import Hero from '@/components/Hero/Hero'
import HoverCard from '@/components/HoverCard/HoverCard'
import TheProject from '@/components/TheProject/TheProject'
import YourAdventure from '@/components/HoverCard/YourAdventure'
import OurFeatures from '@/components/OurFeatures/OurFeatures'
import Discord from '@/components/Discord/Discord'


export default function Home() {
  return (
    <main className='m-0 p-0 w-full' >
      {/* <div className="relative w-[60vw] aspect-auto bg-black ">
        <Image src="/HeroImage.png" alt="Current Image" layout={'fill'} objectFit={'contain'} />
      </div> */}
                <Background />

        <Hero/>
        <TheProject/>
        <OurFeatures/>
        <YourAdventure />
        <Discord/>
        <FAQ/>
    </main>
  )
}
