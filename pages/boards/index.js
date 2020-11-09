import NavigationLayout from "../../components/navigationLayout";
const {SERVER} = require('../../config');

export default function AllUserBoards ({boards}) {
  return (
    <NavigationLayout>
      <h1>All User Boards</h1>
      <pre>{JSON.stringify(boards, null,2)}</pre>
    </NavigationLayout>  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${SERVER}/boards`)
  const boards = await res.json()

  // Pass data to the page via props
  return { props: {boards} }
}
