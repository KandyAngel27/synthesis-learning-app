# Portal Update — Monthly Client Portal Refresh

## Description
Comprehensive monthly update across all Phoenix Method SEO client portals for the new month. Updates stats, deliverables, content calendars, keywords, messages, and worklog entries for each client.

## Instructions

You are performing the monthly portal update for Phoenix Method SEO's client portals. The portals live in the `KandyPhoenix/Phoenix-Method` repo under `workers/portal/public/{slug}/data.json`.

### Client Portal Inventory

| Slug | Client | Website | Plan |
|------|--------|---------|------|
| `lori` | Lori Kimmerly Therapy and Coaching | lorikimmerly.com | Custom — $575/mo + $175/mo social media |
| `phw` | Parish Health and Wellness | phwcare.com | Project-based |
| `pm` | Phoenix Method SEO | phoenixmethodseo.com | Internal / Agency Site |
| `sunbright` | Sunbright Recovery Center | sunbrightrecovery.org | Launch / Full-Build Project |

### Step 0 — Access the Phoenix Method Repo

1. Use `add_repo` to attach `KandyPhoenix/Phoenix-Method` with `push` access
2. Clone the repo: `git clone --depth 1 <clone_url> /workspace/phoenix-method` (use 600s timeout)
3. Register the repo root after cloning
4. Create a new branch: `git checkout -b PM-portal-update-<month>-<year>` (e.g. `PM-portal-update-august-2026`)

### Step 1 — Review Last Month's State

For EACH client portal, read `workers/portal/public/{slug}/data.json` and note:
- Current `month` value (should be last month)
- `deliverables` — which are done, in_progress, todo
- `hours_used` vs `plan_hours` (for hour rollover calculation)
- `roadmap` — any items that should be marked complete
- `content_choice` — was a blog or SEO op completed?
- `messages` — last message date and content
- `worklog` — recent entries

Summarize findings to the user before proceeding.

### Step 2 — Update Each Portal's data.json

For each active client (`lori`, `phw`, `pm`, `sunbright`), update the following fields:

#### 2a. Month & Date Fields
```json
"month": "<Full Month> <Year>",      // e.g. "August 2026"
"updated": "<YYYY-MM-DD>",           // today's date
"hours_used": 0                       // reset to 0
```

#### 2b. Hour Rollover (lori only, or any client with `rollover_enabled: true`)
If `rollover_enabled` is true and `hours_used < plan_hours`:
```
hours_rolled_over += (plan_hours - hours_used)
```
Then set `hours_used` to 0.

#### 2c. Next Invoice
Update to the 1st of the following month:
```json
"next_invoice": {
  "date": "<Next Month> 1, <Year>",   // e.g. "September 1, 2026"
  "amount": "<keep existing amount>"
}
```
Skip for `pm` (Internal) and `sunbright` (if still pre-launch with null invoice).

#### 2d. Stats
Ask the user if they have fresh GSC data to provide. If not, note that the automated `monthly-reset.yml` GitHub Action handles GSC pulls on the 1st of each month. For a manual update:
- Update `sessions`, `keywords`, `position`, `impressions`, `ctr` with new values
- Calculate `*_change` as difference from previous values (prefix with `+` or `-`)
- Set `*_trend`: `"up"` if improving, `"down"` if declining, `"neutral"` if unchanged
- For position, LOWER is better: a decrease in position number = `"up"` trend

If no fresh data is available, keep existing stats and note they'll auto-update via the GitHub Action.

#### 2e. Deliverables
Reset recurring deliverables for the new month:
- Any deliverable with `"status": "done"` that recurs monthly → set back to `"todo"`
- Recurring items include: SEO Monitoring, Blog Post/SEO Op, Social Media Posting, Site Work hours, Quarterly Report (if in quarter-end month)
- Keep project-based deliverables (one-time items) at their current status
- Update the blog post deliverable text to reflect the new month's topic if known
- Update quarterly report `due` date: calculate end of current quarter

For `sunbright` (pre-launch): keep deliverables as-is unless specific progress was made.

#### 2f. Content Calendar
Rebuild for the new month:
```json
"content_calendar": [
  {"date": "<Month> 15", "title": "Blog Topic or Draft Submission Due", "type": "client"},
  {"date": "<Month> <last-day>", "title": "Blog Post or SEO Op", "type": "deliverable"}
]
```
If this month is a quarter-end month (March, June, September, December), add:
```json
{"date": "<Month> <last-day>", "title": "Quarterly Performance Report", "type": "deliverable"}
```

#### 2g. Content Choice
Reset the monthly content choice:
```json
"content_choice": {
  "chosen": null,
  "blog": {"title": null, "keyword": null, "status": "pending"},
  "page": {"title": null, "url": null, "keyword": null, "status": "suggested"}
}
```

#### 2h. GSC Keywords
If fresh GSC data is available, update `gsc_keywords` with the top 20 keywords by impressions:
```json
{"keyword": "...", "position": 0.0, "clicks": 0, "impressions": 0}
```
Otherwise keep existing data — the monthly-reset Action will refresh it.

#### 2i. Tracked Keywords
If fresh data is available, for each entry in `keywords`:
- Shift current `position` → `last_month`
- Set new `position` and `clicks` from fresh data

#### 2j. Messages
Add a new monthly welcome message at the END of the `messages` array:
```json
{
  "date": "<Month> 1, <Year>",
  "text": "Happy <Month>! Here's your <Month> portal — [brief personalized note about what's planned or what was accomplished last month]. Let me know if you have questions!"
}
```
Personalize per client based on their roadmap, recent work, and plan details.

#### 2k. Roadmap Updates
Review the `roadmap` array. For any items that were completed last month:
- Set `"status": "done"`
- Note what was accomplished

#### 2l. Add-ons (lori)
Update the social media add-on due date to the 10th of next month:
```json
"add_ons": [
  {
    "name": "Social Media Posting — 2 LinkedIn + 2 Instagram",
    "price": "$175/mo",
    "due": "<Next Month> 10, <Year>",
    "status": "active"
  }
]
```

### Step 3 — Worklog Entry

Add a worklog entry to EACH updated portal's `worklog` array (at the END):
```json
{
  "date": "<Full Month> <Day>, <Year>",
  "type": "seo",
  "title": "<Month> portal refresh — stats, deliverables, calendar, and content choice reset"
}
```

### Step 4 — Validate

After updating all data.json files:
1. Verify each file is valid JSON: `node -e "JSON.parse(require('fs').readFileSync('<path>'))" `
2. Spot-check that `month` is correct across all portals
3. Confirm `hours_used` is 0 for monthly-plan clients
4. Confirm `content_choice.chosen` is null
5. Confirm recurring deliverables are reset to `todo`

### Step 5 — Commit, Push, and PR

1. Stage all changed data.json files:
   ```
   git add workers/portal/public/lori/data.json
   git add workers/portal/public/phw/data.json
   git add workers/portal/public/pm/data.json
   git add workers/portal/public/sunbright/data.json
   ```
2. Commit with message: `<Month> portal refresh — all client portals updated for <Month> <Year>`
3. Push the branch
4. Create a draft PR to `main` with:
   - Title: `<Month> <Year> Portal Refresh — All Clients`
   - Body summarizing what changed per client

### Step 6 — Report to User

Present a summary table:

| Client | Month | Stats Updated | Deliverables Reset | Calendar Built | Message Added | Worklog Added |
|--------|-------|--------------|-------------------|----------------|--------------|--------------|
| Lori | ... | Yes/Pending | Yes | Yes | Yes | Yes |
| PHW | ... | Yes/Pending | Yes | Yes | Yes | Yes |
| PM | ... | Yes/Pending | Yes | Yes | Yes | Yes |
| Sunbright | ... | N/A (pre-launch) | N/A | N/A | Yes | Yes |

Note: If stats say "Pending", remind the user that the `monthly-reset.yml` GitHub Action auto-pulls GSC data on the 1st of each month. If running mid-month, stats can be manually provided.

### Important Rules

- **Phoenix ≠ Phoenix, Arizona.** Phoenix Method is in The Woodlands, Texas. Never reference Phoenix, AZ.
- **Worklog entries go at the END** of the array (newest-last; the portal UI reverses them).
- **Messages go at the END** of the array.
- **Don't remove existing worklog or message entries** — only append.
- **Sunbright is pre-launch** — stats remain null until the site goes live. Still update month, messages, and worklog.
- **The deploy-portal.yml GitHub Action** auto-syncs all data.json files to Cloudflare KV on merge to main — no manual wrangler deploy needed.
- **Always validate JSON** before committing. A broken data.json will break the client's portal.
