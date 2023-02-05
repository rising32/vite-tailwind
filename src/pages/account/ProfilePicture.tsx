import React, { ChangeEvent, useState } from 'react';
import { avatarThumbnail } from '../../assets/images';
import SubTitle from '../../components/Header/SubTitle';

function ProfilePicture() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  // const handleSubmit = async (data: any) => {
  //   setSelectedImage(data);
  //   console.log('data', data);
  //   try {
  //     const url = 'http://localhost:8080/upload-img';

  //     console.log('data', data);

  //     const { data: res } = await axios.post(url, data);
  //     console.log('res', res);
  //   } catch (error: any) {
  //     if (error.response && error.response.status >= 400 && error.response.status <= 500) {
  //       console.log(error.response.data.message);
  //     }
  //   }
  // };
  const handleSetImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedImage(event.target.files[0]);
    }
  };
  return (
    <div className="flex flex-col items-center w-full px-4 pt-6">
      <SubTitle mainTitle="VanHung Hoang" />
      <div className="flex flex-col items-center">
        <div className="my-12">
          {selectedImage ? (
            <img
              alt="not fount"
              className="w-36 h-36 rounded-full"
              src={URL.createObjectURL(selectedImage)}
            />
          ) : (
            <img className="w-36 h-36 rounded-full" src={avatarThumbnail} alt="Nav" />
          )}
        </div>

        <div>
          <input type="file" name="myImage" accept=".png, .jpg, .jpeg" onChange={handleSetImage} />
        </div>
      </div>
    </div>
  );
}

export default ProfilePicture;
