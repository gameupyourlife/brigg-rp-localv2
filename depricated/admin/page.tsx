// "use client";

// import React from 'react';
// import fs from 'fs';
// import { writeFileSync } from 'fs';

// export default function Page() {


//     // function handleSubmit(e: any) {
//     //     // const fileInput = e.target;
//     //     const formData = new FormData(e.target);
//     //     console.log(e.target);
//     //     console.log(formData.get('md-file'));
//     //     //     return;
//     //     const file = formData.get('md-file') as Blob;


//     //     file.arrayBuffer().then((content) => {

//     //         if (!file) {
//     //             console.warn("no file was chosen");
//     //             return;
//     //         }

//     //         if (content.byteLength < 10) {
//     //             console.warn("files list is empty");
//     //             return;
//     //         }


//     //         try {
//     //             fetch("/api/admin", {
//     //                 method: "POST",
//     //                 body: formData,
//     //             }).then((res) => {

//     //                 if (!res.ok) {
//     //                     console.error("something went wrong, check your console.");
//     //                     return;
//     //                 }
//     //             });

//     //         } catch (error) {
//     //             console.error("something went wrong, check your console.");
//     //         }

//     //         // /** Reset file input */
//     //         // e.target.type = "text";
//     //         // e.target.type = "file";
//     //     });
//     // };

//     return (
//         <div className='pt-20 px-10 md:px-20 flex justify-center'>
//             <h1>Admin</h1>
//             {/* <form action={handleSubmit} method="post">
//                 <input type="file" name="md-file" id="md-file" />
//                 <input type="submit" value="Send" />
//             </form> */}
//         </div>
//     );
// }



