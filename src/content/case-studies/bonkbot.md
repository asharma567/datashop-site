---
title: "Full on-chain data infrastructure for Bonkbot — shipped in 3 weeks"
client: "Bonkbot"
industry: "Crypto"
summary: "Built multi-region ClickHouse clusters and custom ETL pipelines covering APAC, EU, and US. Halved frontend query latency and gave internal teams the ability to validate market data in real time."
problem: "Bonkbot needed reliable on-chain data serving millions of users across three geographies, and their existing pipelines couldn't keep up. Frontend queries were slow enough to hurt UX, and internal analysts had no trustworthy way to validate market data under production load."
approach: "We stood up multi-region ClickHouse clusters in APAC, EU, and US, designed a custom ETL layer for their on-chain sources, and instrumented the pipeline end to end so degradations surfaced before users noticed them. We kept the design small enough to reason about and opinionated enough to move quickly."
outcome: "Query latency on the frontend dropped by 50%. Internal teams could now validate market data against the production stream in minutes instead of days. The system was in production in three weeks, not three months."
metrics:
  - label: Query latency
    value: "−50%"
  - label: Regions live
    value: "APAC · EU · US"
  - label: Time to production
    value: "3 weeks"
published: 2026-02-18
featured: true
---

## The constraint that shaped everything

Bonkbot's core product is real-time on-chain data surfaced to traders. The moment the data goes stale, the product breaks. The moment it goes expensive, the unit economics break. Any infrastructure decision had to thread both needles at once.

## Why ClickHouse, and why three regions

We chose ClickHouse because it gives us columnar speed on huge datasets without forcing us into a bespoke OLAP warehouse that nobody on the team would be able to operate after we left. Three regions — APAC, EU, US — because the user base isn't patient enough to tolerate trans-Pacific latency on a trading UI.

The interesting work wasn't the cluster itself. It was the ETL: keeping the three clusters coherent under on-chain reorgs and upstream RPC flakiness, without ever lying to the user about what was real.

## What "shipped in 3 weeks" actually means

It doesn't mean we skipped the hard parts. It means we said no to everything that wasn't load-bearing for the first real users, and we scoped the second revision honestly. That's how you get to production fast enough to matter.
