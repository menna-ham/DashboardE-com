import React from 'react';
import { Field, ErrorMessage } from 'formik';
import useDragAndDrop from '../../../utils/useDragAndDrop'; // Import the custom hook

const DragAndDropFileInput = ({ label, name, accept = '.jpg,.png,.gif,.svg', placeholderImage, multiple = false }) => {
  const { 
    dragActive, 
    preview, 
    fileInfo, 
    handleDragOver, 
    handleDragLeave, 
    handleDrop, 
    handleChange 
  } = useDragAndDrop(name); // Use the hook with the Formik field name

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
            <img src={preview} alt="Preview" className="w-24 h-24 object-cover rounded-md" />
            <div className="ml-3">
              <p className="text-sm font-semibold">{fileInfo.size} KB</p>
              <p className="text-gray-500 text-sm truncate">{fileInfo.name}</p>
            </div>
          </div>
        )}
      </div>

      <ErrorMessage name={name} component="div" className="text-red-600 mt-2 text-sm" />
    </div>
  );
};

export default DragAndDropFileInput;
