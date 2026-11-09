import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "",
  markClassName = "h-8 w-auto sm:h-10",
  wordClassName = "text-[1.45rem] sm:text-[1.7rem]",
  stacked = false,
  linked = true,
  priority = false,
}: {
  className?: string;
  markClassName?: string;
  wordClassName?: string;
  stacked?: boolean;
  linked?: boolean;
  priority?: boolean;
}) {
  const content = (
    <>
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={870}
        height={216}
        priority={priority}
        className={`shrink-0 ${markClassName}`}
      />
      <span className={`logo-word ${wordClassName}`}>
        {stacked ? (
          <>
            Alles Onder
            <span className="block">Een Dak</span>
          </>
        ) : (
          <>
            Alles Onder
            <br className="xl:hidden" />
            <span className="hidden xl:inline"> </span>
            Een Dak
          </>
        )}
      </span>
    </>
  );

  if (!linked) {
    return <span className={`inline-flex items-center ${className}`}>{content}</span>;
  }

  return (
    <Link
      href="/"
      aria-label="Alles Onder Een Dak, naar de startpagina"
      className={`flex min-w-0 items-center ${className}`}
    >
      {content}
    </Link>
  );
}
