import Document, { Html, Head, Main, NextScript } from 'next/document'

class NewDocument extends Document {
    static async getInitialProps(ctx) {
        const initial =  await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    
    render () {
       <Html>
           <Head>
                ​<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
           </Head>
           <body>
               <Main />
               <NextScript />
           </body>
       </Html> 
    }
}

export default NewDocument