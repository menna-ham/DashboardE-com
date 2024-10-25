import { useState, useEffect } from 'react';
import { useFormikContext } from 'formik';

interface FormValues {
  productImage: File | null; // Adjust type as needed
  productGallery: File[]; // Adjust type as needed
  name:string;
}

const useDragAndDrop = (imageFieldName:string, galleryFieldName: keyof FormValues, isMultiple = false) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string[]>([]);
  const [fileInfo, setFileInfo] = useState<{ name: string; size: number }>({ name: '', size: 0 });
  const { setFieldValue, values } = useFormikContext<FormValues>();

  // Handle file drag over
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  // Handle drag leave
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  // Handle file drop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer?.files;
    if (files && files.length) {
      handleFiles(files);
    }
  };

  // Handle file input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length) {
      handleFiles(files);
    }
  };

  // Handle the file processing logic
  const handleFiles = (files: FileList) => {
    if (isMultiple) {
      const updatedGallery = [...(values[galleryFieldName] as File[]), ...Array.from(files)];
      setFieldValue(galleryFieldName, updatedGallery);

      const previews = updatedGallery.map(file => URL.createObjectURL(file));
      setPreview(previews);
    } else {
      const file = files[0];
      setFieldValue(imageFieldName, file);

      setPreview([URL.createObjectURL(file)]);
      setFileInfo({ name: file.name, size: parseFloat((file.size / 1024).toFixed(1)) });

      const updatedGallery = [...(values[galleryFieldName] as File[]), file];
      setFieldValue(galleryFieldName, updatedGallery);
    }
  };

  // Cleanup function to revoke object URLs
  useEffect(() => {
    return () => {
      preview.forEach(url => URL.revokeObjectURL(url));
    };
  }, [preview]);

  return {
    dragActive,
    preview,
    fileInfo,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleChange,
  };
};

export default useDragAndDrop;
