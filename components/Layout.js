import Head from 'next/head';
import Header from './Header';
import '../styles/Styles.css';

const Layout=(props) =>{
    
    return (
        <div>
            <Head>
                <title>Woo Commerce Theme</title>
                <link rel="stylesheet"  href="https://bootswatch.com/4/flatly/bootstrap.min.css"></link>
            </Head>
            <Header/>
         { props.children}
        </div>
    );
};
export default Layout;