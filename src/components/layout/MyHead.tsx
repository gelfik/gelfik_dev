import React from 'react';
import Head from 'next/head'

const MyHead = (props) => {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico"/>
            {/*<link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>*/}
            {/*<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"*/}
            {/*      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"*/}
            {/*      crossOrigin="anonymous"/>*/}
            <script src="https://code.jquery.com/jquery-3.3.1.min.js"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
                    integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
                    crossOrigin="anonymous"/>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
                    integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
                    crossOrigin="anonymous"/>
        </Head>
    );
}

export default MyHead;
