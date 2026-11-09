export function MobileBar({
  phone,
  phoneHref,
  whatsappHref,
}: {
  phone: string;
  phoneHref: string;
  whatsappHref: string;
}) {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-cream/95 backdrop-blur md:hidden">
        <div
          className="grid grid-cols-3 gap-2 px-3 pt-2"
          style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
        >
          <a
            href={phoneHref}
            className="inline-flex h-12 items-center justify-center rounded-full bg-ink text-sm font-semibold text-cream"
          >
            Bellen
          </a>
          <a
            href={whatsappHref}
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f7a45] text-sm font-semibold text-white"
          >
            WhatsApp
          </a>
          <a
            href="/contact#offerte"
            className="inline-flex h-12 items-center justify-center rounded-full bg-clay-deep text-sm font-semibold text-white"
          >
            Offerte
          </a>
        </div>
        <span className="sr-only">Bel {phone}</span>
      </div>
      <a
        href={whatsappHref}
        className="fixed bottom-6 right-6 z-30 hidden h-14 items-center gap-2 rounded-full bg-[#1f7a45] px-5 font-semibold text-white shadow-lg hover:bg-[#18663a] md:inline-flex"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 16.7L1 23l6.5-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.9.6.6-3.8-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.8 11.8 0 0 0 4.6 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}
