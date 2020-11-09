import Router from "next/router";

export default function NavigationLayout({ children }){
  return (
    <>
      <nav>
        <h1>Navigation</h1>
        <button onClick={() => Router.push('/')}>Home Page</button>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}
