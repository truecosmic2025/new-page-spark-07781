/**
 * Opens the Claudde Bot chat widget.
 * The widget mounts its own host element with a shadowRoot containing the
 * launcher/open button. We locate it and simulate a click, retrying briefly
 * in case the widget script hasn't finished mounting yet.
 */
export function openClauddeWidget(maxAttempts = 10, intervalMs = 300): void {
  let attempts = 0;

  const tryOpen = () => {
    attempts += 1;

    // Find candidate host elements whose shadowRoot contains a clickable launcher
    const hosts = Array.from(document.querySelectorAll("*")).filter(
      (el) => el.shadowRoot
    );

    for (const host of hosts) {
      const root = host.shadowRoot!;
      const launcher = root.querySelector<HTMLElement>(
        'button, [role="button"], .claudde-launcher, .claudde-widget-button, .launcher, .widget-launcher, [class*="launcher"], [class*="bubble"], [class*="toggle"]'
      );
      if (launcher) {
        launcher.click();
        return;
      }
    }

    if (attempts < maxAttempts) {
      setTimeout(tryOpen, intervalMs);
    }
  };

  tryOpen();
}
