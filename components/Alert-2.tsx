import cn from 'classnames'

export default function Alert  ()  {

  return (
    <div
      className={cn('mt-10 ml-5 text-base md:text-lg lg:text-xl'
      )}
    >
        <>
            <Will you want to participate in HAMFEST 2026 (28-29 Nov) at NITK SURATHKAL MANGALURU.</strong>{' '}
            <a
                href={`https://hifi2026.nitk.ac.in/`}
                target="_blank" rel="noopener noreferrer"
                className="underline text-red-700 hover:text-success duration-200 transition-colors"
            >
                CLICK here to Register
            </a>
        </>
    </div>
  )
}

