import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, secondHref }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="flex items-center justify-between">
        <div>
          {secondHref && (
            <Link
              href={secondHref}
              className="text-secondary-500 hover:text-secondary-600 dark:hover:text-secondary-400 text-base font-medium leading-6"
              aria-label={`Second Link to ${title}`}
            >
              Go to Second Link &rarr;
            </Link>
          )}
        </div>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Go to GitHub &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
