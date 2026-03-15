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
    <nav><a href="/privacy">Privacy Policy</a> <a href="/support">Support</a> <a href="/terms">Terms of Use</a></nav>
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
    <p>If you enable location logging, GPS coordinates are attached to potty events and stored in Firestore. Your home location (if set) is stored <strong>locally on your device only</strong> and is never uploaded.</p>
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

  <p class="footer">Last updated March 2026</p>
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
