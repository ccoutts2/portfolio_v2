import { TransitionLink } from "../TransitionLink/TransitionLink";

export const BackNavLink = () => {
  return (
    <nav>
      <TransitionLink underline href="/work">
        ← Back
      </TransitionLink>
    </nav>
  );
};
