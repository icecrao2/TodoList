import './scss/Header.scss';


export const Header = ({ title }) => {

  return (
    <header className="h-1/5 grid content-center">
      <h1 className="text-7xl text-center font-extrabold tracking-widest">{title}</h1>
    </header>
  )

}

