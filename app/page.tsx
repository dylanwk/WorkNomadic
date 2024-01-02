import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import path from "path";

export default function Home() {
  return (
    <main>
      <div
        className="hero min-h-screen rounded-xl"
        style={{
          backgroundImage: `url("https://api.time.com/wp-content/uploads/2022/07/Worlds-Greatest-Places-2022-BaliIndonesia.jpeg?quality=85&w=1600")`,
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Travel the World 🌎</h1>
            <p className="mb-5">
              <br />Discover tailored travel recommendations for your nomadic
              lifestyle. Our AI-based recommendation system analyzes your preferences,
              providing curated destinations for work and adventure. <br /> <br />
              
              Join our email list for exclusive insights into travel trends, remote work
              tips, and hidden gems. Subscribe now find your next destination!
            </p>
            <button className="btn btn-primary"><Link href='/joinNomadPage'>Lets Explore!</Link></button>
          </div>
        </div>
      </div>
    </main>
  );
}
