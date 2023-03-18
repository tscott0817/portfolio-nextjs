import Image from 'next/image'
import quaternion from '../public/static/images/quaternion.png'

const Introduction = () => {
  return (
    <>
      <div className="w-full md:flex">
        <div className="flex-1 basis-1/2">
          <div className="flex-1">
            <h1 className="bg-clip-text py-4 text-center text-5xl font-extrabold duration-500 ease-in hover:scale-110 md:py-12">
              <span className="bg-clip-text font-sans text-orange-300 text-transparent">Apps</span>
              <br></br>
              <span className="bg-clip-text font-sans text-rose-300 text-transparent">Games</span>
              <br></br>
              <span className="bg-clip-text font-sans text-sky-600 text-transparent">Graphics</span>
            </h1>
          </div>
          <div className="flex-2">
            <p className="bg-clip-text py-4 text-center font-mono text-2xl">
              Check out some of my recent projects below!
            </p>
          </div>
        </div>
        <div className="flex-2 flex basis-1/2 justify-center invert">
          <Image
            alt="Quaternion"
            // src="/../public/static/images/quaternion.png"
            src={quaternion}
            // Center the object
            objectFit="contain"
            // src="https://drive.google.com/uc?export=view&id=1ZTlUvHiImi6sJ8Ydg-GVoZ3Taarjhk_A"
            // src="https://drive.google.com/uc?export=view&id=1dIniTvSGw0FtnlHhFM6WQlzCOfTzwmvk"
            className="scale-90 overflow-hidden duration-1000 ease-in hover:rotate-180"
            width="500"
            height="0"
            layout="intrinsic"
            //sizes="(max-width: 768px) 100vw,
            //       (max-width: 1200px) 50vw,
            //       33vw"
          />
        </div>
      </div>
    </>
  )
}

export default Introduction
