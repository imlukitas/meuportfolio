import style from './App.module.css'
 
function App() {
  return (
    <>
      <nav className={'style.menu'}>
        <p><a href="#s1">Apresentação</a></p>
        <p><a href="#s2">Tecnologias</a></p>
        <p><a href="#s3">Projetos</a></p>
        <p><a href="#s4">Contato</a></p>
      </nav>
      <main>
        <section className='style.s1'>
          <h2>Apresentação</h2>
        </section>
        <section className='style.s2'>
          Tecnologias
        </section>
        <section className='style.s3'>
          Projetos
        </section>
        <section className='style.s4'>
          Contato
        </section>
      </main>
      <footer>
        <h3>Redes Sociais</h3>
      </footer>
    </>
  )
}
 
export default App