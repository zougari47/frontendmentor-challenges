import useAdvice from '../../hooks/advice-generator-app/useAdvice'

export default function Advice() {
  const { advice, loading, error, getNewAdvice } = useAdvice()

  if (error) {
    return (
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-center text-2xl text-white'>
          Something went wrong! Please{' '}
          <a
            href='/advice-generator-app'
            className='font-bold text-[hsl(var(--neon-green))] hover:underline'
          >
            try again.
          </a>
        </h1>
      </div>
    )
  }

  if (loading || !advice) {
    return (
      <div className='lef-1/2 absolute top-1/2 left-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-xl text-white'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          className='animate-spin fill-[hsl(var(--neon-green))] '
          style={{ animationDuration: '1.75s' }}
        >
          <path d='M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z' />
        </svg>
      </div>
    )
  }

  return (
    <main className='advice-shadow absolute top-1/2 left-1/2 w-[min(90%,540px)] -translate-y-1/2 -translate-x-1/2 rounded-2xl bg-[hsl(var(--dark-grayish-blue))] px-[19.67px] pt-[39px] pb-[66.48px] text-center font-["Manrope"] lg:px-[48px] lg:pb-[79px] lg:pt-[47px]'>
      <small className='mb-6 block font-extrabold uppercase tracking-[0.25em] text-[hsl(var(--neon-green))]'>
        advice #{advice?.slip?.id}
      </small>
      <blockquote
        key={advice?.slip?.id}
        className='mb-[26px] animate-[text-focus-in_0.8s_ease-in-out] text-[28px] font-extrabold leading-[38px] text-[hsl(var(--light-cyan))] before:content-["“"] after:content-["”"] lg:mb-10'
      >
        {advice?.slip?.advice}
      </blockquote>
      <img
        src='/advice-generator-app/pattern-divider-desktop.svg'
        srcSet='/advice-generator-app/pattern-divider-mobile.svg 500w, /advice-generator-app/pattern-divider-mobile.svg 786w'
        alt='pattern divider'
        className='h-auto w-full'
      />
      <button
        onClick={getNewAdvice}
        className='lef-1/2 absolute -bottom-8 -translate-x-1/2 rounded-full bg-[hsl(var(--neon-green))] p-5 duration-300 hover:shadow-[0_6px_30px_15px_hsla(var(--neon-green)/0.2)]'
      >
        <img
          src='/advice-generator-app/icon-dice.svg'
          alt='dice'
          className='animate-[rotate_0.5s_ease-in-out]'
          key={advice?.slip.id}
        />
      </button>
    </main>
  )
}
