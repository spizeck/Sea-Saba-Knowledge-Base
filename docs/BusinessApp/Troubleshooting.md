# Troubleshooting & Common Operational Issues

This guide covers common problems staff encounter in the Sea Saba Business App and how to resolve them. The app is built on Firebase and uses Google Firestore for real-time data storage. Most issues are related to permissions, browser state, configuration gaps, or data entry.

> **First steps for almost any issue:** refresh the page, log out and back in, or clear your browser cache. These resolve the majority of transient problems.

## System Access & Permissions

Permissions are a common source of confusion. Staff only see the modules they have been granted access to — a missing menu item is usually a permission issue, not a bug.

### "Access Denied" or Missing Module

- Your account may not have permission for that module.
- You may have view-only access rather than create or edit access.
- Your account may have been archived.

**Resolution:** Contact management or admin to review your role permissions.

### Cannot Log In

- Verify your credentials and that caps lock is off.
- Clear browser cache and try again.
- Try a different browser (Chrome, Edge, or Safari — kept up to date).
- If your account was recently created or modified, confirm with management that it is active.

### Page Loads but Data Appears Empty

- Your session may have expired. Log out and back in.
- A browser refresh usually restores live Firestore data.
- Weak connectivity can cause delayed data loading — wait a moment and refresh.

## Browser & Connectivity

The app relies on live Firestore listeners. Most display issues resolve with a simple page refresh.

- **Refresh the page** if data looks stale or a form appears broken.
- **Avoid editing the same record in multiple browser tabs** — this can cause conflicting writes.
- **Use an up-to-date browser** — Chrome, Edge, or Safari. Older browser versions may have rendering issues.
- **Weak or intermittent internet** can cause delayed sync. Wait for connectivity to stabilize, then refresh.

## Contract Management

### Pricing Looks Incorrect

Contract pricing is calculated automatically from configured data. Incorrect totals almost always trace back to a configuration problem, not a calculation bug.

Check in order:

1. **Hotel season** — Is the travel date falling in the correct season? Season boundaries are date-sensitive.
2. **Room category and occupancy type** — Is the correct combination selected for this group?
3. **Booking type** — Is the correct commission structure selected (Dive Shop vs. Tour Operator)?
4. **Meal package** — Is the correct hotel-specific meal package selected?
5. **Dive package** — Is the correct package and diver count entered?

If rates appear missing or zero, the most likely cause is that no rate has been configured for the selected season + room category + occupancy type combination. Check hotel configuration.

### Room Categories or Occupancy Types Not Appearing

- Room categories only appear if rates exist for the selected hotel and season.
- Occupancy types only appear if configured for that room category.
- If an expected option is missing, the rate data needs to be added in Hotel Configuration.

### FOC Calculations Look Wrong

- **Dive FOC** (7+1) and **Hotel FOC** are calculated separately — they are independent.
- Meal packages may still apply to FOC guests depending on how the hotel is configured.
- If FOC results are unexpected, verify the hotel's FOC rules in Hotel Configuration.

### "I Edited a Contract and Now There Are Two Versions"

This is intentional. Editing a contract creates a new revision and archives the previous version automatically. Previous versions remain accessible for reference. Use the revision history to find older versions — do not create a duplicate contract.

### PDF Not Generating or Looks Incorrect

- Verify all required fields in the contract are completed.
- Confirm that rates exist for the selected season, category, and occupancy type.
- Refresh the page and regenerate. If the issue persists, contact management.

## Dive Logs

### Site, Boat, or Guide Not in the List

Sites, boats, and guides are reference data managed by admins. If an option is missing from a dropdown, it has not been added to the system configuration. Contact management to have it added.

### Sightings Data Not Recorded

- Species sightings are captured in a multi-step form after the basic dive information is entered.
- If the form was not completed through all steps, sightings may not have been saved.
- Re-entering the log and completing all steps is the correct resolution.

### Analytics Not Reflecting Recent Dives

- Analytics are generated from completed dive logs. Dives must be fully submitted to appear.
- Inconsistent site names (e.g., "Diamond Rock" vs "Diamond rock") will cause the same site to appear as two different entries in analytics. Use site names exactly as they appear in the dropdown.
- Firestore sync is near-instantaneous but allow a short delay before expecting analytics to update after logging.

## Maintenance & Assets

### Service Due Date or Hours Looks Wrong

- Check that the **current reading** (hours, date, or cycles) was recorded accurately when the maintenance log was submitted.
- Check that the **service interval** is correctly configured on the asset's service schedule.
- Verify you are looking at the **correct child asset** — service logged to a parent asset does not update the child's service due.

### Can't Find the Right Asset to Log Against

The asset hierarchy is: parent asset → child assets. Maintenance should be logged against the **most specific child asset** possible.

| Looking for | Find it under |
|---|---|
| Compressor oil change | Old Red Compressor (asset) |
| Final filter replacement | Old Red Compressor → Final Filters (child) |
| Engine service | Shark Bait → Port Yamaha 300 (child) |

If an asset is missing entirely, it may need to be created. See [Equipment & Maintenance Tracking](AssetManagement.md).

### Duplicate Maintenance Log Submitted

- Refresh the page before resubmitting a form if you are unsure whether it saved.
- Avoid having the same record open in multiple tabs.
- If a duplicate was created, contact management to have the extra entry removed.

## Real-Time Sync Behavior

The app uses live Firestore listeners on most pages — data updates automatically without manually refreshing. Occasionally this breaks down:

- After a **long idle period**, the live listener may have disconnected. Refresh the page.
- After a **network interruption**, data may appear stale. Refresh to re-establish the connection.
- If data you just saved is not appearing, wait a few seconds and refresh before assuming something went wrong.

## Common Error Messages

| Message | Likely Cause | Action |
|---|---|---|
| **Access Denied** | Missing module permission | Contact management |
| **Permission Denied** | Role does not include this action | Contact management |
| **Missing Required Fields** | Form incomplete | Fill all required fields and resubmit |
| **Failed to Save** | Connectivity issue or validation error | Check connection, review fields, retry |
| **Page Not Found** | Stale link or wrong URL | Navigate from the sidebar instead |

## Prevention

- **Refresh occasionally** during long sessions to keep Firestore listeners active.
- **Avoid editing the same contract in multiple tabs** — use one tab per record.
- **Complete dive logs the same day** — waiting increases the chance of inaccurate data.
- **Verify seasons and occupancy types** carefully before finalizing contracts.
- **Log maintenance immediately** after service completion.
- **Use consistent site names** — select from the dropdown rather than typing variations.
- **Notify management** if you see recurring errors or data inconsistencies.

## Getting Help

1. Check the relevant configuration or workflow page in this knowledge base first.
2. Verify your permissions before assuming something is broken.
3. Refresh and retry — this resolves most transient issues.
4. Contact management or admin for persistent problems or access changes.

## Related

- [Sea Saba Business App — Quick Start Guide](QuickStart.md)
- [Group Contract Management](ContractManagement.md)
- [Hotel Configuration & Seasonal Room Rates](HotelManagement.md)
- [Dive Log & Marine Life Sightings](DiveLogging.md)
- [Maintenance Tracking & Service Logs](Maintenance.md)
- [Dive Analytics & Operational Insights](Analytics.md)
