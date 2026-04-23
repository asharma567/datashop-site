---
title: "Structured data from messy bond prospectuses, feeding alpha-generating signals"
client: "Bondway"
industry: "FinServ · GenAI"
summary: "Built GenAI pipelines to extract structured data from bond prospectuses and long-form financial documents — and fed the output into the models that generate trading signals."
problem: "Fixed-income analysts were spending most of their day parsing long, inconsistently structured prospectuses by hand to pull out the terms, covenants, and schedules their models needed. It was the bottleneck between raw documents and trading-ready signal."
approach: "We built a pipeline that combined retrieval, LLM extraction, and deterministic validation. The model did the hard parts — finding the right section, reading the clause, normalizing the output — and a downstream validator caught the obvious failures before they fed the signal. Humans stayed in the loop for edge cases that moved real money."
outcome: "Analyst parsing time dropped by 90%. The structured output fed directly into the alpha model pipeline, which meant signals that used to take days to refresh could be generated in hours. The team's attention went from typing into spreadsheets to reasoning about the market."
metrics:
  - label: Parsing time
    value: "−90%"
  - label: Asset class
    value: "Bonds · Fixed income"
  - label: Use
    value: "Alpha generation"
published: 2025-12-10
featured: false
---

## Why this isn't just "LLMs in finance"

The easy part is prompting a model to extract fields from a PDF. The hard part is the 10% of documents where the clause you need is phrased three different ways across three different issuers — and those are often the documents that matter most.

## The architecture that worked

- **Retrieval first** so the model isn't trying to read 200 pages at once
- **Structured extraction with a schema** so downstream code can trust the output shape
- **Deterministic validators** for the fields where we know what "wrong" looks like
- **Human-in-the-loop** for the genuinely ambiguous clauses, because pretending those don't exist is how a model ends up quietly wrong in production

## Transferable to crypto

The same pricing-discovery and elasticity work that made this pipeline useful for bonds maps directly onto AMMs, bonding curves, and token economics in Crypto. The substrate is different; the engineering isn't.
