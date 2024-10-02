import React from 'react';
import { Field, ErrorMessage } from 'formik';
import useDragAndDrop from '../../../utils/useDragAndDrop'; // Import the custom hook

const DragAndDropFileInput = ({
  label,
  name, // This is the productImage field name
  galleryFieldName, // This is the productGallery field name
  accept = '.jpg,.png,.gif,.svg',
  placeholderImage,
  multiple = false // Specify if multiple files should be handled
}) => {
  // Use the hook with both productImage and productGallery fields
  const {
    dragActive,
    preview,
    fileInfo,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleChange,
  } = useDragAndDrop(name, galleryFieldName, multiple); // Pass both field names and the multiple flag

  return (
    <div className="form-group">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>

      <div
        className={`w-full border-2 ${dragActive ? 'border-blue-500' : 'border-dashed border-[#544EAB]'} rounded-lg bg-[#f7f6fb] p-6 text-center`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Field
          type="file"
          id={name}
          name={name}
          accept={accept}
          className="hidden"
          onChange={handleChange}
          value={undefined} // Ensure no controlled value is passed
          multiple={multiple} // Set the multiple attribute if required
        />

        {!preview ? (
          <label htmlFor={name} className="text-purple-500 cursor-pointer">
            <img src={placeholderImage} alt="Image Upload" className="mx-auto mb-3" />
            <p className="text-gray-700">Drag your {multiple ? 'files' : 'image'} here, or <span className="text-green-500">browse</span></p>
            <p className="text-gray-400">{accept.toUpperCase().replaceAll(',', ', ')}</p>
          </label>
        ) : (
          <div className="flex items-center justify-center">
            {Array.isArray(preview) ? (
              // If there are multiple previews (for gallery)
              preview.map((src, index) => (
                <img key={index} src={src} alt={`Preview ${index}`} className="w-24 h-24 object-cover rounded-md mx-2" />
              ))
            ) : (
              // If there is a single preview (for product image)
              <img src={preview} alt="Preview" className="w-24 h-24 object-cover rounded-md" />
            )}

            {fileInfo && (
              <div className="ml-3">
                <p className="text-sm font-semibold">{fileInfo.size} KB</p>
                <p className="text-gray-500 text-sm truncate">{fileInfo.name}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <ErrorMessage name={name} component="div" className="text-red-600 mt-2 text-sm" />
    </div>
  );
};

export default DragAndDropFileInput;
