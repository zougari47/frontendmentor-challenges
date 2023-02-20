import useAdvice from '../../hooks/advice-generator-app/useAdvice'

export default function Advice() {
  const { advice, loading, error, getNewAdvice } = useAdvice()

  return (
    <main className='advice-shadow absolute top-1/2 left-1/2 w-[min(90%,540px)] -translate-y-1/2 -translate-x-1/2 rounded-2xl bg-[hsl(var(--dark-grayish-blue))] px-[19.67px] pt-[39px] pb-[66.48px] text-center font-["Manrope"] lg:px-[48px] lg:pb-[79px] lg:pt-[47px]'>
      {/* error */}
      {error && (
        <h1 className='mb-5 text-center text-3xl text-white'>
          Something went wrong! Please try again.
        </h1>
      )}

      {/* loading */}
      {loading && !error && (
        <div role='status' className='w-full animate-pulse'>
          <div className='mx-auto mb-6 h-2.5 w-48 rounded-full bg-[hsl(var(--neon-green)/0.5)]'></div>

          <div className='mb-2.5 h-2 w-full rounded-full bg-gray-200'></div>
          <div className='mb-2.5 h-2 rounded-full bg-gray-200'></div>
          <div className='mb-[26px] h-2 w-4/5 rounded-full bg-gray-200'></div>
        </div>
      )}

      {/* normal behavior */}
      {!loading && !error && (
        <>
          <small className='mb-6 block font-extrabold uppercase tracking-[0.25em] text-[hsl(var(--neon-green))]'>
            advice #{advice?.slip?.id}
          </small>
          <h1>
            <blockquote
              key={advice?.slip?.id}
              className='mb-[26px] animate-[text-focus-in_0.65s_ease-in-out] text-[28px] font-extrabold leading-[38px] text-[hsl(var(--light-cyan))] before:content-["“"] after:content-["”"] lg:mb-10'
            >
              {advice?.slip?.advice}
            </blockquote>
          </h1>
        </>
      )}

      <img
        src='/advice-generator-app/pattern-divider-desktop.svg'
        srcSet='/advice-generator-app/pattern-divider-mobile.svg 500w, /advice-generator-app/pattern-divider-mobile.svg 786w'
        alt='pattern divider'
        className='h-auto w-full'
      />
      <button
        onClick={getNewAdvice}
        className='lef-1/2 absolute -bottom-8 -translate-x-1/2 rounded-full bg-[hsl(var(--neon-green))] p-5 duration-300 hover:shadow-[0_6px_30px_15px_hsla(var(--neon-green)/0.2)] disabled:cursor-progress'
        disabled={loading}
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
