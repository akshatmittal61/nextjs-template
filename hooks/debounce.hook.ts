import { useEffect, useRef, useState } from "react";

const useMountEffect = (fn: any) => {
	const mounted = useRef(false);
	return useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
			return fn && fn();
		}
	}, [fn]);
};

const useUnmountEffect = (fn: any) => useEffect(() => fn, [fn]);

export const useDebounce = <T>(
	initialValue: T,
	delay: number
): [T, T, (_: T) => void] => {
	const [inputValue, setInputValue] = useState<T>(initialValue);
	const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);
	const mountedRef = useRef(false);
	const timeoutRef = useRef<any>(null);
	const cancelTimer = () => window.clearTimeout(timeoutRef.current);

	useMountEffect(() => {
		mountedRef.current = true;
	});

	useUnmountEffect(() => {
		cancelTimer();
	});

	useEffect(() => {
		if (!mountedRef.current) {
			return;
		}

		cancelTimer();
		timeoutRef.current = window.setTimeout(() => {
			setDebouncedValue(inputValue);
		}, delay);
	}, [inputValue, delay]);

	return [inputValue, debouncedValue, setInputValue];
};
