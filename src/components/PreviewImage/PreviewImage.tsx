import React, { useState, useEffect } from 'react';

interface Props {
  file: File;
}

const PreviewImage: React.FC<Props> = ({ file }) => {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, [file]);

  return (
    <div>
      {preview && <img src={preview} alt="preview" />}
    </div>
  );
};

export default PreviewImage;

