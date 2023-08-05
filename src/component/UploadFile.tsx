import axios from "axios";
import { useState } from "react";

const UploadFile = () => {
    const preset_key = "dlvae8gh";
    const cloud_name = "dz4vueeuf";
    const [image, setImage] = useState();
    const handleFile = (event: any) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append("upload_preset", preset_key);
        formData.append("cloud_name", cloud_name);

        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
            .then(res => setImage(res.data.secure_url))
            .catch(err => console.log(err))
    }
    return (
        <div className="d-flex justify-content-center ">
            <div className="w-25 bg-while mt-5 p-5">
                <input type="file" name="image" onChange={handleFile} />
            </div>
            <img src={image} className="w-50 h-50" />
        </div>
    );
}

export default UploadFile;