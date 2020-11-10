import NavigationLayout from "../../components/navigationLayout";
import Link from "next/link";
const {SERVER} = require('../../config');

export default function AllUserBoards ({boards}) {
  return (
    <NavigationLayout>
      <h1>All User Boards</h1>
      <ul>
        {boards.map(board => (
          <li key={board.id}>
            <Link href={`/boards/[boardId]`} as={`/boards/${board.id}`}>
              <a>{board.title}</a>
            </Link>
          </li>
        ))
        }
      </ul>
    </NavigationLayout>  )
}

export async function getServerSideProps() {
  const res = await fetch(`${SERVER}/boards`)
  const boards = await res.json()

  return { props: {boards} }
}
