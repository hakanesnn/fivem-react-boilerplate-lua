import { useNuiEvent } from '../hooks/useNuiEvent';
import { fetchNui } from '../utils/fetchNui';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { printf } from 'fast-printf';
import locales from '../../../locales/en.json';

type Locales = typeof locales.ui;

interface LocaleContextValue {
	locale: Locales;
	setLocale: (locale: Locales) => void;
	format: (str: string, ...args: any[]) => string;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

const LocaleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [locale, setLocale] = useState<Locales>(locales.ui);

	useEffect(() => {
		fetchNui('loadLocale');
	}, []);

	useNuiEvent('setLocale', async (data: Locales) => setLocale(data));

	const format = (str: string, ...args: any[]): string => {
		return printf(str, ...args);
	};

	const value = { locale, setLocale, format };

	return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export default LocaleProvider;

export const useLocale = (): LocaleContextValue => {
	const context = useContext(LocaleContext);
	if (context === undefined) {
		throw new Error('useLocale must be used within a LocaleProvider');
	}
	return context;
};
