import { LoadingHandler } from '@ui/fetchingHandlers/LoadingHandler';
import { ErrorHandler } from '@ui/fetchingHandlers/ErrorHandler';

export const FetchHandler = ({
  title,
  isLoading,
  isError,
}: {
  title: string;
  isLoading: boolean;
  isError: boolean;
}) => {
  if (isLoading) return <LoadingHandler title={title} isLoading={isLoading} />;
  if (isError) return <ErrorHandler />;
};
