import { useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import Observable from "zen-observable-ts";

const createListener = <S>(
  subscriber: string,
  handler: (data: S) => void,
  args?: any
) => {
  const listener = (
    API.graphql(graphqlOperation(subscriber, args)) as Observable<any>
  ).subscribe({
    next: (data) => {
      handler(data);
    },
  });
  return listener;
};

const useListener = <S>(
  subscriber: string,
  handler: (data: S) => void,
  args?: { [parameterName: string]: string },
  deps?: any[]
) => {
  useEffect(() => {
    const listener = createListener(subscriber, handler, args);
    return () => listener.unsubscribe();
  }, deps);
};

export default useListener;
