import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        let props = { ...initialProps };

        return props;
    }

    render() {
        return (
            <html>
                <Head> 
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charset="UTF-8"/>
                    
                    <link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet"/>
                    
                    <link href="../static/assets/template/plugin-frameworks/bootstrap.min.css" rel="stylesheet" />
                    <link href="../static/assets/template/plugin-frameworks/swiper.css" rel="stylesheet" />
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

                    <link href="../static/assets/template/fonts/ionicons.css" rel="stylesheet" />
                        
                    <link href="../static/assets/template/common/styles.css" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript /> 
                </body>
                {/* <script src="../static/assets/template/plugin-frameworks/jquery-3.2.1.min.js"></script>
                <script src="../static/assets/template/plugin-frameworks/bootstrap.min.js"></script>
                <script src="../static/assets/template/plugin-frameworks/swiper.js"></script>
                <script src="../static/assets/template/common/scripts.js"></script> */}
            </html>
        );
    }
}
