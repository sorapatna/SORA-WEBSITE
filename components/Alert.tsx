import cn from 'classnames'

export default function Alert  ()  {

  return (
    <div
      className={cn('mt-10 ml-5 text-base md:text-lg lg:text-xl'
      )}
    >
        <>
            <strong>HAMFEST 2026 will be held on 28-29 Nov. 2026 (NITK SURATHKAL, MANGALURU).</strong>{' '}
            <a
                href={`https://hifi2026.nitk.ac.in`}
                target="_blank" rel="noopener noreferrer"
                className="underline text-red-700 hover:text-success duration-200 transition-colors"
            >
              Want to participate? CLICK hereto Register
            </a>
        </>
    </div>
  )
}
