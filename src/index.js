export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/privacy') {
      return new Response(privacyHTML, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
    }
    if (path === '/support') {
      return new Response(supportHTML, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
    }
    if (path === '/terms') {
      return new Response(termsHTML, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
    }
    if (path === '/guide') {
      return new Response(guideHTML, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
    }

    return new Response('Not Found', { status: 404 });
  },
};

const baseStyle = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: #fafafa;
    color: #333;
    line-height: 1.6;
    padding: 2rem 1rem;
    max-width: 680px;
    margin: 0 auto;
  }
  h1 { font-size: 1.8rem; margin-bottom: 0.25rem; }
  .subtitle { color: #888; font-size: 0.95rem; margin-bottom: 2rem; }
  h2 { font-size: 1.15rem; margin-top: 1.8rem; margin-bottom: 0.5rem; color: #222; }
  h3 { font-size: 1.05rem; margin-top: 1.2rem; margin-bottom: 0.4rem; color: #333; }
  .tip-box {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 1rem 1.25rem;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .tip-box p { margin: 0; }
  p, li { font-size: 0.95rem; color: #444; }
  ul, ol { padding-left: 1.25rem; margin-bottom: 0.75rem; }
  li { margin-bottom: 0.35rem; }
  a { color: #2563eb; text-decoration: none; }
  a:hover { text-decoration: underline; }
  p, li, h1, h2 { overflow-wrap: break-word; word-break: break-word; }
  @media (max-width: 480px) {
    body { padding: 1.5rem 1rem; }
    h1 { font-size: 1.5rem; }
    h2 { font-size: 1.05rem; }
  }
  .section { margin-bottom: 1.5rem; }
  .contact-box {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 1rem 1.25rem;
    margin-top: 1rem;
  }
  .footer { margin-top: 2.5rem; font-size: 0.8rem; color: #aaa; text-align: center; }
  .site-footer { margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid #e5e7eb; text-align: center; font-size: 0.85rem; color: #888; }
  .site-footer nav { margin-bottom: 0.5rem; }
  .site-footer nav a { margin: 0 0.5rem; color: #2563eb; text-decoration: none; }
  .site-footer nav a:hover { text-decoration: underline; }
  .site-footer p { color: #aaa; font-size: 0.8rem; }
`;

const footerHTML = `
  <footer class="site-footer">
    <nav><a href="/privacy">Privacy Policy</a> <a href="/support">Support</a> <a href="/terms">Terms of Use</a> <a href="/guide">User Guide</a></nav>
    <p>&copy; 2026 PottyTime. All rights reserved.</p>
  </footer>
`;

const privacyHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PottyTime — Privacy Policy</title>
  <style>${baseStyle}</style>
</head>
<body>
  <h1>🐾 PottyTime</h1>
  <p class="subtitle">Privacy Policy</p>

  <div class="section">
    <h2>Authentication</h2>
    <p>We use <strong>Sign in with Apple</strong> via Firebase Authentication. Your Apple ID token is processed by Firebase to create an account. We store your Firebase user ID and display name — nothing else from your Apple account.</p>
  </div>

  <div class="section">
    <h2>Cloud Data (Firestore)</h2>
    <p>If you join or create a household, the following data is synced via Google Cloud Firestore and shared with household members:</p>
    <ul>
      <li>Dog profiles (name, breed, photo)</li>
      <li>Potty events (type, timestamp, notes)</li>
      <li>Your display name</li>
    </ul>
  </div>

  <div class="section">
    <h2>Location Data (Optional)</h2>
    <p>If you enable "Log GPS Location" in Settings, GPS coordinates are optionally attached to potty events. If you are in a household, event data — including GPS coordinates — is synced to Google Cloud Firestore and is visible to all household members (e.g., on the shared map).</p>
    <p>Your <strong>home location</strong> (used for home radius alerts) is stored <strong>locally on your device only</strong> and is never uploaded to our servers.</p>
    <p>You can disable GPS location logging at any time in <strong>Settings</strong>.</p>
  </div>

  <div class="section">
    <h2>In-App Purchase</h2>
    <p>PottyTime offers a one-time $6.99 purchase via Apple StoreKit. Apple handles all payment processing — we do not see or store any payment information.</p>
  </div>

  <div class="section">
    <h2>No Tracking</h2>
    <p>We do not use advertising, analytics, or any third-party tracking services.</p>
  </div>

  <div class="section">
    <h2>Data Shared with Household Members</h2>
    <ul>
      <li>Dog names, breeds, and photos</li>
      <li>Potty event history (type, time, notes, GPS if enabled)</li>
      <li>Your display name</li>
    </ul>
  </div>

  <div class="section">
    <h2>Data Stored Only on Device</h2>
    <ul>
      <li>Home location coordinates</li>
      <li>Notification preferences</li>
      <li>Theme settings and accent color</li>
    </ul>
  </div>

  <div class="section">
    <h2>Account Deletion</h2>
    <p>You can delete your account from <strong>Settings &gt; Household &gt; Delete Account</strong>. This revokes your Apple token and deletes your Firebase account and associated data.</p>
  </div>

  <div class="section">
    <h2>Contact</h2>
    <div class="contact-box">
      <p>Questions about your data? Reach us at <a href="mailto:pottytimeapp@gmail.com">pottytimeapp@gmail.com</a></p>
    </div>
  </div>

  <p class="footer">Last updated March 16, 2026</p>
  ${footerHTML}
</body>
</html>`;

const supportHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PottyTime — Support</title>
  <style>${baseStyle}</style>
</head>
<body>
  <h1>🐾 PottyTime</h1>
  <p class="subtitle">Support</p>

  <div class="section">
    <p>PottyTime is a dog potty tracking app with household sharing. Log potty events, track your dogs' routines, and keep everyone in your household in sync.</p>
  </div>

  <div class="section">
    <h2>How to Create a Household</h2>
    <ol>
      <li>Go to <strong>Settings &gt; Household</strong></li>
      <li>Sign in with Apple (free)</li>
      <li>Tap <strong>"Unlock Family Sharing"</strong> ($6.99 one-time purchase)</li>
      <li>Tap <strong>"Create Household"</strong></li>
      <li>Share the 6-character invite code with family members</li>
    </ol>
  </div>

  <div class="section">
    <h2>How to Join a Household</h2>
    <ol>
      <li>Go to <strong>Settings &gt; Household</strong></li>
      <li>Sign in with Apple (free)</li>
      <li>Tap <strong>"Join Household"</strong> (free — no purchase required)</li>
      <li>Enter the 6-character invite code from the household creator</li>
      <li>Choose <strong>"Merge"</strong> to keep your existing data or <strong>"Start Fresh"</strong> to sync only the household's data</li>
    </ol>
  </div>

  <div class="section">
    <h2>How to Enable Home Alerts</h2>
    <ol>
      <li>Go to <strong>Settings &gt; Set Home Location</strong> (or set it during onboarding)</li>
      <li>Tap <strong>"Update to Current Location"</strong> to save your home</li>
      <li>Grant <strong>"Always"</strong> location permission when prompted (required for background alerts)</li>
      <li><strong>"While Using"</strong> permission only works when the app is open</li>
    </ol>
    <p>Home alerts notify you to take your dog out when you arrive home.</p>
  </div>

  <div class="section">
    <h2>How to Delete Your Account</h2>
    <ol>
      <li>Go to <strong>Settings &gt; Household</strong></li>
      <li>Tap <strong>"Delete Account"</strong> at the bottom</li>
      <li>Confirm deletion</li>
    </ol>
    <p>This revokes your Apple sign-in token, deletes your Firebase account, and removes you from any household.</p>
  </div>

  <div class="section">
    <h2>Quick-Log from Notifications</h2>
    <p>When you receive a potty check notification, press and hold it to see quick-log buttons (<strong>Pee</strong>, <strong>Poop</strong>, <strong>Both</strong>, or <strong>Nothing</strong>) — no need to open the app.</p>
  </div>

  <div class="section">
    <h2>How to Restore Purchases</h2>
    <ol>
      <li>Go to <strong>Settings &gt; Household</strong></li>
      <li>Tap <strong>"Restore Purchase"</strong></li>
    </ol>
    <p>Your $6.99 Family Sharing purchase will be restored if previously bought on the same Apple ID. Non-consumable purchases automatically restore across all devices on the same Apple ID.</p>
  </div>

  <div class="section">
    <h2>Contact Us</h2>
    <div class="contact-box">
      <p>Need help or have feedback? Email us at <a href="mailto:pottytimeapp@gmail.com">pottytimeapp@gmail.com</a></p>
      <p style="margin-top: 0.5rem; font-size: 0.85rem; color: #888;">We typically respond within 24 hours.</p>
    </div>
  </div>

  ${footerHTML}
</body>
</html>`;

const termsHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PottyTime — Terms of Use</title>
  <style>${baseStyle}</style>
</head>
<body>
  <h1>🐾 PottyTime</h1>
  <p class="subtitle">Terms of Use</p>

  <div class="section">
    <h2>About PottyTime</h2>
    <p>PottyTime is an iOS app for tracking your dog's potty events. Features include GPS map visualization, geofencing auto-prompts, multi-dog support, calendar history, smart reminders, PDF vet reports, and a home screen widget.</p>
  </div>

  <div class="section">
    <h2>In-App Purchase</h2>
    <p>PottyTime offers a one-time $6.99 purchase that unlocks household/family sharing — including real-time sync via Firebase Firestore, invite codes, and multi-user logging. Only the household creator pays; joining a household is free. In-app purchase pricing is subject to change. The current price is always displayed in the App Store before purchase.</p>
    <p>All purchases are processed by Apple via StoreKit. Purchases are non-refundable through PottyTime — if you need a refund, please contact <a href="https://support.apple.com">Apple Support</a> directly.</p>
  </div>

  <div class="section">
    <h2>Account &amp; Authentication</h2>
    <p>PottyTime uses <strong>Sign in with Apple</strong> via Firebase Authentication. By signing in, you agree to allow Firebase to process your Apple ID token to create and manage your account.</p>
  </div>

  <div class="section">
    <h2>Account Deletion</h2>
    <p>You can delete your account at any time from <strong>Settings &gt; Household &gt; Delete Account</strong>. This revokes your Apple sign-in token and permanently deletes your Firebase account and associated data.</p>
  </div>

  <div class="section">
    <h2>User-Generated Content</h2>
    <p>You may create content within the app including dog names, breed information, event notes (up to 500 characters), and display names. This content is stored in Firebase Firestore and shared with members of your household.</p>
    <p>You are responsible for the content you create. Please do not submit content that is offensive, harmful, or violates any applicable laws.</p>
  </div>

  <div class="section">
    <h2>Location Data</h2>
    <p>PottyTime optionally attaches GPS coordinates to potty events when location logging is enabled. These coordinates are stored in Firebase Firestore. Your home location (used for geofencing alerts) is stored <strong>locally on your device only</strong> and is never uploaded to our servers.</p>
  </div>

  <div class="section">
    <h2>Privacy</h2>
    <p>PottyTime does not use advertising, analytics, or any third-party tracking services. For full details, please see our <a href="/privacy">Privacy Policy</a>.</p>
  </div>

  <div class="section">
    <h2>Disclaimer</h2>
    <p>PottyTime is provided "as is" without warranties of any kind. We do our best to keep the app running smoothly, but we are not liable for any data loss, service interruptions, or issues arising from your use of the app.</p>
  </div>

  <div class="section">
    <h2>Changes to These Terms</h2>
    <p>We may update these terms from time to time. Continued use of PottyTime after changes are posted constitutes acceptance of the updated terms.</p>
  </div>

  <div class="section">
    <h2>Contact</h2>
    <div class="contact-box">
      <p>Questions about these terms? Reach us at <a href="mailto:pottytimeapp@gmail.com">pottytimeapp@gmail.com</a></p>
    </div>
  </div>

  <p class="footer">Last updated March 2026</p>
  ${footerHTML}
</body>
</html>`;

const guideHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PottyTime — User Guide</title>
  <style>${baseStyle}</style>
</head>
<body>
  <h1>🐾 PottyTime</h1>
  <p class="subtitle">User Guide</p>

  <div class="section">
    <p>Welcome to PottyTime — the easiest way to track your dog's potty habits. This guide covers everything you need to know.</p>
  </div>

  <div class="section">
    <h2>Getting Started</h2>
    <p>When you first open PottyTime, you'll walk through a quick setup:</p>
    <ol>
      <li><strong>Pick a color theme</strong> — Choose from 6 accent color palettes. You can change this anytime in Settings.</li>
      <li><strong>Sign in</strong> (optional) — Sign in with Apple to unlock household sharing later. You can skip this and sign in from Settings anytime.</li>
      <li><strong>Allow permissions</strong> — Location and notifications help PottyTime remind you when it's potty time and track where your dog goes.</li>
      <li><strong>Set your home location</strong> — Used for automatic reminders when you leave or arrive home. You can skip this and set it up later in Settings.</li>
      <li><strong>Add your dog</strong> — Enter your dog's name, breed, and photo. You can also skip this if you're joining someone else's household.</li>
    </ol>
  </div>

  <div class="section">
    <h2>Logging a Potty Event</h2>

    <h3>Quick Log</h3>
    <p>Tap the <strong>+</strong> button on the Dashboard to open the quick log sheet. Tap one of the types to log instantly:</p>
    <ul>
      <li><strong>Pee</strong> — A regular pee</li>
      <li><strong>Poop</strong> — A regular poop</li>
      <li><strong>Both</strong> — Pee and poop together</li>
      <li><strong>Accident</strong> — An indoor accident</li>
    </ul>
    <p>A confirmation animation plays and the sheet closes automatically.</p>

    <h3>Detailed Log</h3>
    <p><strong>Long-press</strong> any potty type button to open the detailed log view, where you can:</p>
    <ul>
      <li>Add a <strong>note</strong> (e.g., "loose stool", "marking behavior")</li>
      <li>Change the <strong>time</strong> to any past time (useful if you forgot to log earlier)</li>
    </ul>

    <h3>Logging from the Map</h3>
    <p><strong>Long-press</strong> anywhere on the Map tab to log an event at that specific location. This is useful if you want to record exactly where your dog went on a walk.</p>

    <h3>Logging from Notifications</h3>
    <p>When you receive a potty reminder or home alert notification, tap the notification action buttons to log directly without opening the app.</p>
  </div>

  <div class="section">
    <h2>Dashboard</h2>
    <p>The Dashboard is your home screen. It shows:</p>
    <ul>
      <li><strong>Dog Switcher</strong> — Scroll through your dogs at the top. Tap a dog to switch. Tap the <strong>+</strong> to add a new dog.</li>
      <li><strong>Last Potty</strong> — How long since the last successful potty event.</li>
      <li><strong>Next Break Prediction</strong> — Based on your dog's patterns, when they might need to go next.</li>
      <li><strong>Today's Activity</strong> — A breakdown of today's pees, poops, and accidents.</li>
      <li><strong>Pull down</strong> to refresh data if you're syncing with a household.</li>
    </ul>
  </div>

  <div class="section">
    <h2>History</h2>
    <p>The History tab shows all logged events in a scrollable list, organized by date.</p>
    <ul>
      <li><strong>Calendar view</strong> — Tap the calendar icon to toggle between week and month views. Days with events are highlighted.</li>
      <li><strong>Tap an event</strong> to edit it — change the type, time, or note.</li>
      <li><strong>Swipe left</strong> on an event to delete it (with confirmation).</li>
      <li><strong>Insights</strong> — Scroll down for pattern analysis: busiest times, average frequency, and more.</li>
    </ul>

    <h3>Exporting a PDF Report</h3>
    <p>Tap the <strong>export icon</strong> in the History toolbar to generate a branded PDF report. Pick a date range (last 7 days, 30 days, or all time), preview the summary, then share it with your vet, pet sitter, or anyone else.</p>
  </div>

  <div class="section">
    <h2>Map</h2>
    <p>The Map tab shows where your dog's potty events happened.</p>
    <ul>
      <li><strong>Pin mode</strong> — Each event appears as a colored pin. Tap a cluster to see individual events.</li>
      <li><strong>Heatmap mode</strong> — Toggle to see a heat overlay of high-activity areas.</li>
      <li><strong>Filters</strong> — Filter by potty type (pee, poop, both, accident) to focus on specific events.</li>
      <li><strong>Home radius</strong> — If you've set a home location, a circle shows your home radius.</li>
      <li><strong>Long-press</strong> anywhere on the map to log a new event at that location.</li>
    </ul>
    <div class="tip-box">
      <p><strong>Tip:</strong> Enable "Log GPS Location" in Settings to automatically capture coordinates when you log events from the Dashboard.</p>
    </div>
  </div>

  <div class="section">
    <h2>Settings</h2>

    <h3>Your Dogs</h3>
    <ul>
      <li>Tap a dog to edit their name, breed, birth date, or photo.</li>
      <li>Swipe left to delete a dog (disabled when you only have one).</li>
      <li>Tap <strong>Add Dog</strong> to add another (up to 20).</li>
    </ul>

    <h3>Notifications</h3>
    <ul>
      <li><strong>Potty Check</strong> — Get notified when you leave or arrive home, asking if your dog needs to go.</li>
      <li><strong>Quiet Hours</strong> — Set a time range when notifications are silenced (e.g., overnight).</li>
    </ul>

    <h3>Potty Reminders</h3>
    <ul>
      <li>Enable scheduled reminders that fire a set number of hours after your dog's last successful potty event.</li>
      <li>The app suggests an interval based on your dog's patterns — tap <strong>Use Suggested</strong> to apply it.</li>
    </ul>

    <h3>Home Location</h3>
    <ul>
      <li>Set or update your home address for home radius-based notifications.</li>
      <li>Adjust the <strong>home radius</strong> (how far from home triggers alerts).</li>
    </ul>

    <h3>GPS Location Logging</h3>
    <ul>
      <li>Toggle whether GPS coordinates are saved with each event.</li>
    </ul>

    <h3>Appearance</h3>
    <ul>
      <li><strong>Theme</strong> — Light, Dark, or System.</li>
      <li><strong>Accent Color</strong> — 6 palettes to choose from. The app icon updates to match.</li>
    </ul>
  </div>

  <div class="section">
    <h2>Household Sharing</h2>
    <p>Share your dog's potty tracking with family members in real time.</p>

    <h3>How It Works</h3>
    <ol>
      <li><strong>Purchase Family Sharing</strong> ($6.99 one-time) from Settings &gt; Household.</li>
      <li><strong>Sign in with Apple</strong> if you haven't already.</li>
      <li><strong>Create a Household</strong> — You'll get a 6-character invite code.</li>
      <li><strong>Share the code</strong> with your partner or family.</li>
      <li>They enter the code in their app (free to join) and instantly see all your dogs and events.</li>
    </ol>

    <h3>What Syncs</h3>
    <ul>
      <li>Dogs and their profiles</li>
      <li>All potty events (with "logged by" attribution)</li>
      <li>Real-time updates — when one person logs an event, everyone sees it immediately and gets a notification.</li>
    </ul>

    <h3>Managing Your Household</h3>
    <ul>
      <li><strong>Invite code</strong> — Find it in Settings &gt; Household. Tap to copy or share.</li>
      <li><strong>Members</strong> — See who's in your household.</li>
      <li><strong>Leave</strong> — You can leave a household anytime. If you're the owner, ownership transfers to another member.</li>
    </ul>
    <div class="tip-box">
      <p><strong>Tip:</strong> Both household members should enter their name in Settings so events show who logged them.</p>
    </div>
  </div>

  <div class="section">
    <h2>Widgets &amp; Apple Watch</h2>

    <h3>Home Screen Widget</h3>
    <p>Add a PottyTime widget to your home screen for at-a-glance info.</p>
    <ol>
      <li>Long-press your home screen and tap <strong>+</strong> in the top corner.</li>
      <li>Search for <strong>PottyTime</strong>.</li>
      <li>Choose <strong>small</strong> (last event + time since) or <strong>medium</strong> (last event + daily stats).</li>
    </ol>
    <p>The widget updates automatically when you log events and matches your chosen accent color.</p>

    <h3>Lock Screen Widget</h3>
    <p>Add a PottyTime widget directly to your lock screen.</p>
    <ol>
      <li>Long-press your lock screen and tap <strong>Customize</strong>.</li>
      <li>Select the widget area.</li>
      <li>Search for <strong>PottyTime</strong>.</li>
      <li>Choose <strong>circular</strong> (paw print with time since last potty) or <strong>rectangular</strong> (dog name, last potty time, and today's stats).</li>
    </ol>

    <h3>Apple Watch</h3>
    <p>The Apple Watch companion app shows your dog's dashboard at a glance and lets you log potty events with a quick tap from your wrist. Your watch syncs automatically with the iPhone app.</p>
  </div>

  <div class="section">
    <h2>Siri Shortcuts</h2>
    <p>Log potty events and check your dog's last potty hands-free with Siri. Shortcuts are available immediately with no setup required.</p>
    <p>Voice commands:</p>
    <ul>
      <li>"Log pee in PottyTime" or "Log a pee in PottyTime"</li>
      <li>"Log poop in PottyTime" or "Log a poop in PottyTime"</li>
      <li>"Log both in PottyTime"</li>
      <li>"Log an accident in PottyTime"</li>
      <li>"Log a potty in PottyTime" (quick log, defaults to pee)</li>
      <li>"When was the last potty in PottyTime"</li>
      <li>"Check last potty in PottyTime"</li>
    </ul>
    <p>Events logged via Siri sync to your household and update widgets automatically. You can also find and customize these shortcuts in the Shortcuts app.</p>
  </div>

  <div class="section">
    <h2>Tips &amp; Tricks</h2>
    <ul>
      <li><strong>Long-press</strong> a potty type to add notes and adjust the time before saving.</li>
      <li><strong>Pull down</strong> on the Dashboard to refresh synced data.</li>
      <li><strong>Swipe left</strong> on a history event to quickly delete it.</li>
      <li><strong>Long-press the map</strong> to log an event at a specific location.</li>
      <li>Enable <strong>GPS logging</strong> in Settings to see all your events on the map.</li>
      <li>Set up <strong>Potty Reminders</strong> to get nudged when it's been too long since the last break.</li>
      <li>Use <strong>Quiet Hours</strong> to silence notifications overnight.</li>
      <li><strong>Export a PDF</strong> from the History tab to share with your vet.</li>
      <li>The <strong>widget</strong> shows your dog's last potty time right on your home screen.</li>
    </ul>
  </div>

  <div class="section">
    <h2>Need Help?</h2>
    <div class="contact-box">
      <p>If you have questions or run into issues, contact us at <a href="mailto:support@pottytime.app">support@pottytime.app</a></p>
    </div>
  </div>

  ${footerHTML}
</body>
</html>`;
