const InputBox = (props) => {
  const { type = 'text', label, name, id, defaultValue, onChange, placeholder, error } = props;

  return (
    <div className="row align-items-center">
      <div className="col-auto">
        <label htmlFor={name} className="col-form-label">
          {label}
        </label>
      </div>
      <div className="align-items-center">
        <div className="col-auto">
          <input
            placeholder={placeholder}
            type={type}
            id={id}
            defaultValue={defaultValue}
            name={name}
            className="form-control"
            onChange={onChange}
            aria-describedby={name}
          />
        </div>
        {error ? (
          <div className="col-auto">
            <span id={name} className="form-text text-danger">
              {error}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default InputBox;
