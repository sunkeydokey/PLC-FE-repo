import { LoadingHandler } from '@ui/fetchingHandlers/LoadingHandler';
import { ErrorHandler } from '@ui/fetchingHandlers/ErrorHandler';

export const FetchHandler = ({
  isLoading,
  isError,
}: {
  isLoading: boolean;
  isError: boolean;
}) => {
  if (isLoading) return <LoadingHandler />;
  if (isError) return <ErrorHandler />;
};
