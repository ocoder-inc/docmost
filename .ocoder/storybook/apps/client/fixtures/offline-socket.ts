// The app opens a socket.io connection (path /socket.io) once the user is loaded. There is no server
// and capture blocks WebSockets, so those connections get a socket that stays connecting forever.
// engine.io-client reads `globalThis.WebSocket` when it loads, so this runs from providers.tsx first.
const RealWebSocket = globalThis.WebSocket;

class OfflineSocket extends EventTarget {
  static readonly CONNECTING = 0;
  static readonly OPEN = 1;
  static readonly CLOSING = 2;
  static readonly CLOSED = 3;
  readonly url: string;
  readyState = 0;
  binaryType = 'blob';
  bufferedAmount = 0;
  extensions = '';
  protocol = '';
  onopen: ((event: Event) => void) | null = null;
  onclose: ((event: Event) => void) | null = null;
  onerror: ((event: Event) => void) | null = null;
  onmessage: ((event: MessageEvent) => void) | null = null;
  constructor(url: string | URL) {
    super();
    this.url = String(url);
  }
  send() {}
  close() {
    this.readyState = 3;
  }
}

if (RealWebSocket) {
  globalThis.WebSocket = new Proxy(RealWebSocket, {
    construct(target, args) {
      const url = new URL(String(args[0]), location.href);
      if (url.pathname.startsWith('/socket.io')) return new OfflineSocket(url);
      return Reflect.construct(target, args);
    },
  });
}

export {};
