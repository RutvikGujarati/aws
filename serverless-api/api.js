module.exports.handler = async (event) => {
  return {
     statusCode: 200,
     headers: {
       "Content-Type": "text/html"
     },
     body: `
       <html>
         <head>
           <style>
             body {
               font-family: 'Arial', sans-serif;
               background-color: #f0f0f0;
               padding: 20px;
               text-align: center;
             }
 
             h1 {
               color: purple;
             }
 
             hr {
               border: 2px solid #000;
               margin: 20px 0;
             }
 
             h2 {
               color: black;
             }
 
             h3 {
               text-align: center;
               color: red;
               margin-top: 30px;
             }
           </style>
         </head>
         <body>
           <h1>serverless Response Running</h1>
           <hr>
           <h2>Welcome to the AWS Running serverless Site.</h2>
           <hr>
           <h3>Site created by Gujarati Rutvik</h3>
         </body>
       </html>
     `,
  };
 };
 