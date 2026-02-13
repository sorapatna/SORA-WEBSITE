import cn from 'classnames'

export default function EVENTALERT  ()  {

  return (
    <div
      className={cn('mt-10 ml-5 text-base md:text-lg lg:text-xl'
      )}
    >
        <>
            <strong>NEW EVENT IN MARCH @)@^.</strong>{' '}
            <a
                href={`https://wa.me/+918578003221`}
                target="_blank" rel="noopener noreferrer"
                className="underline text-red-700 hover:text-success duration-200 transition-colors"
            >
                Look Event Calendar below For more details
            </a>
        </>
    </div>
  )
}


