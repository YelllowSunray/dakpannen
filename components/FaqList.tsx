import type { Faq } from "@/lib/site";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((faq) => (
        <details key={faq.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-medium text-ink">
            {faq.question}
            <span
              aria-hidden="true"
              className="keep-square grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-xl leading-none text-clay-deep motion-safe:transition group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-5 leading-relaxed text-bark">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
