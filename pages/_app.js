import '../styles/globals.css'
import Layout from '../components/Layout'
import { Context } from '../context/Context'
import Head from 'next/head'
import Script from 'next/script'
import { useState } from 'react'
export default function App({ Component, pageProps }) {
  const [cart,setCart] = useState([])
  const [productCount,setProductCount] = useState(1)
  const [total,setTotal] = useState(0)

  const value = {
    cart,setCart,productCount,setProductCount,total,setTotal
  }
  
  return (
    <Context.Provider value={value}>
    <Layout>
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        
       
      </Head>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></Script>
    </Layout>
    </Context.Provider>
  )
}
