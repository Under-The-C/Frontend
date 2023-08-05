import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { formDataState, mainImageState, salesState } from "../../Atom/sales";

export const ImageUpload = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [sales, setSales] = useRecoilState(salesState);
  const [mainImage, setMainImage] = useRecoilState(mainImageState);
  const [formData, setFormData] = useRecoilState(formDataState);

  useEffect(() => {
    if (mainImage !== "") {
      setSales({ ...sales, mainImage: mainImage });
    }
  }, [mainImage]);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    try {
      // 이미지 미리보기
      reader.onload = () => {
        if (reader.result) {
          setMainImage(reader.result.toString());
        }
      };

      if (file) {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          const newFormData = new FormData();

          newFormData.append("image", file);
          setFormData(newFormData);
        };
      } else {
        setMainImage("");
      }
    } catch (error) {
      console.error("Error image load:", error);
    }
  };

  const handleChangeImageClick = () => {
    // fileInputRef의 클릭 이벤트를 발생시킴
    // 트리거 발생하면 handleImageChange 실행됨
    if (fileInputRef.current) fileInputRef.current.click();
  };

  return (
    <div className="flex h-[20vh] aspect-square bg-gray-200 justify-center items-center">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      {mainImage ? (
        <img
          src={mainImage}
          className="w-full h-full image-contain"
          alt="Choosepicture"
          onClick={handleChangeImageClick}
        />
      ) : (
        <img
          src={require("../../public/images/camera.png")}
          className="w-16 h-16"
          alt="camera"
          onClick={handleChangeImageClick}
        />
      )}
    </div>
  );
};
