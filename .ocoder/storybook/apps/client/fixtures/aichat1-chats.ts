// AI chat data as the server returns it: the chat list (POST /ai/chats, an infinite query) and one
// chat's info with its messages (POST /ai/chats/info). Dates are relative to now so the sidebar
// groups them into Today / Yesterday / Previous 7 days / Previous 30 days / Older.
import type {
  AiChat,
  AiChatMessage,
} from '@source/apps/client/src/ee/ai-chat/types/ai-chat.types';
import { sampleUser, sampleWorkspace } from './story-kit';

const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;

function ago(ms: number): string {
  return new Date(Date.now() - ms).toISOString();
}

/** Earlier today, but never before midnight. */
function todayAt(minutesAfterMidnight: number): string {
  const d = new Date();
  d.setHours(0, minutesAfterMidnight, 0, 0);
  return (d.getTime() > Date.now() ? new Date(Date.now() - 60_000) : d).toISOString();
}

function chat(id: string, title: string | null, updatedAt: string): AiChat {
  return {
    id,
    workspaceId: sampleWorkspace.id,
    creatorId: sampleUser.id,
    title,
    createdAt: updatedAt,
    updatedAt,
  };
}

export const aiChats: AiChat[] = [
  chat('01964d2a-c001-7c1e-9a4d-2b5e8f6c3a10', 'Q3 onboarding checklist summary', todayAt(9 * 60 + 12)),
  chat('01964d2a-c002-7c1e-9a4d-2b5e8f6c3a10', 'Draft release notes for v0.24', todayAt(8 * 60 + 5)),
  chat('01964d2a-c003-7c1e-9a4d-2b5e8f6c3a10', 'Where is the incident runbook?', ago(DAY + 2 * HOUR)),
  chat('01964d2a-c004-7c1e-9a4d-2b5e8f6c3a10', 'Compare our API rate limits', ago(3 * DAY)),
  chat('01964d2a-c005-7c1e-9a4d-2b5e8f6c3a10', null, ago(5 * DAY)),
  chat('01964d2a-c006-7c1e-9a4d-2b5e8f6c3a10', 'Hiring plan for the design team', ago(12 * DAY)),
  chat('01964d2a-c007-7c1e-9a4d-2b5e8f6c3a10', 'Translate the security policy to German', ago(70 * DAY)),
];

/** The `['ai-chats']` infinite query's cached data. */
export function aiChatsPages(items: AiChat[] = aiChats) {
  return {
    pages: [
      {
        items,
        meta: { limit: 30, hasNextPage: false, hasPrevPage: false, nextCursor: null, prevCursor: null },
      },
    ],
    pageParams: [undefined],
  };
}

export const activeChat = aiChats[0];

export const activeChatMessages: AiChatMessage[] = [
  {
    id: '01964d2a-m001-7c1e-9a4d-2b5e8f6c3a10',
    chatId: activeChat.id,
    role: 'user',
    content: 'Summarize the Q3 onboarding checklist and tell me what is still open.',
    toolCalls: null,
    metadata: null,
    createdAt: todayAt(9 * 60 + 10),
  },
  {
    id: '01964d2a-m002-7c1e-9a4d-2b5e8f6c3a10',
    chatId: activeChat.id,
    role: 'assistant',
    content:
      'Here is a summary of the **Q3 onboarding checklist** in the Engineering space:\n\n' +
      '1. Laptop and accounts are provisioned on day one.\n' +
      '2. Each new hire gets a buddy for the first four weeks.\n' +
      '3. The security training must be finished in the first week.\n\n' +
      'Still open: the *buddy assignments* for the two September hires, and the updated VPN guide.',
    toolCalls: [
      {
        id: 'call_1',
        name: 'search_pages',
        args: { query: 'Q3 onboarding checklist' },
        result: [{ id: 'pg-1', title: 'Q3 onboarding checklist' }],
      },
      {
        id: 'call_2',
        name: 'get_page',
        args: { pageId: 'pg-1' },
        result: { title: 'Q3 onboarding checklist' },
      },
    ],
    metadata: null,
    createdAt: todayAt(9 * 60 + 11),
  },
  {
    id: '01964d2a-m003-7c1e-9a4d-2b5e8f6c3a10',
    chatId: activeChat.id,
    role: 'user',
    content: 'Who owns the VPN guide?',
    toolCalls: null,
    metadata: null,
    createdAt: todayAt(9 * 60 + 12),
  },
  {
    id: '01964d2a-m004-7c1e-9a4d-2b5e8f6c3a10',
    chatId: activeChat.id,
    role: 'assistant',
    content: 'The VPN guide was last edited by Jane Cooper in the IT space. She is listed as its owner.',
    toolCalls: null,
    metadata: null,
    createdAt: todayAt(9 * 60 + 12),
  },
];

/** The `['ai-chat', chatId]` query's cached data. */
export const activeChatInfo = { chat: activeChat, messages: activeChatMessages };

/** A page the aside chat panel is opened from (`['pages', slugId]`). */
export const asidePage = {
  id: '01964d2a-p001-7c1e-9a4d-2b5e8f6c3a10',
  slugId: 'q3onboard1',
  title: 'Q3 onboarding checklist',
  icon: null,
  spaceId: 'sp-eng',
  space: { id: 'sp-eng', name: 'Engineering', slug: 'engineering' },
};
