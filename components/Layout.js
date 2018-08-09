import NavBar from '../components/NavBar'
import Head from 'next/head'

const Layout = (props) => (
   <div>
      <Head>
         <meta charset="utf-8"/>
         <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
         <meta name="viewport" content="width=device-width, initial-scale=1"/>

         <meta name="theme-color" content="#D94813"/>
         <meta name="msapplication-navbutton-color" content="#D94813"/>
         <meta name="apple-mobile-web-app-status-bar-style" content="#D94813"/>
         
         <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png"/>

         <title>BitzPrice</title>
         <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
      </Head>

      <NavBar/>
      <div className="container">
         {props.children}
      </div>

      <style global jsx>
      {`
         body {
            background: white
         }
      `}
      </style>
   </div>
)

export default Layout         