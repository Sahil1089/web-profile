// import React, { useState } from 'react'

// function useFileDownloader() {

//   const [file,setFile]=useState(()=>[]);
//   const download = file => setFile(fileList =>[...fileList,{
//     ...file,downloadId:"mk2d4"
//   }]);


//   // remove 
//   const remove = removeId => setFile(file => [...file.filter(file=>file.downloadId !== removeId)]);
//   return [
//    (e)=>download(e),
//    file.length > 0 ? <Downloader file={file} remove = {e=>remove}/>:null
//   ]
// }

// export default useFileDownloader