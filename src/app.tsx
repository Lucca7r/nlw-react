import logo from './assets/Logo-nlw.svg'

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
    <img src={logo} alt="logo nlw expert" />

    <form className="w-full ">
    <input 
      type="text" 
      placeholder='busque em suas notas...'
      className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder: text-slate-500'
      />
    </form>

    <div className='h-px bg-slate-700'/>
    </div>
  )
}
