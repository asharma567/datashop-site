---
title: "Tracking 500+ competitor games, automatically — cut manual research by 80%"
client: "AAA Publisher (anonymized)"
industry: "Gaming · Market intel"
summary: "Built a large-scale system to track launches, pricing, and promotions across 500+ competitor games globally. Replaced a team's worth of manual research with a pipeline that was more consistent and ran every day."
problem: "The publisher's competitive intelligence team was spending most of their week hand-compiling what competitors had shipped, how they'd priced it, and what promotional beats they were running. The data was inconsistent across analysts, the refresh rate was weekly at best, and by the time a trend surfaced in a report the window to act had already closed."
approach: "We built an automated tracking pipeline covering 500+ tracked titles across stores and regions. Scrapers where the APIs didn't exist, APIs where they did. The output fed a structured data layer the competitive team could slice however they wanted — by genre, by region, by promotional cadence, by platform — instead of waiting for an analyst to pivot a spreadsheet."
outcome: "Manual research load dropped by 80%. The time from 'a competitor did something interesting' to 'the team knows about it' went from days to hours. Analysts moved up the value chain from gathering to interpreting."
metrics:
  - label: Research time
    value: "−80%"
  - label: Titles tracked
    value: "500+"
  - label: Refresh
    value: "Daily"
published: 2025-08-22
featured: false
---

## What's actually new here

The novel part wasn't the scraping; it was the discipline of a schema that stayed stable as stores changed their layouts and new regions came online. That kept the data downstream-consumable even while the sources kept shifting underneath.

## Where we drew the line

We didn't automate the interpretation. The team pushed for it and we pushed back. What the competitor's move *means* is a judgment call that belongs to the humans who understand the market. What they *did* is a fact that belongs in a pipeline. Respecting that line is what makes the system durable.
