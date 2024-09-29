import { useState } from 'react';
import { useFormikContext } from 'formik';

const useDragAndDrop = (fieldName) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState(null);
  const [fileInfo, setFileInfo] = useState({ name: '', size: 0 });
  const { setFieldValue } = useFormikContext();

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

    const file = e.dataTransfer.files[0];
    if (file) {
      setFieldValue(fieldName, file);
      setPreview(URL.createObjectURL(file));
      setFileInfo({ name: file.name, size: (file.size / 1024).toFixed(1) });
    }
  };

  // Handle file input change
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue(fieldName, file);
      setPreview(URL.createObjectURL(file));
      setFileInfo({ name: file.name, size: (file.size / 1024).toFixed(1) });
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
