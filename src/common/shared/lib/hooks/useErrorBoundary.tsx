import React, { useState, useEffect, ErrorInfo } from 'react';

// Определяем тип для пропсов
interface Props {
  children: React.ReactNode;
}

export const ErrorBoundary: React.FC<Props> = ({ children }) => {
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = (error: Error) => {
    console.error('Error caught by ErrorBoundary:', error);
  };

  useEffect(() => {
    const errorHandler = (error: Error) => {
      setHasError(true);
      handleError(error);
    };

    // Добавляем слушателя для обработки ошибок
    window.addEventListener('error', (event) => errorHandler(event.error));

    // Удаляем слушателя при размонтировании
    return () => {
      window.removeEventListener('error', (event) => errorHandler(event.error));
    };
  }, []);

  if (hasError) {
    // Выводим запасной интерфейс при возникновении ошибки
    return <h1>Что-то пошло не так.</h1>;
  }

  return <>{children}</>;
};