import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface componentRenderOption {
    route?: string
    initialState?: DeepPartial<StateSchema>;
}

export function componentRender(component: React.ReactNode, option: componentRenderOption = {}) {
    const { route = '/', initialState } = option;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
