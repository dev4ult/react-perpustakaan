function Button({ type = 'button', children, className = '' }) {
  return (
    <button type={type} className={className + ' btn btn-primary'}>
      {children}
    </button>
  );
}

export default Button;
