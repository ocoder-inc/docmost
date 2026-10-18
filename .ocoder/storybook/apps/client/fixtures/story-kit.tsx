// Shared state for stories: the signed-in user and workspace the app keeps in jotai atoms, the
// workspace's entitlements, and server responses put in the query cache (there is no backend).
import { useState, type ReactNode } from 'react';
import { getDefaultStore } from 'jotai';
import { useQueryClient } from '@tanstack/react-query';
import type { Decorator } from '@storybook/react-vite';

import { currentUserAtom } from '@source/apps/client/src/features/user/atoms/current-user-atom';
import { entitlementAtom } from '@source/apps/client/src/ee/entitlement/entitlement-atom';
import type { ICurrentUser, IUser } from '@source/apps/client/src/features/user/types/user.types';
import type { IWorkspace } from '@source/apps/client/src/features/workspace/types/workspace.types';
import type { Entitlements } from '@source/apps/client/src/ee/entitlement/entitlement.types';

export const sampleUser = {
  id: '01964d2a-2222-7c1e-9a4d-2b5e8f6c3a10',
  name: 'Jane Cooper',
  email: 'jane.cooper@example.com',
  avatarUrl: null,
  timezone: 'UTC',
  settings: { preferences: { fullPageWidth: false, pageEditMode: 'edit' } },
  invitedById: null,
  lastLoginAt: '2026-10-18T08:00:00Z',
  lastActiveAt: '2026-10-18T08:00:00Z',
  locale: 'en-US',
  createdAt: '2025-03-02T10:00:00Z',
  updatedAt: '2026-10-01T10:00:00Z',
  role: 'owner',
  workspaceId: '01964d2a-0000-7c1e-9a4d-2b5e8f6c3a10',
  deactivatedAt: null,
  deletedAt: null,
} as unknown as IUser;

export const sampleWorkspace = {
  id: '01964d2a-0000-7c1e-9a4d-2b5e8f6c3a10',
  name: 'Acme Corp',
  description: null,
  logo: null,
  hostname: 'acme',
  defaultSpaceId: 'sp-eng',
  customDomain: null,
  enableInvite: true,
  settings: { ai: { search: true, generative: true, chat: true, mcp: false } },
  status: 'active',
  enforceSso: false,
  stripeCustomerId: null,
  billingEmail: 'billing@example.com',
  trialEndAt: null,
  createdAt: '2025-03-02T10:00:00Z',
  updatedAt: '2026-10-01T10:00:00Z',
  emailDomains: [],
  memberCount: 24,
  plan: 'business',
  aiSearch: true,
  generativeAi: true,
  mcpEnabled: false,
  restrictApiToAdmins: false,
} as unknown as IWorkspace;

export const sampleCurrentUser: ICurrentUser = { user: sampleUser, workspace: sampleWorkspace };

/** A self-hosted enterprise licence: every feature on. */
export const allEntitlements: Entitlements = {
  cloud: false,
  tier: 'enterprise',
  features: [
    'sso:custom', 'sso:google', 'mfa', 'api:keys', 'comment:resolution', 'page:permissions', 'ai',
    'import:confluence', 'import:docx', 'import:pdf', 'attachment:indexing', 'security:settings',
    'mcp', 'scim', 'page:verification', 'audit:logs', 'retention', 'sharing:controls', 'templates',
    'comment:viewer', 'spaces:personal', 'export:docx', 'bases', 'oauth', 'ai:controls',
    'mcp:controls', 'public-space:appearance', 'siem',
  ],
};

export type QueryEntry = [queryKey: unknown[], data: unknown];

/** Fills the query cache with what the server would answer, before the component mounts. */
export function Seed({ entries, children }: { entries: QueryEntry[]; children: ReactNode }) {
  const client = useQueryClient();
  useState(() => {
    for (const [queryKey, data] of entries) {
      client.setQueryData(queryKey, data);
      client.setQueryDefaults(queryKey, { staleTime: Infinity });
    }
    return null;
  });
  return <>{children}</>;
}

/** Sets the app's jotai atoms before the story renders. */
function AppState({
  currentUser,
  entitlements,
  children,
}: {
  currentUser: ICurrentUser | null;
  entitlements: Entitlements | null;
  children: ReactNode;
}) {
  useState(() => {
    const store = getDefaultStore();
    store.set(currentUserAtom, currentUser);
    store.set(entitlementAtom, entitlements);
    return null;
  });
  return <>{children}</>;
}

/**
 * A decorator for the signed-in app: the sample user (or `currentUser`), the entitlements, and the
 * query responses in `queries`. The user and entitlements are also seeded as the queries that
 * `UserProvider` makes.
 */
export function withApp({
  currentUser = sampleCurrentUser,
  entitlements = allEntitlements,
  queries = [],
}: {
  currentUser?: ICurrentUser | null;
  entitlements?: Entitlements | null;
  queries?: QueryEntry[];
} = {}): Decorator {
  return (Story) => (
    <AppState currentUser={currentUser} entitlements={entitlements}>
      <Seed
        entries={[
          [['currentUser'], currentUser],
          [['entitlements'], entitlements],
          [['collab-token'], { token: 'collab-token' }],
          ...queries,
        ]}
      >
        <Story />
      </Seed>
    </AppState>
  );
}
