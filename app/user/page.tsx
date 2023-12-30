import React from 'react'
import { getDestinationImage } from '../components/ImageAPI';
import Link from 'next/link';
import Image from 'next/image';

const UserPage = async() => {
  const destinationName = 'Buenos Aires';
  const apiKey = 'AIzaSyC0CuwQE_EPaAFRbCKOHmMzGbosguOEr74';
  const cx = '123dc09aea7fb4e5c';
  
  const imageUrl: string | null = await getDestinationImage(destinationName, apiKey, cx);

  //const imageUrl = 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68';
  

  return (
    
    <div className="flex flex-col gap-4">
        <div className="card lg:card-side bg-base-200 shadow-xl">

          <figure className='relative w-full max-w-[300px] min-w-[230px]'>
            <Image src={imageUrl} fill alt={'destination'} loading='lazy'></Image>
          </figure>

          <div className="card-body">
            <h2 className="card-title">{destinationName}</h2>
            <p>{destinationName} klas;jdflk ajeoi j;lkasdfi asl;d kfjpoijsakljasdfl klk; jsadf ;lkajsdf ;lkajsdf ;lkajsdf ;lkasjdf ;lkajsdf ;lkajsdf ;lkajsdf ;alskdjf ;alksdjf; alskdjf a;sldkjf; alskdjfdfl; kjasdfio asdf sadf asdf </p>
            <div className="card-actions justify-end">
            <button className="btn btn-outline btn-primary">
                <Link href='/user/currentInfo'>Current Info</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-base-200 shadow-xl">

          <figure className='relative w-full max-w-[300px] min-w-[230px]'>
            <Image src={imageUrl} fill alt={'destination'}></Image>
          </figure>

          <div className="card-body">
            <h2 className="card-title">{destinationName}</h2>
            <p>{destinationName} klas;jdflk ajeoi j;lkasdfi asl;d kfjpoijsakljasdfl klk; jsadf ;lkajsdf ;lkajsdf ;lkajsdf ;lkasjdf ;lkajsdf ;lkajsdf ;lkajsdf ;alskdjf ;alksdjf; alskdjf a;sldkjf; alskdjfdfl; kjasdfio asdf sadf asdf </p>
            <div className="card-actions justify-end">
            <button className="btn btn-outline btn-primary">
                <Link href='/user/currentInfo'>Current Info</Link>
              </button>
            </div>
          </div>
          </div>

          <div className="card lg:card-side bg-base-200 shadow-xl">

          <figure className='relative w-full max-w-[300px] min-w-[230px]'>
            <Image src={imageUrl} fill alt={'destination'}></Image>
          </figure>

          <div className="card-body">
            <h2 className="card-title">{destinationName}</h2>
            <p>{destinationName} klas;jdflk ajeoi j;lkasdfi asl;d kfjpoijsakljasdfl klk; jsadf ;lkajsdf ;lkajsdf ;lkajsdf ;lkasjdf ;lkajsdf ;lkajsdf ;lkajsdf ;alskdjf ;alksdjf; alskdjf a;sldkjf; alskdjfdfl; kjasdfio asdf sadf asdf </p>
            <div className="card-actions justify-end">
            <button className="btn btn-outline btn-primary">
                <Link href='/user/currentInfo'>Current Info</Link>
              </button>
            </div>
          </div>
          </div>

    </div>
    
    
// <img src={imageUrl} alt={destinationName} fetchPriority='low' loading='lazy' decoding='async'/

      
  )
}

export default UserPage

// api key AIzaSyC0CuwQE_EPaAFRbCKOHmMzGbosguOEr74
// search engine id 123dc09aea7fb4e5c