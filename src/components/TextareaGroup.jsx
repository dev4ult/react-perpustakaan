import React from 'react';

function TextareaGroup({ name, label, placeholder }) {
  return (
    <div>
      <label for={name} className="form-label">
        {label}
      </label>
      <textarea className="form-control" id={name} name={name} placeholder={placeholder}></textarea>
    </div>
  );
}

export default TextareaGroup;
