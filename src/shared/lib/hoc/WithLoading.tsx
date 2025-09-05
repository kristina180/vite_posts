import React, { type FC } from "react";

interface IWithLoadingProps {
  isLoading: boolean;
}

export function withLoading<T extends object>(
  WrappedComponent: React.ComponentType<T>
): FC<T & IWithLoadingProps> {
  return function WithLoadingComponent(props: T & IWithLoadingProps) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...(restProps as unknown as T)} />;
  };
}
