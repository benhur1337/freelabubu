import { Heading } from "@/components/aboutus"
import { Title } from "@/components/aboutus"
import Image from "next/image";


export default function Page(){
    return(
        <div>
            <Title>About Us</Title>
            <Heading>Our Goals</Heading>
            <div className="text-1xl p-3">Our goals is to gamble and earn money from an unsuspecting kid and to scam some people. If you lose the russian roulette game, you will never see the light of day again. and if you gamble til you are broke and your wife left you. Don't blame us, its ur problem. Oh yea to add to that, our goal is also to see people suffer from free labubu haunting u at night til ur ded.</div>
            <Image
            src={"/downloading.jpeg"}
            height = {250}
            width = {250}
            alt="about us picture"></Image>
            <Heading>Meet the devs</Heading>
            <div className="text-1xl p-3">Benard L. Alford</div>
            <Image 
            src={"/benardxd.jpeg"}
            height={250}
            width={250}
            alt="I don't know what to say"></Image>
            <div className="text-1xl p-3">Benard L. Alford's Note: I like maids</div>

        </div>
    )
}