import cn from 'classnames'

export default function Alert  ()  {

  return (
    <div
      className={cn('mt-10 ml-5 text-base md:text-lg lg:text-xl'
      )}
    >
        <>
            <strong>We are available on 145.100 MHZ(Simplex) as well as on Talk Group-27304 (Digital Mode).</strong>{' '}
            <a
                href={`https://wa.me/+918578003221`}
                target="_blank" rel="noopener noreferrer"
                className="underline text-red-700 hover:text-success duration-200 transition-colors"
            >
                What's App For more details
            </a>
        </>
    </div>
  )
}

