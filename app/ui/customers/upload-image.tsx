"use client";

import { ChangeEvent, FormEvent, useState } from "react";

function CustomerImage() {
  const [file, setFile] = useState<File | undefined>();

  console.log("file:");
  console.log(file);
  
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setFile(e.target.files?.[0]);
  };

  return (
    <div>           
        <input
        id="image"
        type="file"
        className="bg-blue-600 text-white p-2 rounded block mb-2"
        onChange={handleFileChange}
        />       
      
    </div>
  );
}

export default CustomerImage;