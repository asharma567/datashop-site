---
title: "4x accuracy lift on account-takeover fraud — shipped inside a sub-50ms auth hot path"
client: "Neobank (anonymized)"
industry: "FinServ · Fraud"
summary: "Built an ML scoring engine for account-takeover detection, integrated into the authentication gateway. Replaced static rules with a live model that caught four times more real fraud at the same false-positive rate, in under 50ms."
problem: "The bank's static rule-based fraud system was catching the easy cases and missing the evolving ones. Rewriting rules was slow, the false-positive rate was annoying good customers, and attackers were learning the rules faster than the team could change them. Every new signal they wanted to use had to be hand-wired into the auth path."
approach: "We designed a scoring service that sat inside the auth gateway — had to be fast, had to degrade gracefully. Features pulled from a mix of real-time signals and pre-computed risk states. The model ran under a 50ms budget and carried a confidence score the gateway could act on at different thresholds. We co-designed the thresholds with the fraud-ops team rather than just picking one."
outcome: "4x increase in fraud-prevention accuracy at the same false-positive rate, measured against the legacy rules on a held-out window. Latency stayed under 50ms at p99. Ops got dashboards that actually showed what was happening in the scoring layer — not just 'blocked' vs. 'allowed'."
metrics:
  - label: Accuracy lift
    value: "4×"
  - label: Latency
    value: "<50ms p99"
  - label: Integration
    value: "Auth gateway"
published: 2025-09-15
featured: false
---

## Why auth-path ML is hard

You have no luxury to retry. You have no luxury to be slow. You have no luxury to explain later — if you let a fraudster in, the downstream damage is already underway. This is the opposite end of the spectrum from a batch ML system that has minutes to decide.

## What we changed about their process

The model was half the work. The other half was giving the fraud team a feedback loop that didn't require us to redeploy when they wanted to test a new threshold. That's the difference between a model that ages gracefully and a model that gets quietly disabled six months after we leave.
