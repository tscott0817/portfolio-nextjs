import Image from 'next/image'
//import { TypeAnim } from 'components/TypeAnim'

const Introduction = () => {
  return (
    <>
      <div className="w-full md:flex">
        <div className="flex-1 basis-1/2">
          <div className="flex-1">
            {/*<h1 className="bg-gradient-to-r from-blue-600 via-rose-300 to-orange-300 bg-clip-text py-4 text-center text-5xl font-extrabold text-transparent md:py-12">*/}
            <h1 className="bg-clip-text py-4 text-center text-5xl font-extrabold md:py-12">

            Hey there, I'm Tyler. <br></br> I like solving problems with programming.
            </h1>
          </div>
          <div className="flex-2">
            <p className="bg-clip-text py-4 text-center text-2xl">
              {/*<TypeAnim />*/}
              I make desktop applications, enterprise software, and games.
              <br></br>
              Check out some of my recent projects below. :)
            </p>
          </div>
        </div>
        {/*<div className="flex-2 flex basis-1/2 justify-center">*/}
        {/*  <Image*/}
        {/*    alt="Animation"*/}
        {/*    src="/../public/static/images/vector-hands.png"*/}
        {/*    // src="https://drive.google.com/uc?export=view&id=1ZTlUvHiImi6sJ8Ydg-GVoZ3Taarjhk_A"*/}
        {/*    // src="https://drive.google.com/uc?export=view&id=1dIniTvSGw0FtnlHhFM6WQlzCOfTzwmvk"*/}
        {/*    className="overflow-hidden duration-500 ease-in hover:scale-110 motion-safe:animate-pulse"*/}
        {/*    width="200"*/}
        {/*    height="300"*/}
        {/*    layout="intrinsic"*/}
        {/*    //sizes="(max-width: 768px) 100vw,*/}
        {/*    //       (max-width: 1200px) 50vw,*/}
        {/*    //       33vw"*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
    </>
  )
}

export default Introduction