import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

/**
 * Premium CustomSelect component for PINCOF forms
 * Replaces standard HTML <select> with a modern, animated dropdown
 * Fully compatible with native FormData and form.reset()
 */
export default function CustomSelect({
  name,
  options = [],
  defaultValue = '',
  value: controlledValue,
  onChange,
  placeholder = 'Select an option',
  className = '',
  icon: Icon = null,
  disabled = false,
}) {
  // Normalize options into { value, label, subtext, icon }
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === 'object' && opt !== null) {
      return {
        value: String(opt.value ?? opt.label),
        label: String(opt.label ?? opt.value),
        subtext: opt.subtext || null,
        icon: opt.icon || null,
      };
    }
    return {
      value: String(opt),
      label: String(opt),
      subtext: null,
      icon: null,
    };
  });

  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(() => {
    if (defaultValue !== undefined && defaultValue !== '') return String(defaultValue);
    return normalizedOptions[0]?.value || '';
  });

  const selectedValue = isControlled ? String(controlledValue) : internalValue;
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Support native form.reset()
  useEffect(() => {
    const form = containerRef.current?.closest('form');
    if (!form) return;

    const handleFormReset = () => {
      const resetVal = defaultValue !== undefined && defaultValue !== ''
        ? String(defaultValue)
        : (normalizedOptions[0]?.value || '');
      if (!isControlled) {
        setInternalValue(resetVal);
      }
      if (onChange) onChange(resetVal);
    };

    form.addEventListener('reset', handleFormReset);
    return () => form.removeEventListener('reset', handleFormReset);
  }, [defaultValue, normalizedOptions, onChange, isControlled]);

  // Close on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const currentOption = normalizedOptions.find((opt) => opt.value === selectedValue) || {
    label: selectedValue || placeholder,
    value: selectedValue,
  };

  const handleSelect = (val) => {
    if (!isControlled) {
      setInternalValue(val);
    }
    setIsOpen(false);
    if (onChange) onChange(val);
  };

  return (
    <div ref={containerRef} className="relative w-full text-left">
      {/* Hidden input ensures standard FormData(event.target) captures the field value */}
      <input type="hidden" name={name} value={selectedValue} />

      {/* Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm flex items-center justify-between gap-2.5 transition-all duration-200 cursor-pointer text-left ${
          isOpen
            ? 'border-brand-red ring-2 ring-brand-red/15 bg-white shadow-sm'
            : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50'
        } ${disabled ? 'opacity-50 cursor-not-allowed bg-slate-100' : ''} ${className}`}
      >
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          {Icon && <Icon className="w-4 h-4 text-slate-400 shrink-0" />}
          {currentOption.icon && <currentOption.icon className="w-4 h-4 text-brand-red shrink-0" />}
          <span className="truncate font-medium text-charcoal">
            {currentOption.label}
          </span>
        </div>

        <div className="flex items-center shrink-0">
          <ChevronDown
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ease-out ${
              isOpen ? 'rotate-180 text-brand-red' : 'group-hover:text-charcoal'
            }`}
          />
        </div>
      </button>

      {/* Dropdown Popover */}
      {isOpen && (
        <div
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl border border-slate-200 shadow-2xl z-50 py-1.5 max-h-60 overflow-y-auto overflow-x-hidden overscroll-contain select-none no-scrollbar"
          style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}
        >
          <ul role="listbox" className="p-1 space-y-0.5">
            {normalizedOptions.map((opt) => {
              const isSelected = opt.value === selectedValue;
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(opt.value)}
                  className={`px-3 py-2 rounded-lg text-sm flex items-center justify-between gap-3 cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-brand-red-light/80 text-brand-red font-semibold'
                      : 'text-charcoal hover:bg-slate-50 hover:text-charcoal'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    {opt.icon && (
                      <opt.icon
                        className={`w-4 h-4 shrink-0 ${
                          isSelected ? 'text-brand-red' : 'text-slate-400'
                        }`}
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="truncate">{opt.label}</div>
                      {opt.subtext && (
                        <div className="text-[11px] font-normal text-charcoal-light truncate mt-0.5">
                          {opt.subtext}
                        </div>
                      )}
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-brand-red shrink-0" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
