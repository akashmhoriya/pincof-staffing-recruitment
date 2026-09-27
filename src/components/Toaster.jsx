import React, { useState, useEffect } from 'react';
import { toast } from '../utils/toast';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toaster() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const unsubscribe = toast.subscribe((newToast) => {
      setToasts((prev) => [...prev, newToast]);

      // Auto dismiss after 5 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, 5000);
    });

    return () => unsubscribe();
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed top-6 right-6 z-[999999] flex flex-col gap-3 pointer-events-none max-w-md w-full px-4 sm:px-0"
      aria-live="assertive"
    >
      {toasts.map((item) => {
        const isSuccess = item.type === 'success';

        return (
          <div
            key={item.id}
            className={`pointer-events-auto flex items-center justify-between gap-3 p-4 rounded-xl border shadow-2xl transition-all duration-300 transform translate-y-0 ${
              isSuccess
                ? 'bg-white border-emerald-300 text-charcoal'
                : 'bg-white border-red-300 text-charcoal'
            }`}
            style={{
              boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
            }}
          >
            <div className="flex items-center gap-3">
              {isSuccess ? (
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              ) : (
                <div className="w-9 h-9 rounded-full bg-red-50 text-red-600 border border-red-200 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
              )}

              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isSuccess ? 'Success' : 'Notice'}
                </p>
                <p className="text-sm font-semibold text-charcoal leading-snug">
                  {item.message}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => removeToast(item.id)}
              className="text-slate-400 hover:text-charcoal p-1.5 rounded-lg hover:bg-slate-100 transition-colors shrink-0"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
