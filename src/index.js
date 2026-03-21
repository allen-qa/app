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
  <h1><a href="/" style="color:inherit;text-decoration:none;display:inline-block;transition:transform 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">🐾 PottyTime</a></h1>
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
  <h1><a href="/" style="color:inherit;text-decoration:none;display:inline-block;transition:transform 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">🐾 PottyTime</a></h1>
  <p class="subtitle">Support</p>

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
  <h1><a href="/" style="color:inherit;text-decoration:none;display:inline-block;transition:transform 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">🐾 PottyTime</a></h1>
  <p class="subtitle">Terms of Use</p>

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
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: #0B1A2E;
      color: #E8EEF4;
      line-height: 1.6;
      overflow-x: hidden;
    }
    a { color: #5B9BD5; text-decoration: none; }
    a:hover { text-decoration: underline; }

    /* Hero */
    .hero {
      text-align: center;
      padding: 4rem 1.5rem 3rem;
      background: linear-gradient(180deg, #0F2341 0%, #0B1A2E 100%);
    }
    .hero-device {
      margin: 0 auto 2rem;
      width: 220px;
      position: relative;
    }
    .hero-device .phone-frame {
      position: relative;
      width: 220px;
      border-radius: 36px;
      border: 4px solid #2A2A2A;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08);
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
      width: 100px;
      height: 22px;
      background: #000;
      border-radius: 0 0 16px 16px;
      z-index: 2;
    }
    .hero h1 {
      font-size: 2.8rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 0.25rem;
      letter-spacing: -0.5px;
    }
    .hero .tagline {
      font-size: 1.35rem;
      color: #A0C4E8;
      margin-bottom: 0.35rem;
      font-weight: 500;
    }
    .hero .tagline-secondary {
      font-size: 1.1rem;
      color: #6B8DB5;
      margin-bottom: 1rem;
      font-weight: 500;
    }
    .hero .description {
      font-size: 1.05rem;
      color: #8BA8C8;
      max-width: 540px;
      margin: 0 auto 0.75rem;
      line-height: 1.7;
    }
    .hero .quip {
      font-size: 0.95rem;
      color: #5B7A9D;
      font-style: italic;
      margin-bottom: 2rem;
    }
    .app-store-badge {
      display: inline-block;
      transition: transform 0.2s, opacity 0.2s;
    }
    .app-store-badge:hover { opacity: 0.9; transform: scale(1.03); text-decoration: none; }
    .app-store-badge svg {
      height: 54px;
      width: auto;
    }

    /* How It Works */
    .how-it-works {
      padding: 3.5rem 1.5rem;
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }
    .how-it-works h2 {
      font-size: 1.8rem;
      color: #fff;
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
      max-width: 220px;
      text-align: center;
    }
    .step-icon {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: #111F35;
      border: 1px solid #1C3350;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      font-size: 1.8rem;
    }
    .step-number {
      font-size: 0.75rem;
      font-weight: 700;
      color: #4A90D9;
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
      padding: 3rem 1.5rem 3.5rem;
      text-align: center;
    }
    .screenshots h2 {
      font-size: 1.8rem;
      color: #fff;
      margin-bottom: 0.5rem;
    }
    .screenshots .section-subtitle {
      font-size: 1.05rem;
      color: #6B8DB5;
      margin-bottom: 2rem;
    }
    .screenshot-grid {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: visible;
      -webkit-overflow-scrolling: touch;
      padding: 1.5rem 0;
      scroll-snap-type: x mandatory;
    }
    .screenshot-slot {
      flex: 0 0 auto;
      scroll-snap-align: center;
      cursor: pointer;
      transition: transform 0.2s ease;
    }
    .screenshot-slot:hover {
      transform: scale(1.05);
    }
    .screenshot-slot .device-frame {
      position: relative;
      width: 260px;
      border-radius: 36px;
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
    @media (max-width: 640px) {
      .lightbox-content img { max-width: 75vw; }
      .lb-btn { width: 40px; height: 40px; font-size: 1.5rem; }
    }

    /* Features */
    .features {
      padding: 3rem 1.5rem 4rem;
      max-width: 900px;
      margin: 0 auto;
    }
    .features h2 {
      text-align: center;
      font-size: 2rem;
      color: #fff;
      margin-bottom: 0.5rem;
    }
    .features .section-subtitle {
      text-align: center;
      color: #6B8DB5;
      font-size: 1.05rem;
      margin-bottom: 2.5rem;
    }
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
    }
    .feature-card {
      background: #111F35;
      border: 1px solid #1C3350;
      border-radius: 16px;
      padding: 1.5rem;
      transition: border-color 0.2s, transform 0.2s;
    }
    .feature-card:hover {
      border-color: #4A90D9;
      transform: translateY(-2px);
    }
    .feature-card .icon {
      font-size: 1.75rem;
      margin-bottom: 0.6rem;
      display: block;
    }
    .feature-card h3 {
      font-size: 1.1rem;
      color: #fff;
      margin-bottom: 0.35rem;
      font-weight: 600;
    }
    .feature-card p {
      font-size: 0.92rem;
      color: #7A9ABE;
      line-height: 1.5;
    }

    /* Footer */
    .landing-footer {
      text-align: center;
      padding: 3rem 1.5rem;
      border-top: 1px solid #1C3350;
    }
    .landing-footer nav {
      margin-bottom: 1rem;
    }
    .landing-footer nav a {
      margin: 0 0.75rem;
      color: #5B9BD5;
      font-size: 0.95rem;
    }
    .landing-footer .tagline-footer {
      color: #4A6A8A;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
    .landing-footer .copyright {
      color: #3A5570;
      font-size: 0.8rem;
    }

    /* Responsive */
    @media (max-width: 640px) {
      .hero { padding: 3rem 1.25rem 2.5rem; }
      .hero h1 { font-size: 2.2rem; }
      .hero .tagline { font-size: 1.15rem; }
      .hero .description { font-size: 0.95rem; }
      .hero-device { width: 180px; }
      .hero-device .phone-frame { width: 180px; border-radius: 30px; }
      .hero-device .phone-notch { width: 80px; height: 18px; }
      .feature-grid { grid-template-columns: 1fr; }
      .screenshot-slot .device-frame { width: 220px; border-radius: 30px; }
      .features h2 { font-size: 1.6rem; }
      .steps { gap: 1.5rem; }
      .step { max-width: 280px; }
      .watch-grid { gap: 1rem; padding: 1rem 0; }
      .watch-slot .watch-frame { width: 100px; border-radius: 22px; }
    }

    /* Apple Watch */
    .watch-section {
      padding: 3rem 1.5rem 3.5rem;
      text-align: center;
    }
    .watch-section h2 {
      font-size: 1.8rem;
      color: #fff;
      margin-bottom: 0.5rem;
    }
    .watch-section .section-subtitle {
      font-size: 1.05rem;
      color: #6B8DB5;
      margin-bottom: 2rem;
    }
    .watch-grid {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
      padding: 1.5rem 0;
    }
    .watch-slot {
      flex: 0 0 auto;
      cursor: pointer;
      transition: transform 0.2s ease;
    }
    .watch-slot:hover {
      transform: scale(1.05);
    }
    .watch-slot .watch-frame {
      width: 130px;
      border-radius: 28px;
      border: 3px solid #2A2A2A;
      overflow: hidden;
      box-shadow: 0 8px 28px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06);
      background: #000;
    }
    .watch-slot .watch-frame img {
      width: 100%;
      height: auto;
      display: block;
      pointer-events: none;
    }
  </style>
</head>
<body>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-device">
      <div class="phone-frame">
        <div class="phone-notch"></div>
        <img src="/screenshots/dashboard.PNG?v=2" alt="PottyTime Dashboard">
      </div>
    </div>
    <h1>PottyTime</h1>
    <p class="tagline">House training your dog, made simple.</p>
    <p class="tagline-secondary">Free on the App Store</p>
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
  </section>

  <!-- How It Works -->
  <section class="how-it-works">
    <h2>How It Works</h2>
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
  </section>

  <!-- Screenshots -->
  <section class="screenshots">
    <h2>See It in Action</h2>
    <p class="section-subtitle">Dashboard, quick log, history, insights, settings, and GPS map</p>
    <div class="screenshot-grid">
      <div class="screenshot-slot" onclick="openLightbox(0)"><div class="device-frame"><img src="/screenshots/dashboard.PNG?v=2" alt="PottyTime Dashboard" loading="lazy"></div></div>
      <div class="screenshot-slot" onclick="openLightbox(1)"><div class="device-frame"><img src="/screenshots/quick-log.PNG" alt="PottyTime Quick Log" loading="lazy"></div></div>
      <div class="screenshot-slot" onclick="openLightbox(2)"><div class="device-frame"><img src="/screenshots/history.PNG?v=2" alt="PottyTime History" loading="lazy"></div></div>
      <div class="screenshot-slot" onclick="openLightbox(3)"><div class="device-frame"><img src="/screenshots/insights.PNG?v=2" alt="PottyTime Insights" loading="lazy"></div></div>
      <div class="screenshot-slot" onclick="openLightbox(4)"><div class="device-frame"><img src="/screenshots/settings.PNG" alt="PottyTime Settings" loading="lazy"></div></div>
      <div class="screenshot-slot" onclick="openLightbox(5)"><div class="device-frame"><img src="/screenshots/map2.PNG" alt="PottyTime Map" loading="lazy"></div></div>
    </div>
  </section>

  <!-- Apple Watch -->
  <section class="watch-section">
    <h2>Also on Apple Watch</h2>
    <p class="section-subtitle">Log potty breaks right from your wrist</p>
    <div class="watch-grid">
      <div class="watch-slot" onclick="openLightbox(6)"><div class="watch-frame"><img src="/screenshots/watch-dashboard.PNG" alt="PottyTime Watch Dashboard" loading="lazy"></div></div>
      <div class="watch-slot" onclick="openLightbox(7)"><div class="watch-frame"><img src="/screenshots/watch-log-event-button.PNG" alt="PottyTime Watch Log" loading="lazy"></div></div>
      <div class="watch-slot" onclick="openLightbox(8)"><div class="watch-frame"><img src="/screenshots/watch-quick-log.PNG" alt="PottyTime Watch Quick Log" loading="lazy"></div></div>
      <div class="watch-slot" onclick="openLightbox(9)"><div class="watch-frame"><img src="/screenshots/watch-logged-confirmation.PNG" alt="PottyTime Watch Confirmation" loading="lazy"></div></div>
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
      '/screenshots/dashboard.PNG?v=2',
      '/screenshots/quick-log.PNG',
      '/screenshots/history.PNG?v=2',
      '/screenshots/insights.PNG?v=2',
      '/screenshots/settings.PNG',
      '/screenshots/map2.PNG',
      '/screenshots/watch-dashboard.PNG',
      '/screenshots/watch-log-event-button.PNG',
      '/screenshots/watch-quick-log.PNG',
      '/screenshots/watch-logged-confirmation.PNG'
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
  </script>

  <!-- Features -->
  <section class="features">
    <h2>Everything you need to potty train your pup</h2>
    <p class="section-subtitle">Powerful features, dead-simple interface</p>
    <div class="feature-grid">
      <div class="feature-card">
        <span class="icon">🏠</span>
        <h3>Smart Home Alerts</h3>
        <p>Automatic reminders when you leave or arrive home so you never forget a potty break.</p>
      </div>
      <div class="feature-card">
        <span class="icon">👨‍👩‍👧‍👦</span>
        <h3>Family Sharing</h3>
        <p>Sync with your whole household in real time. One-time $6.99 purchase, free to join.</p>
      </div>
      <div class="feature-card">
        <span class="icon">📊</span>
        <h3>Charts &amp; Insights</h3>
        <p>Weekly trends, peak potty times, and daily stats to understand your dog's patterns.</p>
      </div>
      <div class="feature-card">
        <span class="icon">🗺️</span>
        <h3>GPS Map</h3>
        <p>Color-coded pins, heatmap overlay, and walk tracking to see where your dog goes.</p>
      </div>
      <div class="feature-card">
        <span class="icon">🔔</span>
        <h3>Potty Reminders</h3>
        <p>Smart interval reminders based on your dog's patterns so you're always one step ahead.</p>
      </div>
      <div class="feature-card">
        <span class="icon">⌚</span>
        <h3>Apple Watch</h3>
        <p>Quick logging from your wrist. See your dog's dashboard and log events with a tap.</p>
      </div>
      <div class="feature-card">
        <span class="icon">📱</span>
        <h3>Widgets</h3>
        <p>Home Screen and Lock Screen widgets for at-a-glance info on your dog's last break.</p>
      </div>
      <div class="feature-card">
        <span class="icon">⚡</span>
        <h3>One-Tap Logging</h3>
        <p>Log pee, poop, both, or accidents instantly. Long-press to add notes and adjust the time.</p>
      </div>
    </div>
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
  <style>${baseStyle}</style>
</head>
<body>
  <h1><a href="/" style="color:inherit;text-decoration:none;display:inline-block;transition:transform 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">🐾 PottyTime</a></h1>
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

  ${footerHTML}
</body>
</html>`;
