import React from 'react';

interface TemplateBuilderMarkProps {
  className?: string;
  accentClassName?: string;
}

/**
 * Nov4 Template Builder — architectural spreadsheet & live data-binding logo mark.
 */
export const TemplateBuilderMark: React.FC<TemplateBuilderMarkProps> = ({
  className = 'w-4 h-4',
  accentClassName = 'text-emerald-400',
}) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer sheet frame */}
      <rect
        x="2.25"
        y="2.25"
        width="15.5"
        height="15.5"
        rx="3.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Top formula / header ribbon */}
      <path d="M2.5 6.75H17.5" stroke="currentColor" strokeWidth="1.4" />
      {/* Vertical index column divider */}
      <path d="M7.5 6.75V17.5" stroke="currentColor" strokeWidth="1.4" />
      {/* Horizontal row divider */}
      <path d="M2.5 12.15H17.5" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.8" />
      {/* Live data-bound highlight cell (bottom-right) */}
      <rect
        x="9.3"
        y="13.65"
        width="6.4"
        height="2.4"
        rx="0.9"
        fill="currentColor"
        className={accentClassName}
      />
    </svg>
  );
};

