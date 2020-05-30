import Head from 'next/head';
import { withRouter } from 'next/router';

const Meta = ({ router }) => {
    let path = `${router.pathname === "/" ? "vestibule" : router.asPath.split("/").slice(-1)} ${ router.query.search ? `:: ${router.query.search}` : ""}`
  return (
    <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A rabbit hole, somewhere on the web... | goldmund.io" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="shortcut icon" href="/static/assets/favicon.ico" type="image/x-icon" />
        <title>goldmund.io :: {path} </title>
    </Head>
  )
}

export default withRouter(Meta);