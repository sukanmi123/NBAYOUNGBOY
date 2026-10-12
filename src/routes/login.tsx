import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { authClient } from "@/lib/auth-client";
import { getSignedInUser } from "@/lib/auth.server";

export const Route = createFileRoute("/login")({
  beforeLoad: async () => {
    if (await getSignedInUser()) throw redirect({ to: "/" });
  },
  component: LoginPage,
});

function LoginPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError("");
    try {
      const result = mode === "signup"
        ? await authClient.signUp.email({ name: name.trim(), email: email.trim(), password })
        : await authClient.signIn.email({ email: email.trim(), password });
      if (result.error) throw new Error(result.error.message || "Could not sign in.");
      window.location.assign("/");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not sign in. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="account-page">
      <div className="account-card">
        <Link to="/" className="account-back">YB SHOP</Link>
        <p className="account-eyebrow">YOUR ACCOUNT</p>
        <h1>{mode === "signin" ? "Sign in" : "Create your account"}</h1>
        <p className="account-copy">Sign in to browse the shop and manage your orders.</p>
        <form onSubmit={submit} className="account-form">
          {mode === "signup" && <label>Name<input required autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} /></label>}
          <label>Email<input required type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} /></label>
          <label>Password<input required type="password" minLength={10} autoComplete={mode === "signup" ? "new-password" : "current-password"} value={password} onChange={(event) => setPassword(event.target.value)} /><small>At least 10 characters.</small></label>
          {error && <p className="account-error" role="alert">{error}</p>}
          <button type="submit" disabled={pending}>{pending ? "PLEASE WAIT…" : mode === "signin" ? "SIGN IN" : "CREATE ACCOUNT"}</button>
        </form>
        <p className="account-switch">
          {mode === "signin" ? "New here? " : "Already have an account? "}
          <button type="button" onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(""); }}>
            {mode === "signin" ? "Create an account" : "Sign in"}
          </button>
        </p>
      </div>
    </main>
  );
}
