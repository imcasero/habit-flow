import { ComponentPropsWithoutRef, forwardRef } from "react";
import { clsx } from "clsx";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
  labelClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      className,
      containerClassName,
      labelClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div className={clsx("flex flex-col gap-1", containerClassName)}>
        {label && (
          <label
            htmlFor={props.id}
            className={clsx(
              "text-gray-700 dark:text-gray-400 text-sm",
              labelClassName
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={clsx(
            "w-full px-3 py-2 text-sm",
            "text-gray-900 dark:text-gray-100",
            "border border-gray-200 dark:border-gray-800",
            "rounded-md",
            "placeholder:text-gray-400 dark:placeholder:text-gray-600",
            "transition-all duration-200",
            "focus:outline-none focus:border-gray-400 dark:focus:border-gray-600",
            "focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-900",
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-red-500 mt-0.5">{error}</span>}
        {helperText && !error && (
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
