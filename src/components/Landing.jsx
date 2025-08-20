import { Link } from 'react-router-dom';
import { Spotlight } from './Spotlight';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <header className="px-6 lg:px-10 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-indigo-500/20 ring-1 ring-indigo-400/40 flex items-center justify-center">
              <span className="text-indigo-300 font-bold">U</span>
            </div>
            <span className="font-semibold tracking-wide">Upgaurd</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#features" className="hover:text-white">Platform</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login" className="text-slate-300 hover:text-white text-sm">Sign in</Link>
            <Link to="/login" className="rounded-md bg-indigo-600 hover:bg-indigo-500 px-3.5 py-2 text-sm font-medium text-white">Start for free</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative px-6 lg:px-10 pt-8 pb-16 lg:pt-16 lg:pb-28 overflow-hidden">
          <Spotlight className="left-[-200px] top-[-100px]" color="rgba(99,102,241,0.33)" size={900} />
          <Spotlight className="right-[-250px] top-[50px]" color="rgba(56,189,248,0.25)" size={700} />
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center relative">
            <div className="lg:col-span-6">
              <p className="text-sm text-indigo-300 font-medium mb-4">AI‑native reliability platform</p>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                See everything.
                <br />
                Fix anything.
              </h1>
              <p className="mt-6 text-lg text-slate-300 max-w-xl">
                Effortless uptime monitoring, incident response, status pages, tracing, and logs — all in one cohesive, lightning‑fast experience.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/login" className="rounded-md bg-indigo-600 hover:bg-indigo-500 px-6 py-3 text-sm font-medium text-white">
                  Start for free
                </Link>
                <a href="#demo" className="rounded-md ring-1 ring-white/20 hover:bg-white/5 px-6 py-3 text-sm font-medium text-white/90">
                  Book a demo
                </a>
              </div>
              <div className="mt-10 text-slate-400 text-sm">
                No credit card required • Free forever tier
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -inset-6 bg-indigo-500/10 blur-2xl rounded-3xl" />
                <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-2xl">
                  <div className="h-[420px] w-full rounded-xl bg-black/50 ring-1 ring-white/10 p-4 overflow-hidden">
                    <div className="h-full w-full grid grid-cols-12 gap-3">
                      <div className="col-span-4 space-y-3">
                        <div className="rounded-md bg-slate-800/80 ring-1 ring-white/10 p-3">
                          <div className="text-xs text-slate-400">Uptime</div>
                          <div className="mt-1 text-2xl font-semibold text-emerald-400">99.98%</div>
                          <div className="mt-2 h-2 w-full rounded bg-slate-700">
                            <div className="h-2 rounded bg-emerald-500" style={{ width: '99.98%' }} />
                          </div>
                        </div>
                        <div className="rounded-md bg-slate-800/80 ring-1 ring-white/10 p-3">
                          <div className="text-xs text-slate-400">Avg. response</div>
                          <div className="mt-1 text-2xl font-semibold text-sky-400">182ms</div>
                          <div className="mt-2 grid grid-cols-6 gap-1">
                            {[...Array(12)].map((_, i) => (
                              <div key={i} className={`h-6 rounded ${i % 3 === 0 ? 'bg-sky-500/70' : 'bg-slate-700'}`} />
                            ))}
                          </div>
                        </div>
                        <div className="rounded-md bg-slate-800/80 ring-1 ring-white/10 p-3">
                          <div className="text-xs text-slate-400">Incidents (30d)</div>
                          <div className="mt-1 flex items-baseline gap-2">
                            <div className="text-2xl font-semibold text-amber-400">3</div>
                            <span className="text-xs text-slate-400">2 resolved • 1 active</span>
                          </div>
                          <div className="mt-2 space-y-1 text-xs">
                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-amber-400" />
                              <span>Elevated latency - API</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-emerald-400" />
                              <span>Resolved: DNS propagation</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-emerald-400" />
                              <span>Resolved: Database failover</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-8 space-y-3">
                        <div className="rounded-md bg-slate-800/80 ring-1 ring-white/10 p-4">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-slate-300">Live status</div>
                            <div className="text-xs text-slate-400">Last 24h</div>
                          </div>
                          <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
                            <div className="rounded-lg bg-black/40 ring-1 ring-white/10 p-3">
                              <div className="flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                <span className="text-slate-300">API</span>
                              </div>
                              <div className="mt-2 h-16 w-full rounded bg-slate-700">
                                <div className="h-16 w-3/4 bg-gradient-to-t from-emerald-500/40 to-emerald-400/70" />
                              </div>
                            </div>
                            <div className="rounded-lg bg-black/40 ring-1 ring-white/10 p-3">
                              <div className="flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                <span className="text-slate-300">Web</span>
                              </div>
                              <div className="mt-2 h-16 w-full rounded bg-slate-700">
                                <div className="h-16 w-2/3 bg-gradient-to-t from-sky-500/40 to-sky-400/70" />
                              </div>
                            </div>
                            <div className="rounded-lg bg-black/40 ring-1 ring-white/10 p-3">
                              <div className="flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                                <span className="text-slate-300">Workers</span>
                              </div>
                              <div className="mt-2 h-16 w-full rounded bg-slate-700">
                                <div className="h-16 w-1/2 bg-gradient-to-t from-amber-500/40 to-amber-400/70" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-md bg-slate-800/80 ring-1 ring-white/10 p-4">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-slate-300">Incident timeline</div>
                            <div className="text-xs text-slate-400">UTC</div>
                          </div>
                          <div className="mt-3 space-y-2 text-xs">
                            <div className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                              <div>
                                <div className="text-slate-300">13:22 Elevated latency detected</div>
                                <div className="text-slate-500">Auto‑scaled API pods from 6 → 12</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              <div>
                                <div className="text-slate-300">13:40 Mitigated</div>
                                <div className="text-slate-500">Latency back to baseline</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                              <div>
                                <div className="text-slate-300">14:05 Post‑mortem created</div>
                                <div className="text-slate-500">Action items assigned • 3 owners</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="px-6 lg:px-10 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-3xl font-semibold text-white">Uptime monitoring</h2>
              <a href="#docs" className="text-sm text-slate-300 hover:text-white">View docs</a>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6">
                <div className="text-slate-300 text-sm">Screenshots for errors</div>
                <div className="mt-3 h-40 rounded-lg bg-black/40 ring-1 ring-white/10 p-3 flex items-end gap-1">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-2 flex-1 rounded-t bg-rose-400/70" style={{ height: `${10 + (i % 5) * 12}px` }} />
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-400">
                  Capture the exact state of your UI when checks fail. No more guessing.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6">
                <div className="text-slate-300 text-sm">Traceroute & MTR for timeouts</div>
                <div className="mt-3 h-40 rounded-lg bg-black/40 ring-1 ring-white/10 p-3 grid grid-cols-5 gap-2">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className={`h-6 rounded ${i % 2 ? 'bg-sky-500/60' : 'bg-slate-700'}`} />
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-400">
                  Understand network paths and hops instantly across global regions.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6">
                <div className="text-slate-300 text-sm">Smart alert routing</div>
                <div className="mt-3 h-40 rounded-lg bg-black/40 ring-1 ring-white/10 p-3 grid grid-cols-7 gap-1">
                  {[...Array(21)].map((_, i) => (
                    <div key={i} className={`h-4 rounded ${i % 7 === 0 ? 'bg-amber-400' : 'bg-emerald-500/60'}`} />
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-400">
                  Reduce noise with AI‑assisted deduping and on‑call schedules.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="observability" className="px-6 lg:px-10 pb-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm text-indigo-300 font-medium mb-2">End‑to‑end telemetry</p>
              <h3 className="text-3xl font-semibold">Logs, traces, and metrics in one place</h3>
              <p className="mt-4 text-slate-300">
                Connect your applications, APIs, and infrastructure for a unified view of reliability. Drill into a trace, jump to logs,
                and correlate metrics without context switching.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg bg-slate-900/60 ring-1 ring-white/10 p-4">
                  <div className="text-slate-300">Distributed tracing</div>
                  <div className="mt-2 text-slate-400">OpenTelemetry compatible</div>
                </div>
                <div className="rounded-lg bg-slate-900/60 ring-1 ring-white/10 p-4">
                  <div className="text-slate-300">Structured logs</div>
                  <div className="mt-2 text-slate-400">Query in seconds at any scale</div>
                </div>
                <div className="rounded-lg bg-slate-900/60 ring-1 ring-white/10 p-4">
                  <div className="text-slate-300">SLOs & burn rates</div>
                  <div className="mt-2 text-slate-400">Ship SLOs that your team understands</div>
                </div>
                <div className="rounded-lg bg-slate-900/60 ring-1 ring-white/10 p-4">
                  <div className="text-slate-300">Runbooks</div>
                  <div className="mt-2 text-slate-400">Automate the first response</div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-4">
                <div className="h-[360px] w-full rounded-xl bg-black/50 ring-1 ring-white/10 p-4">
                  <div className="h-full grid grid-rows-3 gap-3">
                    <div className="rounded-lg bg-slate-800/80 ring-1 ring-white/10 p-3">
                      <div className="text-sm text-slate-300">Trace details</div>
                      <div className="mt-2 h-20 w-full rounded bg-slate-700" />
                    </div>
                    <div className="rounded-lg bg-slate-800/80 ring-1 ring-white/10 p-3">
                      <div className="text-sm text-slate-300">Related logs</div>
                      <div className="mt-2 grid grid-cols-4 gap-1">
                        {[...Array(16)].map((_, i) => (
                          <div key={i} className={`h-6 rounded ${i % 4 === 0 ? 'bg-rose-400/70' : 'bg-slate-700'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg bg-slate-800/80 ring-1 ring-white/10 p-3">
                      <div className="text-sm text-slate-300">Metrics</div>
                      <div className="mt-2 h-16 w-full rounded bg-slate-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="integrations" className="px-6 lg:px-10 pb-24">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm text-indigo-300 font-medium mb-2">Works with your stack</p>
            <h3 className="text-3xl font-semibold">Integrations</h3>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
              {['AWS','Vercel','Netlify','Cloudflare','Slack','PagerDuty','Github','Postgres','MongoDB','Redis','Kubernetes','Docker'].map((name) => (
                <div key={name} className="rounded-lg bg-slate-900/60 ring-1 ring-white/10 p-4 text-center text-slate-300">{name}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="px-6 lg:px-10 pb-24">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-semibold">Pricing</h3>
            <p className="mt-3 text-slate-300 max-w-2xl">Simple, usage‑based plans that scale with you. Start free, upgrade when you’re ready.</p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <div className="text-sm text-slate-300">Starter</div>
                <div className="mt-2 text-3xl font-semibold">Free</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  <li>Up to 3 services</li>
                  <li>1 status page</li>
                  <li>Email alerts</li>
                </ul>
                <Link to="/login" className="mt-6 inline-block rounded-md bg-white/10 hover:bg-white/15 px-4 py-2 text-sm">Get started</Link>
              </div>
              <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/40 to-slate-900/60 p-6">
                <div className="text-sm text-indigo-300">Pro</div>
                <div className="mt-2 text-3xl font-semibold">$29<span className="text-base text-slate-400">/mo</span></div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li>Unlimited checks</li>
                  <li>On‑call schedules</li>
                  <li>Slack & PagerDuty</li>
                </ul>
                <Link to="/login" className="mt-6 inline-block rounded-md bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-sm">Start Pro</Link>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <div className="text-sm text-slate-300">Enterprise</div>
                <div className="mt-2 text-3xl font-semibold">Custom</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  <li>SAML SSO, SCIM</li>
                  <li>Private cloud</li>
                  <li>Dedicated support</li>
                </ul>
                <a href="#contact" className="mt-6 inline-block rounded-md bg-white/10 hover:bg-white/15 px-4 py-2 text-sm">Contact sales</a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="px-6 lg:px-10 pb-24">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-semibold">Frequently asked questions</h3>
            <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm text-slate-300">
              <div className="rounded-xl bg-slate-900/60 ring-1 ring-white/10 p-5">
                <div className="font-medium">Is there a free tier?</div>
                <p className="mt-2 text-slate-400">Yes. The free tier includes core monitoring features with generous limits.</p>
              </div>
              <div className="rounded-xl bg-slate-900/60 ring-1 ring-white/10 p-5">
                <div className="font-medium">Can I self‑host?</div>
                <p className="mt-2 text-slate-400">Enterprise customers can deploy to private cloud or on‑prem.</p>
              </div>
              <div className="rounded-xl bg-slate-900/60 ring-1 ring-white/10 p-5">
                <div className="font-medium">Do you support OpenTelemetry?</div>
                <p className="mt-2 text-slate-400">Yes, traces, metrics, and logs can be ingested via OTLP.</p>
              </div>
              <div className="rounded-xl bg-slate-900/60 ring-1 ring-white/10 p-5">
                <div className="font-medium">How do I migrate?</div>
                <p className="mt-2 text-slate-400">Import monitors and dashboards with our CLI or terraform module.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="px-6 lg:px-10 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-600/20 to-sky-600/20 p-8">
              <Spotlight className="-left-40 -top-20" size={600} color="rgba(99,102,241,0.25)" />
              <div className="relative grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-semibold">Ship reliable software, faster</h3>
                  <p className="mt-2 text-slate-300">Join teams who catch incidents before customers do.</p>
                </div>
                <div className="flex gap-3 md:justify-end">
                  <Link to="/login" className="rounded-md bg-indigo-600 hover:bg-indigo-500 px-5 py-3 text-sm font-medium text-white">Start for free</Link>
                  <a href="#demo" className="rounded-md ring-1 ring-white/20 hover:bg-white/5 px-5 py-3 text-sm font-medium text-white/90">Book a demo</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10 px-6 lg:px-10 text-sm text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
          <div className="flex items-center gap-2 text-white">
            <div className="h-7 w-7 rounded-md bg-indigo-500/20 ring-1 ring-indigo-400/40 flex items-center justify-center">
              <span className="text-indigo-300 font-bold">B</span>
            </div>
            <span className="font-semibold">BetterUpStack</span>
          </div>
          <div className="flex gap-6">
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#docs" className="hover:text-white">Documentation</a>
            <a href="#security" className="hover:text-white">Security</a>
          </div>
          <div>© {new Date().getFullYear()} BetterUpStack</div>
        </div>
      </footer>
    </div>
  );
};


