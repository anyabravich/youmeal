import { useState, useCallback } from "react";

interface ErrorState {
  hasError: boolean;
  message: string;
  code?: string;
  details?: any;
}

interface UseErrorHandlerReturn {
  error: ErrorState;
  setError: (message: string, code?: string, details?: any) => void;
  clearError: () => void;
  handleAsyncError: <T>(asyncFn: () => Promise<T>) => Promise<T | null>;
}

export const useErrorHandler = (): UseErrorHandlerReturn => {
  const [error, setErrorState] = useState<ErrorState>({
    hasError: false,
    message: "",
  });

  const setError = useCallback(
    (message: string, code?: string, details?: any) => {
      setErrorState({
        hasError: true,
        message,
        code,
        details,
      });

      console.error("Error occurred:", { message, code, details });
    },
    []
  );

  const clearError = useCallback(() => {
    setErrorState({
      hasError: false,
      message: "",
    });
  }, []);

  const handleAsyncError = useCallback(
    async <T>(asyncFn: () => Promise<T>): Promise<T | null> => {
      try {
        return await asyncFn();
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Произошла неизвестная ошибка";
        const errorCode =
          err instanceof Error && "code" in err ? String(err.code) : undefined;

        setError(errorMessage, errorCode, err);
        return null;
      }
    },
    [setError]
  );

  return {
    error,
    setError,
    clearError,
    handleAsyncError,
  };
};
