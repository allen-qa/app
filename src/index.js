export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/' || path === '') {
      return new Response(landingHTML, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
    }
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
    background: linear-gradient(180deg, #0F2341 0%, #0B1A2E 100%);
    background-attachment: fixed;
    color: #E8EEF4;
    line-height: 1.6;
    min-height: 100vh;
  }
  .page-header {
    padding: 1.5rem 1.5rem 0;
    max-width: 720px;
    margin: 0 auto;
  }
  .page-header a {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    color: #fff;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 700;
    transition: opacity 0.2s;
  }
  .page-header a:hover { opacity: 0.8; text-decoration: none; }
  .page-header img {
    width: 36px;
    height: 36px;
    border-radius: 8px;
  }
  .page-content {
    padding: 1.5rem 1.5rem 2rem;
    max-width: 720px;
    margin: 0 auto;
  }
  h1 { font-size: 1.8rem; margin-bottom: 0.25rem; color: #fff; }
  .subtitle { color: #6B8DB5; font-size: 0.95rem; margin-bottom: 2rem; }
  h2 { font-size: 1.15rem; margin-top: 1.8rem; margin-bottom: 0.5rem; color: #fff; }
  h3 { font-size: 1.05rem; margin-top: 1.2rem; margin-bottom: 0.4rem; color: #A0C4E8; }
  .tip-box {
    background: #111F35;
    border: 1px solid #1C3350;
    border-radius: 8px;
    padding: 1rem 1.25rem;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .tip-box p { margin: 0; }
  p, li { font-size: 0.95rem; color: #B0C8E0; }
  ul, ol { padding-left: 1.25rem; margin-bottom: 0.75rem; }
  li { margin-bottom: 0.35rem; }
  a { color: #5B9BD5; text-decoration: none; }
  a:hover { text-decoration: underline; }
  p, li, h1, h2 { overflow-wrap: break-word; word-break: break-word; }
  @media (max-width: 480px) {
    .page-content { padding: 1.25rem 1rem 2rem; }
    .page-header { padding: 1.25rem 1rem 0; }
    h1 { font-size: 1.5rem; }
    h2 { font-size: 1.05rem; }
  }
  .section { margin-bottom: 1.5rem; }
  .contact-box {
    background: #111F35;
    border: 1px solid #1C3350;
    border-radius: 8px;
    padding: 1rem 1.25rem;
    margin-top: 1rem;
  }
  .footer { margin-top: 2.5rem; font-size: 0.8rem; color: #4A6A8A; text-align: center; }
  .site-footer { text-align: center; padding: 3rem 1.5rem; border-top: 1px solid #1C3350; }
  .site-footer nav { margin-bottom: 1rem; }
  .site-footer nav a { margin: 0 0.75rem; color: #5B9BD5; font-size: 0.95rem; text-decoration: none; }
  .site-footer nav a:hover { text-decoration: underline; }
  .site-footer .tagline-footer { color: #4A6A8A; font-size: 0.9rem; margin-bottom: 0.5rem; }
  .site-footer .copyright { color: #3A5570; font-size: 0.8rem; }
`;

const footerHTML = `
  <footer class="site-footer">
    <nav>
      <a href="/privacy">Privacy Policy</a>
      <a href="/support">Support</a>
      <a href="/terms">Terms of Use</a>
      <a href="/guide">User Guide</a>
    </nav>
    <p class="tagline-footer">Made with love for dog parents everywhere</p>
    <p class="copyright">&copy; 2026 PottyTime. All rights reserved.</p>
  </footer>
`;

const privacyHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PottyTime — Privacy Policy</title>
  <link rel="icon" type="image/png" href="/app-icon.png">
  <link rel="apple-touch-icon" href="/app-icon.png">
  <style>${baseStyle}</style>
</head>
<body>
  <header class="page-header">
    <a href="/"><img src="/app-icon.png" alt="PottyTime"> PottyTime</a>
  </header>
  <div class="page-content">
  <h1>Privacy Policy</h1>
  <p class="subtitle">How PottyTime handles your data</p>

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
    <h2>Apple Watch</h2>
    <p>The Apple Watch companion app syncs event data (dog name, event type, timestamp) to the paired iPhone via WatchConnectivity. No data is sent to external servers from the Watch — it relays through the iPhone app, which then syncs to Firestore if the user is in a household.</p>
  </div>

  <div class="section">
    <h2>Widgets</h2>
    <p>Home Screen and Lock Screen widgets access a limited set of data (dog name, dog photo, last event timestamp, last event type, daily counts, accent color) stored in a shared App Group container on the device. This data never leaves the device or is sent to any server.</p>
  </div>

  <div class="section">
    <h2>Push Notifications</h2>
    <p>PottyTime uses Firebase Cloud Messaging (FCM) to deliver push notifications when household members log events. Your device's FCM token is stored in Firestore alongside your user ID and is used solely to deliver these notifications. FCM tokens are automatically removed when you delete your account.</p>
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
      <li>App icon preference</li>
      <li>Accent color selection</li>
    </ul>
  </div>

  <div class="section">
    <h2>Data Retention</h2>
    <p>When you delete your account, all associated data — including your Firebase user profile, household membership, potty events, dog profiles, and FCM token — is permanently deleted from our servers. If you leave a household without deleting your account, your events and dog contributions remain in the household for other members.</p>
  </div>

  <div class="section">
    <h2>Account Deletion</h2>
    <p>You can delete your account from <strong>Settings &gt; Household &gt; Delete Account</strong>. This revokes your Apple token and deletes your Firebase account and associated data.</p>
  </div>

  <div class="section">
    <h2>Children's Privacy</h2>
    <p>PottyTime is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us at <a href="mailto:pottytimeapp@gmail.com">pottytimeapp@gmail.com</a> and we will delete it.</p>
  </div>

  <div class="section">
    <h2>Contact</h2>
    <div class="contact-box">
      <p>Questions about your data? Reach us at <a href="mailto:pottytimeapp@gmail.com">pottytimeapp@gmail.com</a></p>
    </div>
  </div>

  <p class="footer">Last updated March 20, 2026</p>
  </div>
  ${footerHTML}
</body>
</html>`;

const supportHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PottyTime — Support</title>
  <link rel="icon" type="image/png" href="/app-icon.png">
  <link rel="apple-touch-icon" href="/app-icon.png">
  <style>${baseStyle}</style>
</head>
<body>
  <header class="page-header">
    <a href="/"><img src="/app-icon.png" alt="PottyTime"> PottyTime</a>
  </header>
  <div class="page-content">
  <h1>Support</h1>
  <p class="subtitle">Help &amp; troubleshooting</p>

  <div class="section">
    <p>PottyTime is a dog potty tracking app with household sharing. Log potty events, track your dogs' routines, and keep everyone in your household in sync.</p>
  </div>

  <div class="section">
    <h2>Features</h2>
    <ul>
      <li>Multi-dog support</li>
      <li>6 color palettes with matching app icons</li>
      <li>Lock screen &amp; home screen widgets</li>
      <li>Apple Watch companion app</li>
      <li>Siri shortcuts</li>
      <li>PDF report export</li>
      <li>Interactive map with pins &amp; heatmap</li>
    </ul>
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
    <h2>How Does Walk Tracking Work?</h2>
    <p>Start a walk from the <strong>Map</strong> tab by tapping the walk button. The app tracks your route using GPS in real time, showing elapsed time and distance. When you're done, tap <strong>Stop</strong> to save the walk.</p>
    <p>Walks are saved locally on your device and are not synced to your household. You can view past walks by tapping the <strong>Walks</strong> chip on the map, then tapping any walk to see its route.</p>
    <p>Walk tracking requires at least <strong>"While In Use"</strong> location permission.</p>
  </div>

  <div class="section">
    <h2>Troubleshooting</h2>
    <h3>Notifications not working</h3>
    <p>Make sure notifications are enabled in iOS Settings &gt; PottyTime. For home alerts, location permission must be set to "Always". For household notifications, all members must be signed in.</p>
    <h3>Events not syncing</h3>
    <p>Pull down on the Dashboard to refresh. Make sure you have an internet connection and are signed into your household. Events sync in real-time when the app is open.</p>
    <h3>Location not updating</h3>
    <p>Go to Settings &gt; PottyTime &gt; Location and ensure it's set to "Always" for home alerts. Tap "Update to Current Location" in the app's home location settings to refresh.</p>
    <h3>Widget not updating</h3>
    <p>Widgets refresh every 15 minutes. After logging an event, the widget will update on the next refresh cycle. Try removing and re-adding the widget if it appears stuck.</p>
  </div>

  <div class="section">
    <h2>Contact Us</h2>
    <div class="contact-box">
      <p>Need help or have feedback? Email us at <a href="mailto:pottytimeapp@gmail.com">pottytimeapp@gmail.com</a></p>
      <p style="margin-top: 0.5rem; font-size: 0.85rem; color: #888;">We typically respond within 24 hours.</p>
    </div>
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
  <link rel="icon" type="image/png" href="/app-icon.png">
  <link rel="apple-touch-icon" href="/app-icon.png">
  <style>${baseStyle}</style>
</head>
<body>
  <header class="page-header">
    <a href="/"><img src="/app-icon.png" alt="PottyTime"> PottyTime</a>
  </header>
  <div class="page-content">
  <h1>Terms of Use</h1>
  <p class="subtitle">Rules for using PottyTime</p>

  <div class="section">
    <h2>About PottyTime</h2>
    <p>PottyTime is an iOS app for tracking your dog's potty events. Features include GPS map visualization, home radius auto-prompts, multi-dog support, calendar history, smart reminders, PDF vet reports, home screen and lock screen widgets, Apple Watch companion app, and Siri Shortcuts.</p>
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
    <p>Account deletion is permanent and cannot be undone. All your data, including events, dog profiles, and household membership, is removed from our servers immediately.</p>
    <p>When you delete your account, your data is permanently removed from our servers within 30 days. Locally stored data is deleted immediately.</p>
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
    <h2>Notifications</h2>
    <p>PottyTime sends local notifications for home arrival/departure alerts, potty reminders, and quick-log prompts. If you are in a household, push notifications are sent via Firebase Cloud Messaging when other members log events. You can manage notification permissions in iOS Settings at any time.</p>
  </div>

  <div class="section">
    <h2>Privacy</h2>
    <p>PottyTime does not use advertising, analytics, or any third-party tracking services. For full details, please see our <a href="/privacy">Privacy Policy</a>.</p>
  </div>

  <div class="section">
    <h2>Termination</h2>
    <p>We reserve the right to suspend or terminate your access to PottyTime at any time, with or without cause, with or without notice. You may stop using the app at any time. Upon termination, your right to use the app ceases immediately.</p>
  </div>

  <div class="section">
    <h2>Disclaimer</h2>
    <p>PottyTime is provided "as is" without warranties of any kind. We do our best to keep the app running smoothly, but we are not liable for any data loss, service interruptions, or issues arising from your use of the app.</p>
  </div>

  <div class="section">
    <h2>Limitation of Liability</h2>
    <p>To the maximum extent permitted by law, PottyTime and its developer shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, use, or profits, arising out of or related to your use of the app. Our total liability for any claim shall not exceed the amount you paid for the app or in-app purchase giving rise to the claim.</p>
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

  <p class="footer">Last updated March 20, 2026</p>
  </div>
  ${footerHTML}
</body>
</html>`;

const landingHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PottyTime — Dog Potty Tracker for iPhone</title>
  <meta name="description" content="House training your dog, made simple. Log potty breaks in one tap, get smart reminders, and track your pup's progress with charts and insights.">
  <link rel="icon" type="image/png" href="/app-icon.png">
  <link rel="apple-touch-icon" href="/app-icon.png">
  <meta property="og:type" content="website">
  <meta property="og:title" content="PottyTime — Dog Potty Tracker">
  <meta property="og:description" content="House training your dog, made simple. Log potty breaks in one tap, get smart reminders, and track your pup's progress.">
  <meta property="og:image" content="https://app.pottytime.workers.dev/app-icon.png">
  <meta property="og:url" content="https://app.pottytime.workers.dev">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="PottyTime — Dog Potty Tracker">
  <meta name="twitter:description" content="House training your dog, made simple. Log potty breaks in one tap, get smart reminders, and track your pup's progress.">
  <meta name="twitter:image" content="https://app.pottytime.workers.dev/app-icon.png">
  <style>
    :root {
      --surface-dim: #051427;
      --surface: #0B1A2E;
      --surface-low: #0d1c30;
      --surface-container: #122034;
      --surface-high: #1c2a3f;
      --surface-highest: #27354b;
      --primary: #a0caff;
      --primary-container: #4f94dd;
      --on-primary: #003259;
      --on-surface: #d5e3ff;
      --on-surface-variant: #c1c7d2;
      --outline: #8b919c;
      --outline-variant: #414751;
      --accent: #4A90D9;
      --muted: #6B8DB5;
      --muted-dark: #4A6A8A;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: var(--surface);
      color: var(--on-surface);
      line-height: 1.6;
      overflow-x: hidden;
    }
    a { color: #5B9BD5; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .gradient-text {
      color: var(--primary);
    }

    /* Glass Nav */
    .glass-nav {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 50;
      background: rgba(5, 20, 39, 0.7);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .nav-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1100px;
      margin: 0 auto;
      padding: 0.9rem 2rem;
    }
    .nav-brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.2rem;
      font-weight: 800;
      color: var(--primary);
      letter-spacing: -0.3px;
    }
    .nav-brand img {
      width: 30px;
      height: 30px;
      border-radius: 7px;
    }
    .nav-cta {
      background: linear-gradient(135deg, var(--primary), var(--primary-container));
      color: var(--on-primary);
      padding: 0.45rem 1.25rem;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 0.9rem;
      text-decoration: none;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .nav-cta:hover {
      transform: scale(1.03);
      box-shadow: 0 0 16px rgba(160,202,255,0.3);
      text-decoration: none;
    }

    /* Hero */
    .hero {
      padding: 7rem 2rem 4rem;
      background: linear-gradient(180deg, #0F2341 0%, var(--surface) 100%);
      position: relative;
      overflow: hidden;
    }
    .hero-glow {
      position: absolute;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);
      width: 900px;
      height: 500px;
      background: radial-gradient(ellipse, rgba(160,202,255,0.08), transparent 70%);
      pointer-events: none;
    }
    .hero-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      position: relative;
      z-index: 1;
    }
    .hero-text {
      text-align: left;
    }
    .hero-pill {
      display: inline-block;
      padding: 0.35rem 1rem;
      border-radius: 9999px;
      background: var(--surface-high);
      color: var(--primary);
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      border: 1px solid var(--outline-variant);
      margin-bottom: 1.25rem;
    }
    .hero h1 {
      font-size: 3.2rem;
      font-weight: 800;
      color: #fff;
      line-height: 1.1;
      letter-spacing: -1px;
      margin-bottom: 1rem;
    }
    .hero .description {
      font-size: 1.1rem;
      color: var(--on-surface-variant);
      max-width: 480px;
      line-height: 1.7;
      margin-bottom: 0.6rem;
    }
    .hero .quip {
      font-size: 0.95rem;
      color: var(--muted);
      font-style: italic;
      margin-bottom: 1.75rem;
    }
    .app-store-badge {
      display: inline-block;
      transition: transform 0.2s, opacity 0.2s;
    }
    .app-store-badge:hover { opacity: 0.9; transform: scale(1.03); text-decoration: none; }
    .app-store-badge svg { height: 54px; width: auto; }
    .hero-device-wrap {
      position: relative;
      display: flex;
      justify-content: center;
    }
    .hero-phone-glow {
      position: absolute;
      inset: -2rem;
      background: radial-gradient(circle, rgba(160,202,255,0.15), transparent 65%);
      filter: blur(40px);
      z-index: 0;
      pointer-events: none;
    }
    .hero-device {
      position: relative;
      z-index: 1;
      width: 280px;
    }
    .hero-device .phone-frame {
      position: relative;
      width: 280px;
      border-radius: 40px;
      border: 5px solid #2A2A2A;
      overflow: hidden;
      box-shadow: 0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08);
      background: #000;
    }
    .hero-device .phone-frame img {
      width: 100%;
      height: auto;
      display: block;
    }
    .hero-device .phone-notch {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 110px;
      height: 24px;
      background: #000;
      border-radius: 0 0 18px 18px;
      z-index: 2;
    }

    /* How It Works */
    .how-it-works {
      padding: 4rem 2rem;
      background: var(--surface-low);
      text-align: center;
    }
    .how-it-works-inner {
      max-width: 900px;
      margin: 0 auto;
    }
    .how-it-works h2 {
      font-size: 2rem;
      color: #fff;
      margin-bottom: 0.5rem;
    }
    .how-it-works .section-subtitle {
      font-size: 1.05rem;
      color: var(--muted);
      margin-bottom: 2.5rem;
    }
    .steps {
      display: flex;
      justify-content: center;
      gap: 2.5rem;
      flex-wrap: wrap;
    }
    .step {
      flex: 1 1 180px;
      max-width: 240px;
      text-align: center;
    }
    .step-icon {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: var(--surface-container);
      border: 1px solid var(--outline-variant);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      font-size: 1.8rem;
    }
    .step-number {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 0.35rem;
    }
    .step h3 {
      font-size: 1.1rem;
      color: #fff;
      margin-bottom: 0.3rem;
      font-weight: 600;
    }
    .step p {
      font-size: 0.9rem;
      color: #7A9ABE;
      line-height: 1.5;
    }

    /* Screenshots */
    .screenshots {
      padding: 4rem 2rem 4.5rem;
      text-align: center;
      background: var(--surface);
    }
    .screenshots h2 {
      font-size: 2.2rem;
      color: #fff;
      margin-bottom: 0.5rem;
    }
    .screenshots .section-subtitle {
      font-size: 1.05rem;
      color: var(--muted);
      margin-bottom: 2.5rem;
    }
    .screenshot-stage {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 560px;
      max-width: 900px;
      margin: 0 auto 2rem;
    }
    .screenshot-slot {
      cursor: pointer;
      transition: transform 0.3s ease;
    }
    .screenshot-slot:hover { transform: translateY(-8px); }
    .stagger-left {
      position: absolute;
      left: 5%;
      top: 20px;
      z-index: 2;
    }
    .stagger-center {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 40px;
      z-index: 3;
    }
    .stagger-center:hover { transform: translateX(-50%) translateY(-8px); }
    .stagger-right {
      position: absolute;
      right: 5%;
      top: 20px;
      z-index: 2;
    }
    .stagger-left .device-frame,
    .stagger-right .device-frame {
      width: 220px;
      border-radius: 32px;
    }
    .stagger-center .device-frame {
      width: 250px;
      border-radius: 36px;
      border-color: rgba(160,202,255,0.2);
      box-shadow: 0 16px 60px rgba(0,0,0,0.5), 0 0 40px rgba(160,202,255,0.08);
    }
    .screenshot-slot .device-frame {
      position: relative;
      width: 220px;
      border-radius: 32px;
      border: 4px solid #2A2A2A;
      overflow: hidden;
      box-shadow: 0 12px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06);
      background: #000;
    }
    .screenshot-slot .device-frame img {
      width: 100%;
      height: auto;
      display: block;
      pointer-events: none;
    }
    .screenshot-label {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 2rem 1rem 0.75rem;
      background: linear-gradient(transparent, rgba(0,0,0,0.7));
      pointer-events: none;
    }
    .screenshot-label span {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--primary);
    }
    .screenshot-grid-secondary {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      padding: 0.5rem 0;
    }
    .screenshot-grid-secondary .screenshot-slot .device-frame {
      width: 150px;
      border-radius: 24px;
      border-width: 3px;
    }

    /* Lightbox Modal */
    .lightbox-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.88);
      z-index: 1000;
      align-items: center;
      justify-content: center;
    }
    .lightbox-overlay.active { display: flex; }
    .lightbox-content {
      position: relative;
      max-width: 90vw;
      max-height: 90vh;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .lightbox-content img {
      max-height: 85vh;
      max-width: min(400px, 70vw);
      border-radius: 24px;
      box-shadow: 0 12px 48px rgba(0,0,0,0.6);
      user-select: none;
    }
    .lb-btn {
      background: rgba(255,255,255,0.12);
      border: none;
      color: #fff;
      font-size: 2rem;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
      flex-shrink: 0;
    }
    .lb-btn:hover { background: rgba(255,255,255,0.25); }
    .lb-close {
      position: absolute;
      top: -48px;
      right: 0;
      background: none;
      border: none;
      color: #fff;
      font-size: 2rem;
      cursor: pointer;
      opacity: 0.7;
      transition: opacity 0.2s;
    }
    .lb-close:hover { opacity: 1; }

    /* Watch Companion */
    .watch-companion {
      padding: 5rem 2rem;
      background: var(--surface-low);
      overflow: hidden;
    }
    .watch-inner {
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      gap: 4rem;
      align-items: center;
    }
    .watch-text {
      flex: 1;
    }
    .watch-text h2 {
      font-size: 2.2rem;
      color: #fff;
      margin-bottom: 1rem;
      font-weight: 800;
      letter-spacing: -0.5px;
    }
    .watch-text > p {
      font-size: 1.05rem;
      color: var(--on-surface-variant);
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }
    .watch-callout {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.25rem;
      background: var(--surface-high);
      border: 1px solid var(--outline-variant);
      border-radius: 14px;
    }
    .watch-callout-icon {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: rgba(160,202,255,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 1.2rem;
    }
    .watch-callout h4 {
      font-size: 0.95rem;
      color: #fff;
      font-weight: 700;
      margin-bottom: 0.1rem;
    }
    .watch-callout p {
      font-size: 0.85rem;
      color: var(--on-surface-variant);
    }
    .watch-devices {
      flex: 1;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      min-height: 420px;
    }
    .watch-phone-frame {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 1;
      width: 200px;
      border-radius: 32px;
      border: 4px solid #2A2A2A;
      overflow: hidden;
      box-shadow: 0 16px 48px rgba(0,0,0,0.5);
      background: #000;
      opacity: 0.5;
      transform: translateX(2rem);
    }
    .watch-phone-frame img {
      width: 100%;
      height: auto;
      display: block;
    }
    .watch-frame-hero {
      position: relative;
      z-index: 2;
      width: 170px;
      border-radius: 42px;
      border: 8px solid #333;
      overflow: hidden;
      background: #1a1a1a;
      box-shadow: 0 16px 48px rgba(0,0,0,0.5), 0 0 30px rgba(160,202,255,0.08);
      cursor: pointer;
      transition: transform 0.2s;
    }
    .watch-frame-hero:hover { transform: scale(1.03); }
    .watch-frame-hero img {
      width: 100%;
      height: auto;
      display: block;
    }
    .watch-crown {
      position: absolute;
      right: -12px;
      top: 35%;
      width: 6px;
      height: 32px;
      background: #333;
      border-radius: 0 3px 3px 0;
      z-index: 3;
    }
    .watch-thumbnails {
      display: flex;
      gap: 0.75rem;
      margin-top: 1.5rem;
      justify-content: center;
    }
    .watch-thumb {
      width: 60px;
      border-radius: 14px;
      border: 2px solid #333;
      overflow: hidden;
      background: #000;
      cursor: pointer;
      transition: transform 0.2s, border-color 0.2s;
    }
    .watch-thumb:hover {
      transform: scale(1.08);
      border-color: var(--primary);
    }
    .watch-thumb img {
      width: 100%;
      height: auto;
      display: block;
    }

    /* Bento Features */
    .features {
      padding: 4.5rem 2rem;
      background: var(--surface);
    }
    .features-inner {
      max-width: 1000px;
      margin: 0 auto;
    }
    .features h2 {
      text-align: center;
      font-size: 2.2rem;
      color: #fff;
      margin-bottom: 0.5rem;
      font-weight: 800;
      letter-spacing: -0.5px;
    }
    .features .section-subtitle {
      text-align: center;
      color: var(--muted);
      font-size: 1.05rem;
      margin-bottom: 2.5rem;
    }
    .bento-grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1rem;
    }
    .bento-8 { grid-column: span 8; }
    .bento-6 { grid-column: span 6; }
    .bento-4 { grid-column: span 4; }
    .bento-card {
      background: var(--surface-high);
      border: 1px solid var(--outline-variant);
      border-radius: 18px;
      padding: 1.75rem;
      transition: box-shadow 0.4s, transform 0.2s;
      position: relative;
      overflow: hidden;
    }
    .bento-card:hover {
      box-shadow: 0 0 40px rgba(160,202,255,0.08);
      transform: translateY(-2px);
    }
    .bento-card .icon {
      font-size: 2rem;
      margin-bottom: 0.75rem;
      display: block;
    }
    .bento-card h3 {
      font-size: 1.2rem;
      color: #fff;
      margin-bottom: 0.4rem;
      font-weight: 700;
    }
    .bento-card p {
      font-size: 0.92rem;
      color: #7A9ABE;
      line-height: 1.55;
    }
    .bento-card .bento-glow {
      position: absolute;
      right: -40px;
      bottom: -40px;
      width: 160px;
      height: 160px;
      background: rgba(160,202,255,0.04);
      border-radius: 50%;
      filter: blur(40px);
      pointer-events: none;
      transition: background 0.4s;
    }
    .bento-card:hover .bento-glow {
      background: rgba(160,202,255,0.08);
    }

    /* Social Proof */
    .social-proof {
      padding: 5rem 2rem;
      background: var(--surface-low);
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, var(--primary), var(--primary-container));
      color: var(--on-primary);
      padding: 0.9rem 2.5rem;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 1.1rem;
      text-decoration: none;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 8px 32px rgba(160,202,255,0.2);
    }
    .cta-button:hover {
      transform: scale(1.04);
      box-shadow: 0 8px 40px rgba(160,202,255,0.35);
      text-decoration: none;
    }

    /* Footer */
    .landing-footer {
      text-align: center;
      padding: 3rem 1.5rem;
      border-top: 1px solid var(--outline-variant);
      background: var(--surface);
    }
    .landing-footer nav { margin-bottom: 1rem; }
    .landing-footer nav a {
      margin: 0 0.75rem;
      color: #5B9BD5;
      font-size: 0.95rem;
    }
    .landing-footer .tagline-footer {
      color: var(--muted-dark);
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
    .landing-footer .copyright {
      color: #3A5570;
      font-size: 0.8rem;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .nav-inner { padding: 0.75rem 1.25rem; }
      .hero { padding: 5.5rem 1.25rem 2.5rem; }
      .hero-inner {
        grid-template-columns: 1fr;
        gap: 2.5rem;
        text-align: center;
      }
      .hero-text { text-align: center; }
      .hero h1 { font-size: 2.4rem; }
      .hero .description { margin: 0 auto 0.6rem; font-size: 1rem; }
      .hero .quip { font-size: 0.9rem; }
      .hero-device { width: 200px; }
      .hero-device .phone-frame { width: 200px; border-radius: 32px; border-width: 4px; }
      .hero-device .phone-notch { width: 90px; height: 20px; }
      .hero-device-wrap { order: -1; }
      .how-it-works { padding: 3rem 1.25rem; }
      .how-it-works h2 { font-size: 1.5rem; }
      .steps { gap: 1.5rem; }
      .screenshots { padding: 3rem 1.25rem; }
      .screenshots h2 { font-size: 1.6rem; }
      .screenshot-stage {
        position: static;
        height: auto;
        flex-direction: column;
        gap: 1.25rem;
        align-items: center;
      }
      .stagger-left,
      .stagger-center,
      .stagger-right {
        position: static;
        transform: none;
      }
      .stagger-center:hover { transform: translateY(-8px); }
      .stagger-left .device-frame,
      .stagger-center .device-frame,
      .stagger-right .device-frame {
        width: 220px;
        border-radius: 30px;
      }
      .screenshot-grid-secondary {
        flex-wrap: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        justify-content: flex-start;
        padding: 0.5rem 1rem;
        scroll-snap-type: x mandatory;
      }
      .screenshot-grid-secondary .screenshot-slot {
        flex: 0 0 auto;
        scroll-snap-align: center;
      }
      .watch-companion { padding: 3rem 1.25rem; }
      .watch-inner {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
      }
      .watch-text h2 { font-size: 1.6rem; }
      .watch-devices {
        min-height: 300px;
        width: 100%;
      }
      .watch-phone-frame { width: 150px; border-radius: 26px; }
      .watch-frame-hero { width: 130px; border-radius: 34px; border-width: 6px; }
      .features { padding: 3rem 1.25rem; }
      .features h2 { font-size: 1.6rem; }
      .bento-grid { grid-template-columns: 1fr; }
      .bento-8, .bento-6, .bento-4 { grid-column: 1 / -1; }
      .social-proof { padding: 3.5rem 1.25rem; }
      .lightbox-content { position: relative; max-width: 85vw; gap: 0; }
      .lightbox-content img { max-width: 85vw; }
      .lb-btn { display: none; }
      .lightbox-content img { touch-action: pan-y; }
    }
  </style>
</head>
<body>

  <!-- Glass Nav -->
  <nav class="glass-nav">
    <div class="nav-inner">
      <span class="nav-brand"><img src="/app-icon.png" alt="PottyTime"> PottyTime</span>
      <a href="https://apps.apple.com/app/pottytime" class="nav-cta">App Store</a>
    </div>
  </nav>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-glow"></div>
    <div class="hero-inner">
      <div class="hero-text">
        <span class="hero-pill">Free on the App Store</span>
        <h1>House Training Your Dog, <span class="gradient-text">Made Simple.</span></h1>
        <p class="description">Log potty breaks in one tap, get smart reminders when you leave or return home, and track your pup's progress with charts and insights.</p>
        <p class="quip">Because "did you take the dog out?" shouldn't require a group text.</p>
        <a href="https://apps.apple.com/app/pottytime" class="app-store-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="160" height="54" viewBox="0 0 160 54">
            <rect width="160" height="54" rx="12" fill="#000"/>
            <rect x="0.5" y="0.5" width="159" height="53" rx="11.5" stroke="#A6A6A6" fill="none" stroke-width="1"/>
            <g fill="#fff">
              <path d="M33.52 27.14c-.03-3.04 2.49-4.5 2.6-4.57-1.42-2.07-3.63-2.35-4.41-2.39-1.88-.19-3.66 1.1-4.62 1.1-.95 0-2.42-1.08-3.98-1.05-2.05.03-3.94 1.19-4.99 3.03-2.13 3.69-.54 9.16 1.53 12.16 1.01 1.47 2.23 3.12 3.82 3.06 1.53-.06 2.11-.99 3.96-.99s2.38.99 4 .96c1.65-.03 2.7-1.5 3.7-2.97 1.17-1.7 1.65-3.35 1.68-3.44-.04-.02-3.23-1.24-3.29-4.9z"/>
              <path d="M30.48 18.3c.84-1.02 1.41-2.44 1.26-3.86-1.22.05-2.7.82-3.57 1.84-.78.92-1.46 2.39-1.28 3.79 1.36.11 2.74-.68 3.59-1.77z"/>
            </g>
            <g fill="#fff">
              <text x="50" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="9.5" fill="#fff">Download on the</text>
              <text x="50" y="39" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="17" font-weight="600" fill="#fff">App Store</text>
            </g>
          </svg>
        </a>
      </div>
      <div class="hero-device-wrap">
        <div class="hero-phone-glow"></div>
        <div class="hero-device">
          <div class="phone-frame">
            <div class="phone-notch"></div>
            <img src="/screenshots/dashboard-3.PNG" alt="PottyTime Dashboard">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- How It Works -->
  <section class="how-it-works">
    <div class="how-it-works-inner">
      <h2>How It Works</h2>
      <p class="section-subtitle">Three steps to potty training success</p>
      <div class="steps">
        <div class="step">
          <div class="step-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4A90D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 5.172C10 3.782 8.883 2.64 7.5 2.64S5 3.782 5 5.172c0 1.39.617 2.531 2 2.531h1"/><path d="M14 5.172C14 3.782 15.117 2.64 16.5 2.64S19 3.782 19 5.172c0 1.39-.617 2.531-2 2.531h-1"/><path d="M4 14c0 4 2 7 8 7s8-3 8-7c0-2-1-4-3.5-5H7.5C5 10 4 12 4 14z"/><circle cx="9" cy="14" r="1" fill="#4A90D9" stroke="none"/><circle cx="15" cy="14" r="1" fill="#4A90D9" stroke="none"/><path d="M9 18c1 1 5 1 6 0"/></svg>
          </div>
          <p class="step-number">Step 1</p>
          <h3>Add Your Dog</h3>
          <p>Set up your pup's profile with their name, breed, and photo.</p>
        </div>
        <div class="step">
          <div class="step-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4A90D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="3"/><circle cx="12" cy="17" r="2.5" fill="none"/><path d="M12 10v-1" stroke-dasharray="2 2"/><path d="M9.5 7h5" opacity="0.4"/></svg>
          </div>
          <p class="step-number">Step 2</p>
          <h3>Tap to Log</h3>
          <p>One tap to log pee, poop, or both. It takes about two seconds.</p>
        </div>
        <div class="step">
          <div class="step-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4A90D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><circle cx="12" cy="2" r="1" fill="#4A90D9" stroke="none"/></svg>
          </div>
          <p class="step-number">Step 3</p>
          <h3>Get Smart Reminders</h3>
          <p>Automatic alerts based on patterns and when you leave or arrive home.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Screenshots -->
  <section class="screenshots">
    <h2>Your Puppy's Journey, <span class="gradient-text">Tracked.</span></h2>
    <p class="section-subtitle">Every moment logged is a step toward a cleaner home</p>
    <div class="screenshot-stage">
      <div class="screenshot-slot stagger-left" onclick="openLightbox(0)">
        <div class="device-frame">
          <img src="/screenshots/dashboard-3.PNG" alt="PottyTime Dashboard" loading="lazy">
          <div class="screenshot-label"><span>Dashboard</span></div>
        </div>
      </div>
      <div class="screenshot-slot stagger-center" onclick="openLightbox(1)">
        <div class="device-frame">
          <img src="/screenshots/quick-log-3.PNG" alt="PottyTime Quick Log" loading="lazy">
          <div class="screenshot-label"><span>Quick Log</span></div>
        </div>
      </div>
      <div class="screenshot-slot stagger-right" onclick="openLightbox(3)">
        <div class="device-frame">
          <img src="/screenshots/insights.PNG?v=2" alt="PottyTime Insights" loading="lazy">
          <div class="screenshot-label"><span>Insights</span></div>
        </div>
      </div>
    </div>
    <div class="screenshot-grid-secondary">
      <div class="screenshot-slot" onclick="openLightbox(2)"><div class="device-frame"><img src="/screenshots/history-updated.PNG" alt="PottyTime History" loading="lazy"></div></div>
      <div class="screenshot-slot" onclick="openLightbox(4)"><div class="device-frame"><img src="/screenshots/settings-updated.PNG" alt="PottyTime Settings" loading="lazy"></div></div>
      <div class="screenshot-slot" onclick="openLightbox(5)"><div class="device-frame"><img src="/screenshots/map2.PNG" alt="PottyTime Map" loading="lazy"></div></div>
    </div>
  </section>

  <!-- Apple Watch Companion -->
  <section class="watch-companion">
    <div class="watch-inner">
      <div class="watch-text">
        <h2>Also on Your <span class="gradient-text">Wrist.</span></h2>
        <p>Log potty breaks right from your Apple Watch. Never fumble for your phone mid-walk again.</p>
        <div class="watch-callout">
          <div class="watch-callout-icon">&#x231A;</div>
          <div>
            <h4>One-Tap Logging</h4>
            <p>Quick events from your wrist, synced to your iPhone instantly.</p>
          </div>
        </div>
      </div>
      <div class="watch-devices">
        <div class="watch-phone-frame">
          <img src="/screenshots/dashboard-3.PNG" alt="PottyTime iPhone" loading="lazy">
        </div>
        <div style="position:relative; z-index:2;">
          <div class="watch-frame-hero" onclick="openLightbox(6)">
            <img src="/screenshots/watch-dashboard.PNG?v=2" alt="PottyTime Watch Dashboard" loading="lazy">
            <div class="watch-crown"></div>
          </div>
          <div class="watch-thumbnails">
            <div class="watch-thumb" onclick="openLightbox(7)"><img src="/screenshots/watch-log-button.PNG" alt="Watch Log" loading="lazy"></div>
            <div class="watch-thumb" onclick="openLightbox(8)"><img src="/screenshots/watch-quick-log.PNG?v=2" alt="Watch Quick Log" loading="lazy"></div>
            <div class="watch-thumb" onclick="openLightbox(9)"><img src="/screenshots/watch-log-confirmation.PNG" alt="Watch Confirmation" loading="lazy"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Lightbox Modal -->
  <div class="lightbox-overlay" id="lightbox" onclick="if(event.target===this)closeLightbox()">
    <div class="lightbox-content">
      <button class="lb-close" onclick="closeLightbox()">&times;</button>
      <button class="lb-btn" onclick="navigateLightbox(-1)">&#8249;</button>
      <img id="lb-img" src="" alt="">
      <button class="lb-btn" onclick="navigateLightbox(1)">&#8250;</button>
    </div>
  </div>

  <script>
    const lbImages = [
      '/screenshots/dashboard-3.PNG',
      '/screenshots/quick-log-3.PNG',
      '/screenshots/history-updated.PNG',
      '/screenshots/insights.PNG?v=2',
      '/screenshots/settings-updated.PNG',
      '/screenshots/map2.PNG',
      '/screenshots/watch-dashboard.PNG?v=2',
      '/screenshots/watch-log-button.PNG',
      '/screenshots/watch-quick-log.PNG?v=2',
      '/screenshots/watch-log-confirmation.PNG'
    ];
    let lbIndex = 0;
    function openLightbox(i) {
      lbIndex = i;
      document.getElementById('lb-img').src = lbImages[lbIndex];
      document.getElementById('lightbox').classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
      document.getElementById('lightbox').classList.remove('active');
      document.body.style.overflow = '';
    }
    function navigateLightbox(dir) {
      lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
      document.getElementById('lb-img').src = lbImages[lbIndex];
    }
    document.addEventListener('keydown', function(e) {
      if (!document.getElementById('lightbox').classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    });
    (function() {
      var lbEl = document.getElementById('lightbox');
      var startX = 0;
      lbEl.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
      }, { passive: true });
      lbEl.addEventListener('touchend', function(e) {
        var dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 50) navigateLightbox(dx < 0 ? 1 : -1);
      });
    })();
  </script>

  <!-- Features Bento Grid -->
  <section class="features">
    <div class="features-inner">
      <h2>Everything You Need to <span class="gradient-text">Train Your Pup</span></h2>
      <p class="section-subtitle">Powerful features, dead-simple interface</p>
      <div class="bento-grid">
        <div class="bento-card bento-8">
          <span class="icon">&#x1F3E0;</span>
          <h3>Smart Home Alerts</h3>
          <p>Automatic reminders when you leave or arrive home so you never forget a potty break. Uses geofencing around your home location.</p>
          <div class="bento-glow"></div>
        </div>
        <div class="bento-card bento-4">
          <span class="icon">&#x1F5FA;&#xFE0F;</span>
          <h3>GPS Map</h3>
          <p>Color-coded pins, heatmap overlay, and walk tracking.</p>
        </div>
        <div class="bento-card bento-4">
          <span class="icon">&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;</span>
          <h3>Family Sync</h3>
          <p>Real-time sync for everyone. $6.99 one-time, free to join.</p>
        </div>
        <div class="bento-card bento-8">
          <span class="icon">&#x1F4CA;</span>
          <h3>Charts &amp; Insights</h3>
          <p>Weekly trends, peak potty times, and daily stats to understand your dog's patterns. Track progress week over week.</p>
          <div class="bento-glow"></div>
        </div>
        <div class="bento-card bento-6">
          <span class="icon">&#x1F514;</span>
          <h3>Smart Reminders</h3>
          <p>Interval reminders that adapt to your dog's patterns so you're always one step ahead.</p>
        </div>
        <div class="bento-card bento-6">
          <span class="icon">&#x26A1;</span>
          <h3>One-Tap Logging</h3>
          <p>Log pee, poop, both, or accidents instantly. Long-press to add notes and adjust the time.</p>
        </div>
        <div class="bento-card bento-4">
          <span class="icon">&#x1F4F1;</span>
          <h3>Widgets</h3>
          <p>Home Screen and Lock Screen widgets at a glance.</p>
        </div>
        <div class="bento-card bento-8">
          <span class="icon">&#x231A;</span>
          <h3>Apple Watch</h3>
          <p>Quick logging from your wrist. See your dog's dashboard, log events with a tap, and stay in sync with your iPhone.</p>
          <div class="bento-glow"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="social-proof">
    <h2 style="font-size:2rem;color:#fff;margin-bottom:0.5rem;font-weight:800;">Ready to Start <span class="gradient-text">Training?</span></h2>
    <p style="color:var(--on-surface-variant);font-size:1.05rem;margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto;">Download PottyTime for free and start tracking your pup's progress today.</p>
    <a href="https://apps.apple.com/app/pottytime" class="cta-button">Get PottyTime Today</a>
  </section>

  <!-- Footer -->
  <footer class="landing-footer">
    <nav>
      <a href="/privacy">Privacy Policy</a>
      <a href="/support">Support</a>
      <a href="/terms">Terms of Use</a>
      <a href="/guide">User Guide</a>
    </nav>
    <p class="tagline-footer">Made with love for dog parents everywhere</p>
    <p class="copyright">&copy; 2026 PottyTime. All rights reserved.</p>
  </footer>

</body>
</html>`;

const guideHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PottyTime — User Guide</title>
  <link rel="icon" type="image/png" href="/app-icon.png">
  <link rel="apple-touch-icon" href="/app-icon.png">
  <style>${baseStyle}</style>
</head>
<body>
  <header class="page-header">
    <a href="/"><img src="/app-icon.png" alt="PottyTime"> PottyTime</a>
  </header>
  <div class="page-content">
  <h1>User Guide</h1>
  <p class="subtitle">Everything you need to know about PottyTime</p>

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
    <p>When you receive a potty reminder or home alert notification, long-press the notification to reveal action buttons (Pee, Poop, Both, Nothing), then tap one to log directly without opening the app.</p>
  </div>

  <div class="section">
    <h2>Dashboard</h2>
    <p>The Dashboard is your home screen. It shows:</p>
    <ul>
      <li><strong>Dog Switcher</strong> — Scroll through your dogs at the top. Tap a dog to switch. Tap the <strong>+</strong> to add a new dog.</li>
      <li><strong>Last Potty</strong> — How long since the last successful potty event.</li>
      <li><strong>Next Break Prediction</strong> — Based on the average time between successful outings over the last 2 weeks, when your dog might need to go next.</li>
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
      <li><strong>Filters</strong> — Use dog filter chips to show events for specific dogs, date filter chips to narrow by time range, and the <strong>Walks</strong> chip to browse past walks.</li>
      <li><strong>Home radius</strong> — If you've set a home location, a circle shows your home radius.</li>
      <li><strong>Long-press</strong> anywhere on the map to log a new event at that location.</li>
    </ul>
    <div class="tip-box">
      <p><strong>Tip:</strong> Enable "Log GPS Location" in Settings to automatically capture coordinates when you log events from the Dashboard.</p>
    </div>

    <h3>Walk Tracking</h3>
    <p>Start a timed walk by tapping the <strong>walk button</strong> (figure.walk icon) floating on the map. While walking, the app tracks your GPS route in real time and displays elapsed time and distance in a status bar at the top.</p>
    <p>When you're done, tap <strong>Stop</strong> to save the walk. To browse past walks, tap the <strong>Walks</strong> chip on the map — this opens a list of your saved walks. Tap any walk to view its route drawn on the map with a green marker (start) and red marker (end).</p>
    <div class="tip-box">
      <p><strong>Note:</strong> Walk data is stored locally on your device only and is not synced to your household. Walk tracking requires location permission.</p>
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
      <p>If you have questions or run into issues, contact us at <a href="mailto:pottytimeapp@gmail.com">pottytimeapp@gmail.com</a></p>
    </div>
  </div>

  </div>
  ${footerHTML}
</body>
</html>`;
