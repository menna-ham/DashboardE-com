import { useState } from 'react';
import { useFormikContext } from 'formik';

const useDragAndDrop = (imageFieldName, galleryFieldName, isMultiple = false) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState(null);
  const [fileInfo, setFileInfo] = useState({ name: '', size: 0 });
  const { setFieldValue, values } = useFormikContext();

  // Handle file drag over
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  // Handle drag leave
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files.length) {
      if (isMultiple) {
        // Update productGallery with multiple files
        const updatedGallery = [...values[galleryFieldName], ...Array.from(files)];
        setFieldValue(galleryFieldName, updatedGallery);

        // Optionally update previews for the gallery
        const previews = updatedGallery.map(file => URL.createObjectURL(file));
        setPreview(previews);
      } else {
        // Update productImage with single file
        const file = files[0];
        setFieldValue(imageFieldName, file);

        setPreview(URL.createObjectURL(file));
        setFileInfo({ name: file.name, size: (file.size / 1024).toFixed(1) });
        
        // Push the file to productGallery as well
        const updatedGallery = [...values[galleryFieldName], file];
        setFieldValue(galleryFieldName, updatedGallery);
      }
    }
  };

  // Handle file input change
  const handleChange = (e) => {
    const files = e.target.files;
    if (files && files.length) {
      if (isMultiple) {
        // Update productGallery with multiple files
        const updatedGallery = [...values[galleryFieldName], ...Array.from(files)];
        setFieldValue(galleryFieldName, updatedGallery);

        // Update previews for gallery
        const previews = updatedGallery.map(file => URL.createObjectURL(file));
        setPreview(previews);
      } else {
        // Update productImage with a single file
        const file = files[0];
        setFieldValue(imageFieldName, file);

        setPreview(URL.createObjectURL(file));
        setFileInfo({ name: file.name, size: (file.size / 1024).toFixed(1) });
        
        // Push the file to productGallery as well
        const updatedGallery = [...values[galleryFieldName], file];
        setFieldValue(galleryFieldName, updatedGallery);
      }
    }
  };

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
