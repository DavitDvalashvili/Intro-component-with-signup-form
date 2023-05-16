import errorIcon from "../asset/icon-error.svg";

export default function InputBox(props) {
    
  return (
    <div className={props.className}>
    <label htmlFor={props.htmlFor}></label>
    <input
      className={`${props.isNameInvalid ? "inputValidation" : ""}`}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      onChange={(event) => {
        props.setUsername(event.target.value);
        props.setIsNameInvalid(false);
      }}
    />
    {props.isNameInvalid ? (
      <img className="errorIcon" src={errorIcon} alt="errorIcon" />
    ) : (
      ""
    )}
    {props.isNameInvalid ? (
      <p className="errorMessage">{props.errorText}</p>
    ) : (
      ""
      )}
    </div>
  )
}