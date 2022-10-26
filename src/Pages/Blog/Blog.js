import React from 'react';

const Blog = () => {
    return (
        <div className='container mb-5 pb-5'>
            <h2 className='text-center fs-1 fw-bold text-navy py-4 mt-4'>BackBenchers' weekly Blog</h2>
            <hr />

            <h3 className='pt-3 pb-2 text-navy'>Cross-Origin Resource Sharing (CORS)</h3>
            <div className='border-start ps-4'>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. <br /><br />
                For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers. </p>
            </div>
                <div className='text-center'>
                <img src="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png" className='p-2 w-50' alt="" />
                </div>
                <br /> <br />
            <div className='border-start ps-4'>
                <p>The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.</p>
            </div>
            <br /><br />

            <h3 className='pt-3 pb-2 text-navy'>Five Benefits of Using Google Firebase</h3>
            <div className='border-start ps-4'>
                <h5>What Is Firebase?</h5>
                <p>Firebase is Google’s Backend-as-a-Service (BAAS) solution for mobile app development. Originally, it was developed and launched in 2011 by Firebase Inc. and was later acquired by Google in 2014. Initially it started off as a realtime database and now offers developers and marketers a comprehensive selection of tools and products that not only help develop advanced applications, but also market them. The Firebase platform allows for easy integration with IOS, Android, Web, and Unity products. There is a lot to learn about the platform, however in this article we will cover the top five benefits of using Firebase by Google.</p> <br />
            </div>
                <div className='text-center'>
                <img src="https://static.javatpoint.com/tutorial/firebase/images/firebase-introduction.png" className='p-2 w-50' alt="" />
                </div>
            <div className='border-start ps-4'>
                <h5>Benefit #1: Google Analytics For Firebase</h5>
                <p>Google Analytics for Firebase allows you to track your users’ journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices. According to Google, Firebase provides unlimited free reporting on up to 500 distinct events. Just like the regular Google Analytics, Google Analytics for Firebase automatically tracks certain key events and user parameters straight out of the box, and allows you to define custom events that are important to your application. Lastly, Google Analytics for Firebase tracks and integrates with various analytical partners such as Google Ads, Admob, TradeMob, and many more. </p> <br />

                <h5>Benefit #2: Realtime Database & Firestore</h5>
                <p>Firebase was originally developed to be a realtime database, and today that is still one of its key features. The Realtime Database is essentially a cloud-hosted NoSQL database that stores data as JSON (JavaScript Object Notation) in real time. One of the key advantages for Firebase’s Realtime Database is that it works offline by using local cache on the device to store any changes made. When app connectivity is resumed, the data is synced.</p> <br />

                <h5>Benefit #3: Authentication</h5>
                <p>Most apps have some form of authentication feature that is necessary to identify the user. Thanks to Firebase’s easy-to-use SDK, ready-made UI libraries, and backend services, it is possible to set up the whole authentication process in just a couple of minutes. Firebase allows users to authenticate with their phone number, email, Google, and Facebook accounts.</p> <br />

                <h5>Benefit #4: Crashlytics</h5> 
                <p>Firebase Crashlytics allows you to track, prioritize, and fix stability issues that erode your app quality. Crashlytics sends you realtime detailed alerts whenever a bug or crash occurs. Using the detailed reports, developers and testers can find and fix bugs at a faster pace. Using Crashlytics’ out-of-the-box integration with Google Analytics provides developers with a secondary method for debugging using the ‘app_exception’ event. </p> <br />

                <h5>Benefit #5: Free Use of Dynamic Links</h5> 
                <p>Firebase Dynamic Links are smart URLs that enable marketers to promote the app across various external channels, such as social media, email, web, and more found here. One of the best features of dynamic links is the fact that they are usable by both app users and those that don’t have the app installed. For a more detailed walkthrough of Dynamic Links, feel free to check out this article, written by one of my colleagues.</p> <br />

                <h5>What other options do you have to implement authentication?</h5>
                <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p> 
            </div>
            <br /><br />
            

            <h3 className='pt-3 pb-2 text-navy'>How does the private route work?</h3>
            <div className='border-start ps-4'>
                <h5>Private Routes</h5>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. <br />
                If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p> 
            </div>
            <br /><br />

            <h3 className='pt-3 pb-2 text-navy'>What is Node? How does Node work?</h3>
            <div  className='border-start ps-4'>
                <h5>Node.js</h5>
                <p>Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.</p>
                
                <h5>How does Node.js work?</h5>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
                <div className='text-center'>
                <img src="https://news7h.com/wp-content/uploads/2022/07/Nodejs-Architecture-780x470.png" className='p-2 w-50' alt="" />
                </div> 
                <br />
            <div  className='border-start ps-4'>
                <p>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
            </div>
        </div>
    );
};

export default Blog;