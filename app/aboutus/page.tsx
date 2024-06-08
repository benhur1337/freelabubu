import { Heading } from "@/components/aboutus"
import { Title } from "@/components/aboutus"
import Image from "next/image";
import Link from "next/link";


export default function Page() {
    return (
        <div className="justify-center p-8">
            <div className="select-none text-6xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text font-extrabold">
                Documentation
            </div>
            <Heading>
                Unveiling the Spectrum: A Comprehensive Exploration of Autism Spectrum Disorder
            </Heading>
            <div>
                Autism Spectrum Disorder (ASD), a neurodevelopmental condition, has captured the attention of researchers, educators, and families for decades. Its enigmatic nature, characterized by a diverse range of presentations, has fueled a constant pursuit of understanding. This essay delves into the complexities of ASD, unveiling the spectrum of experiences, exploring the core symptoms, delving into potential causes, and examining the landscape of support and intervention.
            </div>
            <Heading>
            Navigating the Spectrum: A Spectrum of Presentations
            </Heading>
            <div>
            The defining characteristic of ASD lies in its heterogeneity. Unlike a uniform condition, it manifests across a spectrum, encompassing a wide range of presentations. Individuals may exhibit varying degrees of social communication challenges, restricted interests, and repetitive behaviors. Some may struggle with all three core areas, while others demonstrate more prominent difficulties in specific domains. This variability necessitates a personalized approach to understanding and supporting each individual on the spectrum.
            </div>
            <Heading>Delving into the Core Symptoms: Social Communication Challenges</Heading>
            <div>Social interaction, a cornerstone of human connection, often presents significant hurdles for individuals with ASD. They may struggle with making eye contact, initiating conversations, or understanding nonverbal cues such as facial expressions and body language. Difficulty interpreting the nuances of social interactions can lead to social isolation and feelings of loneliness. Furthermore, individuals with ASD may exhibit differences in perspective-taking, also known as "theory of mind." This can make it challenging for them to understand the thoughts, feelings, and intentions of others, hindering their ability to navigate social situations effectively.</div>
        </div>
    )
}