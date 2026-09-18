/// <reference types="vite/client" />

interface ClauddeWidget {
  open(): void;
}

interface Window {
  Claudde?: ClauddeWidget;
}
