import { Component, ErrorInfo, ReactNode } from "react";
import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../../../styles/theme";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Обновляем состояние при ошибке
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Логируем ошибку для разработчиков
    console.error("Error caught by boundary:", error, errorInfo);

    // В продакшене можно отправить ошибку в сервис аналитики
    if (import.meta.env.MODE === "production") {
      // Пример: отправка в Sentry, LogRocket и т.д.
      console.log("Error would be sent to error tracking service");
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      // Fallback UI при ошибке
      return (
        <ErrorContainer>
          <ErrorContent>
            <ErrorIcon>⚠️</ErrorIcon>
            <ErrorTitle>Что-то пошло не так</ErrorTitle>
            <ErrorDescription>
              Произошла непредвиденная ошибка. Мы уже работаем над её
              исправлением.
            </ErrorDescription>

            <ErrorActions>
              <ErrorButton onClick={this.handleGoHome}>
                Попробовать снова
              </ErrorButton>
              <ErrorButton secondary onClick={this.handleReload}>
                Обновить страницу
              </ErrorButton>
            </ErrorActions>

            {import.meta.env.MODE === "development" && this.state.error && (
              <ErrorDetails>
                <ErrorDetailsTitle>
                  Детали ошибки (только для разработчиков):
                </ErrorDetailsTitle>
                <ErrorDetailsText>
                  {this.state.error.toString()}
                </ErrorDetailsText>
                {this.state.errorInfo && (
                  <ErrorDetailsText>
                    {this.state.errorInfo.componentStack}
                  </ErrorDetailsText>
                )}
              </ErrorDetails>
            )}
          </ErrorContent>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${colors.lightGray};
  padding: ${rem(20)};
`;

const ErrorContent = styled.div`
  text-align: center;
  max-width: ${rem(500)};
  background: ${colors.white};
  padding: ${rem(40)};
  border-radius: ${rem(18)};
  box-shadow: 0 ${rem(4)} ${rem(20)} rgba(0, 0, 0, 0.1);
`;

const ErrorIcon = styled.div`
  font-size: ${rem(64)};
  margin-bottom: ${rem(20)};
`;

const ErrorTitle = styled.h1`
  font-size: ${rem(28)};
  font-weight: 600;
  color: ${colors.black};
  margin-bottom: ${rem(16)};
`;

const ErrorDescription = styled.p`
  font-size: ${rem(16)};
  color: ${colors.silver};
  line-height: 1.5;
  margin-bottom: ${rem(32)};
`;

const ErrorActions = styled.div`
  display: flex;
  gap: ${rem(16)};
  justify-content: center;
  margin-bottom: ${rem(32)};
`;

const ErrorButton = styled.button<{ secondary?: boolean }>`
  padding: ${rem(12)} ${rem(24)};
  border-radius: ${rem(12)};
  border: none;
  font-size: ${rem(16)};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  background: ${({ secondary }) => (secondary ? colors.gray : colors.orange)};
  color: ${({ secondary }) => (secondary ? colors.black : colors.white)};

  &:hover {
    background: ${({ secondary }) =>
      secondary ? colors.silver : colors.darkOrange};
    transform: translateY(-2px);
  }
`;

const ErrorDetails = styled.div`
  margin-top: ${rem(32)};
  padding-top: ${rem(24)};
  border-top: 1px solid ${colors.gray};
  text-align: left;
`;

const ErrorDetailsTitle = styled.h3`
  font-size: ${rem(14)};
  font-weight: 600;
  color: ${colors.black};
  margin-bottom: ${rem(12)};
`;

const ErrorDetailsText = styled.pre`
  font-size: ${rem(12)};
  color: ${colors.silver};
  background: ${colors.lightGray};
  padding: ${rem(12)};
  border-radius: ${rem(8)};
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
`;

export default ErrorBoundary;
