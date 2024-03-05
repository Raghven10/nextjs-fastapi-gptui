
import './globals.css'
import './app.css';

import './tailwind.css';

import 'tippy.js/dist/tippy.css';

// import React, {useEffect, useState} from 'react';

import {toast, ToastContainer} from 'react-toastify';

// import { getBackendConfig } from './lib/apis';

// import { getSessionUser } from './lib/apis/auth';
import Head  from 'next/head';
import { UserProvider } from './lib/stores/user';
import Sideabar from './lib/components/sideabar';

export default function RootLayout <T extends React.ReactNode>({
  children
} : {
  children: T;
}) {
//   const [loaded, setLoaded] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//       async function fetchData() {

//           const  backendconfig = await getBackendConfig();

//           if (backendconfig ) {
//               // confign and state logic here to be declared

//               if (localStorage.token) {
//                   try{
//                       const sessionUser = await getSessionUser(localStorage.token);
//                       // Save session user to your state management

//                   } catch (error) {
//                       toast.error(error as string );
//                       localStorage.removeItem('token');
//                       router.push('/auth');
//                   }
//               }else {
//                   router.push('/auth');
//               }
//           }else{
//               router.push('/error')
//           }

//           setLoaded(true);
//       }

//       fetchData();
//   }, [router]);

  return (<>
  <html lang="en">
  <Head>
      <title>VayuGPT</title>
      <link rel="stylesheet" href="/themes/rosepine.css" />
      <link rel="stylesheet" href="/themes/rosepine-dawn.css" />
  </Head>
  <body>
  <UserProvider>
  <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Sideabar />
      </div>
      <div className="flex-grow md:overflow-y-auto md:p-1">{children}</div>
    </div>
  </UserProvider>
  <ToastContainer />
  </body>
  </html>
  </>)
}
