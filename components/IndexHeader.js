import Image from 'next/image'
import quaternionDark from '../public/static/images/quaternion.png' // Have to declare up here to get img to show
import quaternionLight from '../public/static/images/quat-invert.png'
import { useTheme } from 'next-themes'

const Introduction = () => {
  const { theme } = useTheme() // Get the current theme using useTheme hook

  // Function to get the current theme mode
  const getThemeMode = () => {
    return theme === 'dark' ? 'dark' : 'light'
  }

  // Function to get the appropriate image source based on the theme
  const getImageSource = () => {
    return getThemeMode() === 'dark' ? quaternionLight : quaternionDark
  }
  return (
    <>
      <div className="w-full md:flex">
        <div className="flex-1 basis-1/2">
          <div className="flex-1">
            <h1 className="bg-clip-text py-4 text-center text-5xl font-extrabold duration-500 ease-in hover:scale-110 md:py-12">
              <span className="bg-gradient-to-r from-blue-600 via-rose-300 to-orange-300 bg-clip-text text-transparent">
                Apps
              </span>
              <br></br>
              <span className="bg-gradient-to-r from-blue-600 via-rose-300 to-orange-300 bg-clip-text text-transparent">
                Games
              </span>
              <br></br>
              <span className="bg-gradient-to-r from-blue-600 via-rose-300 to-orange-300 bg-clip-text text-transparent">
                Graphics
              </span>
            </h1>
          </div>
          <div className="flex-2">
            <p className="font-roboto bg-clip-text py-4 text-center text-2xl duration-500 ease-in hover:scale-110">
              Check out some of my recent projects below!
            </p>
          </div>
        </div>
        <div className="flex-2 flex basis-1/2 justify-center">
          <Image
            alt="Quaternion"
            src={getImageSource()}
            objectFit="contain"
            className="scale-90 overflow-hidden duration-1000 ease-in hover:rotate-180"
            width="500"
            height="0"
            layout="intrinsic"
          />
        </div>
      </div>
    </>
  )
}

export default Introduction
