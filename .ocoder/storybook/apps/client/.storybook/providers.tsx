import { type ReactNode, useLayoutEffect, useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MantineProvider as Provider1 } from '@mantine/core';
import { mantineCssResolver as value1_cssVariablesResolver, theme as value1_theme } from '@source/apps/client/src/theme';
import { ModalsProvider as Provider2 } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider as Provider4 } from 'react-helmet-async';
import { PostHogProvider as Provider5 } from 'posthog-js/react';
import { default as value5_client } from 'posthog-js';

/**
 * The stories' query client: no retries against a backend that is not there. One instance, so code
 * that imports the app's client (through the entry stand-in) uses the same cache; emptied per story.
 */
export const storyQueryClient = new QueryClient({
  defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
});

function StoryQueryClient({ children }: { children: ReactNode }) {
  const [client] = useState(() => {
    storyQueryClient.clear();
    return storyQueryClient;
  });
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

/** Applies the theme the capture asked for where apps commonly read it. */
function useDocumentTheme(theme: string) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
    root.style.colorScheme = theme === 'dark' ? 'dark' : 'light';
  }, [theme]);
}

export function Providers({ theme, children }: { theme: string; children: ReactNode }) {
  useDocumentTheme(theme);
  return (
    <>
      <MemoryRouter>
        <Provider1 theme={value1_theme} cssVariablesResolver={value1_cssVariablesResolver} forceColorScheme={theme === 'dark' ? 'dark' : 'light'}>
          <Provider2>
            <StoryQueryClient>
              <Notifications position="bottom-center" limit={3} zIndex={10000} />
              <Provider4>
                <Provider5 client={value5_client}>
                  {children}
                </Provider5>
              </Provider4>
            </StoryQueryClient>
          </Provider2>
        </Provider1>
      </MemoryRouter>
    </>
  );
}
