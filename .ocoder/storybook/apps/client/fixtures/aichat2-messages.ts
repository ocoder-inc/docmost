// AI chat transcript data, shaped like the server's AiChatMessage / AiChatToolCall records,
// and an AI search ("AI Answers") response.
import type {
  AiChatMessage,
  AiChatToolCall,
} from '@source/apps/client/src/ee/ai-chat/types/ai-chat.types';
import type { IAiSearchResponse } from '@source/apps/client/src/ee/ai/services/ai-search-service';

const chatId = '01964d2a-9000-7c1e-9a4d-2b5e8f6c3a10';

export const searchToolCalls: AiChatToolCall[] = [
  {
    id: 'call_01',
    name: 'search_pages',
    args: { query: 'on-call rotation' },
    result: [
      { pageId: 'pg-oncall', title: 'On-call handbook', slugId: 'k3j9x2a1', spaceSlug: 'engineering' },
      { pageId: 'pg-incident', title: 'Incident response', slugId: 'p8q2m4z7', spaceSlug: 'engineering' },
    ],
  },
  {
    id: 'call_02',
    name: 'get_page',
    args: { pageId: 'pg-oncall' },
    result: { title: 'On-call handbook', content: 'Rotations change every Monday at 10:00 UTC…' },
  },
];

export const chatMessages: AiChatMessage[] = [
  {
    id: 'msg-01',
    chatId,
    role: 'user',
    content: 'How does our on-call rotation work?',
    toolCalls: null,
    metadata: null,
    createdAt: '2026-10-18T09:12:00Z',
  },
  {
    id: 'msg-02',
    chatId,
    role: 'assistant',
    content:
      'According to the [On-call handbook](/s/engineering/p/k3j9x2a1), the rotation works like this:\n\n' +
      '- Each engineer is on call for **one week**, starting Monday at 10:00 UTC.\n' +
      '- The secondary on-call covers escalations after 15 minutes.\n' +
      '- Hand-offs happen in the `#oncall` channel.\n\n' +
      'See also [Incident response](/s/engineering/p/p8q2m4z7) for the severity levels.',
    toolCalls: searchToolCalls,
    metadata: null,
    createdAt: '2026-10-18T09:12:06Z',
  },
  {
    id: 'msg-03',
    chatId,
    role: 'tool',
    content: null,
    toolCalls: null,
    metadata: null,
    createdAt: '2026-10-18T09:12:06Z',
  },
  {
    id: 'msg-04',
    chatId,
    role: 'user',
    content:
      'Summarize the attached postmortem.\n\n<referenced_pages>\n[{"id":"pg-incident"}]\n</referenced_pages>',
    toolCalls: null,
    metadata: {
      attachments: [
        { id: 'att-01', fileName: 'postmortem-2026-10-12.pdf', fileExt: 'pdf' },
        { id: 'att-02', fileName: 'latency-graph.png', fileExt: 'png' },
      ],
    },
    createdAt: '2026-10-18T09:14:30Z',
  },
];

export const userMessage = chatMessages[0];
export const assistantMessage = chatMessages[1];
export const userMessageWithAttachments = chatMessages[3];

/** Tool calls while a reply is streaming: the last one has no result yet. */
export const streamingToolCalls: AiChatToolCall[] = [
  searchToolCalls[0],
  { id: 'call_03', name: 'get_page', args: { pageId: 'pg-incident' } },
];

export const aiSearchResponse: IAiSearchResponse = {
  answer:
    'New engineers get access to **GitHub**, **Linear** and the staging cluster on their first day. ' +
    'Your manager files the access request; it is usually approved within a few hours.\n\n' +
    '1. Accept the GitHub organisation invite.\n' +
    '2. Set up SSO for the staging cluster.\n' +
    '3. Join the `#engineering` channel.',
  sources: [
    {
      pageId: 'pg-onboarding',
      title: 'Engineering onboarding',
      slugId: 'a1b2c3d4',
      spaceSlug: 'engineering',
      similarity: 0.89,
      distance: 0.11,
      chunkIndex: 0,
      excerpt: 'On your first day you will get access to GitHub…',
    },
    {
      pageId: 'pg-onboarding',
      title: 'Engineering onboarding',
      slugId: 'a1b2c3d4',
      spaceSlug: 'engineering',
      similarity: 0.72,
      distance: 0.28,
      chunkIndex: 3,
      excerpt: 'Staging access requires SSO…',
    },
    {
      pageId: 'pg-access',
      title: 'Requesting system access',
      slugId: 'e5f6g7h8',
      spaceSlug: 'it',
      similarity: 0.81,
      distance: 0.19,
      chunkIndex: 1,
      excerpt: 'Managers file access requests through the IT portal…',
    },
  ],
};
