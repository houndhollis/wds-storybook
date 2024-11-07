import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface DefaultTextFieldProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  errorMessage: string;
  iconPath: string;
  iconAlt: string;
  onIconClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
}

export default function DefaultTextFiled({
  id,
  type,
  placeholder,
  value,
  errorMessage,
  iconPath,
  iconAlt,
  onIconClick,
  onChange,
  isError,
}: DefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = isFocused
    ? "border-secondary"
    : value
    ? "border-primary"
    : "border-mono300";

  return (
    <div className="relative text-field">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`flex items-center gap-1 border-b ${borderColor}`}
      >
        <input
          id={id}
          className="outline-none"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
        />
        {value && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
