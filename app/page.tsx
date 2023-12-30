import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Nomad Page Insight</h1>
            <p className="py-6">
              Find your prefect destination with Nomad Page Insight.
            </p>
              <button className="btn btn-primary"><Link href="/user">User</Link></button>
          </div>
        </div>
      </div>
    </main>
  );
}
