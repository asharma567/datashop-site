---
title: Taking an AI research assistant from demo to 10,000 users without the wheels coming off
client: "[Client name]"
industry: "SaaS"
summary: "A working MVP had traction but couldn't handle real load — costs were climbing, latency was erratic, and evals didn't exist. We rebuilt the production stack in six weeks."
problem: "The team had a prototype that clients loved in demos, but every attempt to roll it out to a broader user base surfaced the same three problems: cost per query was unpredictable, p95 latency was embarrassing under load, and there was no way to tell when a model swap or prompt tweak had made the product quietly worse."
approach: "We started by instrumenting the system end to end, then built an evaluation harness before touching anything else. With a measurement baseline in place we right-sized the model mix (smaller models for retrieval and ranking, larger ones only where they paid), added semantic caching for the most common query shapes, and introduced a fallback chain so a single model outage didn't take the product down."
outcome: "Cost per query dropped 68%, p95 latency went from 8.2s to 1.4s, and the team now ships prompt and model changes with CI-gated evals. The product is live with 10,000+ users and on a trajectory they can actually forecast."
metrics:
  - label: Cost/query
    value: "-68%"
  - label: p95 latency
    value: "8.2s → 1.4s"
  - label: Users
    value: "10k+"
published: 2026-02-14
featured: true
---

> **Note:** This is a placeholder case study to show the layout. Replace with a real engagement when ready.

## The rollout cliff

Most AI products hit the same cliff: the demo is magical, the first hundred users are delighted, and then somewhere around user 500 the P95 latency starts looking like dial-up and the finance team notices the bill.

## What we changed

The big unlock was making the cost/quality tradeoff *visible*. Once the team could see — per request — what a small-model answer would have looked like versus the large-model answer, the intuition about when to use each clicked into place.

## Where this applies

If your team has a working AI product and is nervously eyeing the jump from a pilot customer to general availability, this shape of engagement is what we do. Reach out.
