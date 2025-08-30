import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../../../styles/theme";

interface ErrorDisplayProps {
  error: {
    hasError: boolean;
    message: string;
    code?: string;
    details?: any;
  };
  onRetry?: () => void;
  onClose?: () => void;
  title?: string;
}

const ErrorDisplay = ({
  error,
  onRetry,
  onClose,
  title = "Произошла ошибка",
}: ErrorDisplayProps) => {
  if (!error.hasError) return null;

  return (
    <ErrorContainer>
      <ErrorContent>
        <ErrorHeader>
          <ErrorIcon>❌</ErrorIcon>
          <ErrorTitle>{title}</ErrorTitle>
          {onClose && (
            <CloseButton onClick={onClose} aria-label="Закрыть">
              ×
            </CloseButton>
          )}
        </ErrorHeader>

        <ErrorMessage>{error.message}</ErrorMessage>

        {error.code && <ErrorCode>Код ошибки: {error.code}</ErrorCode>}

        <ErrorActions>
          {onRetry && (
            <RetryButton onClick={onRetry}>Попробовать снова</RetryButton>
          )}
        </ErrorActions>

        {import.meta.env.MODE === "development" && error.details && (
          <ErrorDetails>
            <ErrorDetailsTitle>Детали ошибки:</ErrorDetailsTitle>
            <ErrorDetailsText>
              {JSON.stringify(error.details, null, 2)}
            </ErrorDetailsText>
          </ErrorDetails>
        )}
      </ErrorContent>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  position: fixed;
  top: ${rem(20)};
  right: ${rem(20)};
  z-index: 1000;
  max-width: ${rem(400)};
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const ErrorContent = styled.div`
  background: ${colors.white};
  border: 2px solid ${colors.orange};
  border-radius: ${rem(12)};
  padding: ${rem(20)};
  box-shadow: 0 ${rem(4)} ${rem(20)} rgba(0, 0, 0, 0.15);
`;

const ErrorHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(12)};
  margin-bottom: ${rem(16)};
`;

const ErrorIcon = styled.span`
  font-size: ${rem(24)};
`;

const ErrorTitle = styled.h3`
  font-size: ${rem(18)};
  font-weight: 600;
  color: ${colors.black};
  margin: 0;
  flex: 1;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: ${rem(24)};
  color: ${colors.silver};
  cursor: pointer;
  padding: 0;
  width: ${rem(24)};
  height: ${rem(24)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.gray};
    color: ${colors.black};
  }
`;

const ErrorMessage = styled.p`
  font-size: ${rem(14)};
  color: ${colors.black};
  line-height: 1.4;
  margin: 0 0 ${rem(12)} 0;
`;

const ErrorCode = styled.p`
  font-size: ${rem(12)};
  color: ${colors.silver};
  font-family: monospace;
  background: ${colors.lightGray};
  padding: ${rem(4)} ${rem(8)};
  border-radius: ${rem(4)};
  margin: 0 0 ${rem(16)} 0;
`;

const ErrorActions = styled.div`
  display: flex;
  gap: ${rem(12)};
  margin-bottom: ${rem(16)};
`;

const RetryButton = styled.button`
  background: ${colors.orange};
  color: ${colors.white};
  border: none;
  padding: ${rem(8)} ${rem(16)};
  border-radius: ${rem(8)};
  font-size: ${rem(14)};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.darkOrange};
    transform: translateY(-1px);
  }
`;

const ErrorDetails = styled.div`
  margin-top: ${rem(16)};
  padding-top: ${rem(16)};
  border-top: 1px solid ${colors.gray};
`;

const ErrorDetailsTitle = styled.h4`
  font-size: ${rem(12)};
  font-weight: 600;
  color: ${colors.black};
  margin: 0 0 ${rem(8)} 0;
`;

const ErrorDetailsText = styled.pre`
  font-size: ${rem(11)};
  color: ${colors.silver};
  background: ${colors.lightGray};
  padding: ${rem(8)};
  border-radius: ${rem(4)};
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
  max-height: ${rem(200)};
`;

export default ErrorDisplay;
