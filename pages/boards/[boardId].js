import {useRouter} from 'next/router'

export default function Boards () {
  const router = useRouter();
  return <h1>Board {router.query.boardId}</h1>
}
