export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-4 pt-20 pb-16 text-center">
        <div className="mb-4 inline-block rounded-full bg-[#161b22] px-4 py-1 text-sm text-[#58a6ff] border border-[#30363d]">
          AI-Powered Calorie Tracking
        </div>
        <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Snap photos to track calories{" "}
          <span className="text-[#58a6ff]">automatically</span>
        </h1>
        <p className="mb-8 max-w-xl text-lg text-[#8b949e]">
          Point your camera at any meal. Our AI instantly identifies food items and estimates calories. Review, adjust, and log — all in seconds.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={checkoutUrl}
            className="rounded-lg bg-[#58a6ff] px-8 py-3 font-semibold text-[#0d1117] hover:bg-[#79b8ff] transition-colors"
          >
            Start Tracking — $7/mo
          </a>
          <a
            href="#faq"
            className="rounded-lg border border-[#30363d] px-8 py-3 font-semibold text-[#c9d1d9] hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          {[
            ["📸", "Snap a Photo", "Point at your meal"],
            ["🤖", "AI Identifies", "Instant food recognition"],
            ["✏️", "Review & Log", "Adjust and save"]
          ].map(([icon, title, desc]) => (
            <div key={title} className="flex flex-col items-center gap-1">
              <span className="text-2xl">{icon}</span>
              <span className="font-semibold text-white text-sm">{title}</span>
              <span className="text-xs text-[#8b949e]">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center px-4 py-16">
        <h2 className="mb-2 text-2xl font-bold text-white">Simple Pricing</h2>
        <p className="mb-10 text-[#8b949e]">One plan. Everything included.</p>
        <div className="w-full max-w-sm rounded-2xl border border-[#30363d] bg-[#161b22] p-8 shadow-xl">
          <div className="mb-1 text-sm font-semibold uppercase tracking-widest text-[#58a6ff]">Pro</div>
          <div className="mb-1 flex items-end gap-1">
            <span className="text-5xl font-bold text-white">$7</span>
            <span className="mb-2 text-[#8b949e]">/month</span>
          </div>
          <p className="mb-6 text-sm text-[#8b949e]">Cancel anytime. No hidden fees.</p>
          <ul className="mb-8 space-y-3 text-sm">
            {[
              "Unlimited photo scans",
              "AI food & calorie recognition",
              "Manual correction & editing",
              "Daily & weekly calorie logs",
              "Mobile-first design",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full rounded-lg bg-[#58a6ff] py-3 text-center font-semibold text-[#0d1117] hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-2xl px-4 py-16">
        <h2 className="mb-10 text-center text-2xl font-bold text-white">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How accurate is the AI calorie estimation?",
              a: "Our AI is trained on millions of food images and achieves ~90% accuracy for common foods. You can always manually adjust any estimate before saving to your log."
            },
            {
              q: "What happens if the AI misidentifies my food?",
              a: "Every scan shows you the identified items with calorie estimates. You can edit the food name, adjust portion size, or correct calories before logging — full control is always yours."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes, absolutely. Cancel with one click from your account settings. You keep access until the end of your billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <h3 className="mb-2 font-semibold text-white">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-sm text-[#8b949e]">
        © {new Date().getFullYear()} SnapCalorie. All rights reserved.
      </footer>
    </main>
  );
}
