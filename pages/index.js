import Head from "next/head"
import GridFour from "../components/GridFour"
import GridOne from "../components/GridOne"
import GridThree from "../components/GridThree"
import GridTwo from "../components/GridTwo"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Website with grid</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GridOne />
      <GridTwo />
      <GridThree />
      <GridFour />
    </div>
  )
}
