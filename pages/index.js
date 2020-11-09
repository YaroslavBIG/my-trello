import Link from 'next/link'
import Head from 'next/head'
import NavigationLayout from "../components/navigationLayout";

export default function Home() {
  return (
    <NavigationLayout>
      <Head>
        <title>My Trello Board</title>
      </Head>
      <h1>Hello</h1>
    <p>
      <Link href={'/about'}><a>About</a></Link>
      <Link href={'/boards'}><a>Boards</a></Link>
    </p>
  </NavigationLayout>
  )
}
