import { ReactComponent as LogoSVG } from './../images/logo.svg';

export default function Root() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="relative flex items-center">
        <LogoSVG />
        <p className="pl-10 m-0 max-w-[30ch] text-sm opacity-50">where the art of investing meets the science of serenity.</p>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left" style={{position: 'relative', top: '20vh'}}>
        {[
          { title: 'Why Zen', content: 'Navigate the complexities of the financial markets with ease and expertise (without all the hassle)', link: '/about' },
          { title: 'Investing', content: 'Our cutting-edge NLP tirelessly scours daily news sources so you don\'t have to', link: '/investing' },
          { title: 'Pricing', content: 'We only make money when you make money!', link: '/pricing' },
          { title: 'Create Account', content: 'Why wait and lose on exponential return, join us now toward a better financial future!', link: '/create' },
        ].map((item, index) => (
          <a key={index} href={item.link} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" target="_blank" rel="noopener noreferrer">
            <h2 className="mb-3 text-2xl font-semibold">{item.title} <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span></h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">{item.content}</p>
          </a>
        ))}
      </div>
    </main>
  )
}
