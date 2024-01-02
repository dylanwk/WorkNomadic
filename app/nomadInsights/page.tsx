import React from 'react'
import Link from 'next/link'

const InsightPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Nomad Page Insight</h1>
            <p className="py-6">
                Fill form above and hit Suggest to find your perfect destinations.
            </p>
              <button className="btn btn-primary"><Link href="/user/currentInfo">User</Link></button>
          </div>
        </div>
      </div>
  )
}

export default InsightPage