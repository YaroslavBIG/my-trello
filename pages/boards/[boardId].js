import {useRouter} from 'next/router'
import Tasks from '../../components/tasks/Tasks';
const {SERVER} = require('../../config');

export default function Boards ({board}) {
  const router = useRouter();
  const {columns, title} = board;

  return <>
        <h1>{title}</h1>
        <ul>
          { columns.length ?
            (columns.map(column => (
            <li key={column.id}>
              <h1>{column.title}</h1>
              <Tasks columnId={column._id} boardId={board.id} />
            </li>
            ))
            )
            :
            null
          }
        </ul>
    </>
}
export async function getServerSideProps(ctx) {
  const resBoard = await fetch(`${SERVER}/boards/${ctx.query.boardId}`)
  const board = await resBoard.json()

  return { props: {board} }

}
