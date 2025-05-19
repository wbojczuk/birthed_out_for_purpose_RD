import BibleVerse from "@/app/(mainsite)/components/homepage/BibleVerse/BibleVerse";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Helping from "@/app/(mainsite)/components/homepage/Helping/Helping";
import Mission from "@/app/(mainsite)/components/homepage/Mission/Mission";
import OurBook from "@/app/(mainsite)/components/homepage/OurBook/OurBook";


export default function Home() {
  return (
    <>
      <Header />
      <Helping />
      <Mission />
      <BibleVerse />
      <OurBook />
    </>
  )
}
