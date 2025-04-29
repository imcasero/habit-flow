import { ComponentPropsWithoutRef, forwardRef } from "react";
import { clsx } from "clsx";

interface CheckboxProps extends ComponentPropsWithoutRef<"input"> {
  label?: string | React.ReactNode;
  error?: string;
  helperText?: string;
  containerClassName?: string;
  labelClassName?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
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
        <label className={clsx("flex items-start gap-2", labelClassName)}>
          <input
            type="checkbox"
            ref={ref}
            className={clsx(
              "mt-1 w-4 h-4",
              "border border-gray-200 dark:border-gray-800",
              "rounded",
              "bg-white dark:bg-gray-900",
              "checked:bg-gray-800 dark:checked:bg-gray-200",
              "checked:border-gray-800 dark:checked:border-gray-200",
              "focus:outline-none",
              "focus:ring-2",
              "focus:ring-gray-200 dark:focus:ring-gray-800",
              "transition-colors duration-200",
              error &&
                "border-red-500 focus:ring-red-200 dark:focus:ring-red-900",
              className
            )}
            {...props}
          />
          {label && (
            <span className="text-sm text-gray-700 dark:text-gray-400">
              {label}
            </span>
          )}
        </label>
        {error && (
          <span className="text-xs text-red-500 mt-0.5 pl-6">{error}</span>
        )}
        {helperText && !error && (
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 pl-6">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
