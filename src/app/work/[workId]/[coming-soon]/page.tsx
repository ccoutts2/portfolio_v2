import { TransitionLink } from "@/components";

export default function Page() {
  return (
    <section className="h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-clampHome p-4 text-center">
        This project is stil in development. Revisit again soon!
      </h1>
      <nav>
        <TransitionLink underline href="/work">
          ← Back
        </TransitionLink>
      </nav>
    </section>
  );
}
