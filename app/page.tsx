import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import path from "path";
//The Nomad Page is a digital nomad-based travel agency. We provide
//curated destinations through strategic research.
export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center bg-base-200">
        <div className="max-w-screen-md min-h-[100vh] w-full flex flex-col">
          <div className=" pt-20 justify-center mx-auto">
            <div className="card max-w-3xl">
              <div className="card-body">
                <h1 className="card-title text-4xl text-left">
                  The Nomad Page is a digital nomad oriented travel agency.{" "}
                  <br />
                  <br />
                  We provide curated destinations through strategic research.
                </h1>
              </div>
            </div>
          </div>

          <div className="divider divider-primary py-20"></div>

          <div className="card max-w-3xl image-full">
            <figure className="">
              <img
                src="https://api.time.com/wp-content/uploads/2022/07/Worlds-Greatest-Places-2022-BaliIndonesia.jpeg?quality=85&w=1600"
                alt="image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-4xl p-3 pt-16 justify-center">
                Discover More!
              </h2>
              <p className="justify-center text-center text-lg px-2">
                Discover tailored travel recommendations for your nomadic
                lifestyle. Our AI-based recommendation system analyzes your
                preferences, providing curated destinations for work and
                adventure.
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-secondary">
                  <Link href="/nomadInsights"> Learn More</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="divider divider-primary py-20"></div>

          <footer className="footer p-10 bg-base-200 text-base-content">
            <nav>
              <header className="footer-title">Services</header>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <header className="footer-title">Company</header>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <header className="footer-title">Legal</header>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
            <form>
              <header className="footer-title">Newsletter</header>
              <fieldset className="form-control w-80">
                <label className="label">
                  <span className="label-text">Enter your email address</span>
                </label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered join-item"
                  />
                  <button className="btn btn-primary join-item">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </footer>
        </div>
      </div>
    </main>
  );
}
