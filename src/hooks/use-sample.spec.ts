import { useSample } from './use-sample';
import { act, renderHook } from '@testing-library/react';

describe('use-sample', () => {
  test('アクティブになるとcallbackが呼ばれる', () => {
    const callback = vitest.fn();
    const { result } = renderHook(() => {
      return useSample(callback);
    });
    expect(callback).toHaveBeenCalledTimes(0);

    act(() => {
      result.current.setIsActive(true);
    });
    expect(callback).toHaveBeenCalledTimes(1);

    act(() => {
      result.current.setIsActive(false);
    });
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
