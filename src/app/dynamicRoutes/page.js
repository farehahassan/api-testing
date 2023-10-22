import Link from 'next/link';
import React from 'react';


const page = () => {
    return (
        <div>
            <h1>Students List</h1>
            <br />
            <br />
            <ul>
                <li><Link href="/dynamicRoutes/fareha" >fareha</Link> </li>
            </ul>
            <ul>
                <li><Link href="/dynamicRoutes/amama" >amama</Link> </li>
            </ul>
            <ul>
                <li><Link href="/dynamicRoutes/warisha" >warisha</Link> </li>
            </ul>
            <ul>
                <li><Link href="/dynamicRoutes/misbah" >misbah</Link> </li>
            </ul>
        </div>
    );
};

export default page;