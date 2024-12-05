import React, { useState, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

export const ErrorBoundary: React.FC<Props> = ({ children }) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleError = (error: Error) => {
    console.error('Error caught by ErrorBoundary:', error);
    // Устанавливаем текст ошибки, который будет отображаться в h1
    setErrorMessage(error.message);
  };

  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      setHasError(true);
      handleError(event.error);
    };

    // Добавляем слушателя для обработки ошибок
    window.addEventListener('error', errorHandler);

    // Удаляем слушателя при размонтировании
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    // Выводим запасной интерфейс при возникновении ошибки
    return <h1>{errorMessage || 'Что-то пошло не так.'}</h1>;
  }

  return <>{children}</>;
};
