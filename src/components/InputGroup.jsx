function InputGroup({ label, name, type = 'text', placeholder = 'name@example.com' }) {
  return (
    <div>
      <label for={name} className="form-label">
        {label}
      </label>
      <input type={type} className="form-control" id={name} name={name} placeholder={placeholder} />
    </div>
  );
}

export default InputGroup;
