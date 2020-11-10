import {useRouter} from 'next/router'
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
  const res = await fetch(`${SERVER}/boards/${ctx.query.boardId}`)
  const board = await res.json()

  return { props: {board} }

}
