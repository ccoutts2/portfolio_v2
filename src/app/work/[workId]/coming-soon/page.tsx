import { BackNavLink } from "@/components";

export default function Page() {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-clamp-home p-4 text-center">
        This project is stil in development. Revisit again soon!
      </h1>
      <BackNavLink />
    </section>
  );
}
