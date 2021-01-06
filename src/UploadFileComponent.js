import React, { useState } from 'react';
import axios, {post}  from 'axios'


const UploadFileComponent = () => {

  const [fileValue, setFileValue] = useState('');


  const handleChangingFile = e => {
    setFileValue(e.target.files[0])
  }
  const fileUpload = e => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('example-named', fileValue, fileValue.name);

    axios.post('url', formData, {
      onUploadProgress: progressEvent => {
        console.log(`upload progress:  ${Math.round(progressEvent.loaded/ progressEvent.total) *100} %`)
      }
    })
      .then(res => console.log(res))

  }



  return ( 
    <div>
      <form onSubmit={fileUpload}>
        <input type="file" onChange={handleChangingFile} />
        <button type='submit'>Prześlij plik</button>
      </form>
    </div>
   );
}
 
export default UploadFileComponent;