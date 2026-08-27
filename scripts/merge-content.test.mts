/**
 * Guards the rule that keeps the CMS from corrupting the site: stored content
 * is merged over the defaults, and anything unknown or mistyped is discarded.
 *
 * Run with `npm test`.
 */
import assert from "node:assert/strict";
import { defaultSiteContent } from "../src/lib/data.ts";
import { mergeContent } from "../src/lib/merge-content.ts";

// 1. An untouched payload round-trips.
assert.deepEqual(mergeContent(defaultSiteContent, defaultSiteContent), defaultSiteContent);

// 2. A partial edit only changes what it names.
const edited = mergeContent(defaultSiteContent, { hero: { title: "New title" } });
assert.equal(edited.hero.title, "New title");
assert.equal(edited.hero.description, defaultSiteContent.hero.description);
assert.equal(edited.footer.copy, defaultSiteContent.footer.copy);

// 3. Unknown keys are dropped.
const injected = mergeContent(defaultSiteContent, { hero: { evil: "x" }, nope: 1 });
assert.equal("evil" in injected.hero, false);
assert.equal("nope" in injected, false);

// 4. Wrong types fall back to the default.
const wrong = mergeContent(defaultSiteContent, {
  hero: { title: { $$: "object where a string belongs" } },
  sponsor: { stats: [{ label: "Primary", value: "not a number", icon: "school" }] },
});
assert.equal(wrong.hero.title, defaultSiteContent.hero.title);
assert.equal(wrong.sponsor.stats[0].value, defaultSiteContent.sponsor.stats[0].value);
assert.equal(wrong.sponsor.stats[0].label, "Primary");

// 5. Array items added in the CMS get every field the schema expects.
const grown = mergeContent(defaultSiteContent, {
  whatWeDo: { items: [{ title: "Only a title" }] },
});
assert.equal(grown.whatWeDo.items.length, 1);
assert.equal(grown.whatWeDo.items[0].title, "Only a title");
assert.equal(grown.whatWeDo.items[0].image, defaultSiteContent.whatWeDo.items[0].image);

// 6. Content stored before a field existed still renders.
const legacy = JSON.parse(JSON.stringify(defaultSiteContent));
delete legacy.contact;
delete legacy.hero.primaryCta;
const upgraded = mergeContent(defaultSiteContent, legacy);
assert.deepEqual(upgraded.contact, defaultSiteContent.contact);
assert.deepEqual(upgraded.hero.primaryCta, defaultSiteContent.hero.primaryCta);

// 7. Garbage at the top level is ignored entirely.
assert.deepEqual(mergeContent(defaultSiteContent, "nonsense"), defaultSiteContent);
assert.deepEqual(mergeContent(defaultSiteContent, null), defaultSiteContent);

console.log("all merge assertions passed");
