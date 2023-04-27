import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";
const FileUpload =({contract ,account ,provider})=>{
    const [file,setFile]=useState(null);
    const[fileName,setFileName]=useState("No image Selected")
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(file){
            try {
                const formData = new FormData();
                formData.append("file",file);
                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                      pinata_api_key: `104a5c6daef84f3f6870`,
                      pinata_secret_api_key: `
                      f2fad8c8bddeea53850799aad96e7bba0dd3372277d62e58d279a5bb4c540dab`,
                      "Content-Type": "multipart/form-data",
                    },
                  });
                  const ImageHash= `ipfs://${resFile.data.IpfsHash}`;
                  //const signer = contract.connect(provider.getSigner());
                  contract.add(account,ImageHash);
                 alert("Successfully Image Uploaded");
                 setFileName("No image Selected");
                 setFile(null);
                
            } catch (e) {
                alert("Unable to Upload Image to Pinata");
                
            }
        }

    }
    const retrieveFile=(e)=>{
        const data= e.target.files[0];//files array of files object
      //console.log(data);
      const reader = new window.FileReader();
      reader.readAsArrayBuffer(data)
      reader.onloadend=()=>{
        setFile(e.target.files[0])
      }
      setFileName(e.target.files[0].name);
      e.preventDefault();
    }
    return <div className="top">
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="file-upload" className="choose">Choose Image</label>
                <input disabled={!account} type="file" id="file-upload" name="data" onChange={retrieveFile}>

                </input>
                <span className="textArea"> Image:{fileName}</span>
                <button type="buttup" className="buttdown">Upload</button>
          
        </form>
    </div>
}
export default FileUpload;