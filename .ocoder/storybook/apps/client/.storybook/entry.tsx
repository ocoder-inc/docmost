// Stand-in for apps/client/src/main.tsx: components import from it, but loading it mounts the whole app.
import { storyQueryClient } from './providers';

export const queryClient = storyQueryClient;
