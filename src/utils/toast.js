/**
 * Bulletproof Toast Notification Utility
 * Supports direct invocation: toast.success(message) and toast.error(message)
 */

class ToastManager {
  constructor() {
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  emit(message, type = 'success') {
    const id = Date.now() + Math.random();
    this.listeners.forEach((listener) => {
      try {
        listener({ id, message, type });
      } catch (e) {
        console.error('Error dispatching toast:', e);
      }
    });
  }

  success(message) {
    this.emit(message || 'Thank you for your submission!', 'success');
  }

  error(message) {
    this.emit(message || 'Something went wrong. Please try again.', 'error');
  }
}

export const toast = new ToastManager();
export default toast;
