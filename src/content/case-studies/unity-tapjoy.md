---
title: "A real-time ML offer engine with a 99.99% SLA and <150ms latency — at the scale of millions of DAU"
client: "Unity · Tapjoy"
industry: "Gaming · Ad-tech"
summary: "Built an ML-backed offer recommendation engine integrated into the in-game SDK. Lived inside the ad-tech hot path, served real users, and didn't miss its SLA."
problem: "Tapjoy's offer recommendation system had to make a high-quality recommendation in under 150ms, for millions of daily active users, without going down. The team had a model that worked in a notebook. Production was a different animal — latency, traffic spikes, model staleness, cost per call, SDK constraints — and the gap between 'works in staging' and 'carries the business' was wide."
approach: "We designed the serving stack around the latency budget, not the other way around. That meant right-sizing models, caching aggressively at the right layers, and building a fallback chain so a single upstream hiccup never took the feature down for a player mid-session. We got the team a CI-gated evaluation harness so they could keep changing models without regressing on quality."
outcome: "The engine maintained a 99.99% SLA in production, kept latency under 150ms at p99, and was integrated into the in-game SDKs used by millions of DAUs. The team kept shipping new recommendation strategies without fear of breaking the ad stack."
metrics:
  - label: SLA
    value: "99.99%"
  - label: Latency budget
    value: "<150ms"
  - label: Daily active users
    value: "Millions"
published: 2025-11-02
featured: true
---

## Latency is the whole game

When an offer has to surface inside the ad flow, you don't get to ask the user to wait. 150ms includes the network round trip, the model inference, the feature fetch, and the tiebreaker logic. That budget was the forcing function.

## What stopped the wheels from coming off

Three things, in this order:

1. **Model right-sizing.** Large models only where they paid. Smaller, specialized models for retrieval and ranking. A fallback model that was cheap and safe.
2. **Fallback chain.** The system never has a bad day that means "no offer." It has a bad day that means "slightly worse offer." That's the product contract.
3. **Evals in CI.** Every change ran against a gold set. No more surprise regressions after deploy.

## The quiet lesson

"Real-time" in gaming ad-tech is a different beast than "real-time" in a SaaS dashboard. The discipline of owning the tail latency — not just the average — is the difference between an engine that carries the business and one that gets rewritten every 18 months.
