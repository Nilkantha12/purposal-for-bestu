# Will You Go Out With Me? 💖

A cute, mobile-first, single-page "ask her out" website — animated welcome screen, a mood check-in, a photo upload, a playfully dodging "No" button, a confetti celebration, a food picker, a date/time picker, and a final confirmation page.

The site itself is pure HTML + CSS + JS with zero dependencies (`index.html`). An optional small Node server (`server.js`) is included if you want to watch her answers land in a file in VS Code as she clicks — see section 2.5.

## 1. Customize (one line!)

Open `index.html`, find this near the top of the `<head>`:

```html
<script>
  const HER_NAME = "Emma"; // 👈 change this to her name, that's it!
</script>
```

Change `"Emma"` to her name. That's the only edit required — it updates the greeting on screen 1 and the final confirmation message automatically.

### Optional tweaks
- **Colors**: all colors are CSS variables at the top of the `<style>` block (`--rose`, `--blush`, `--plum`, etc.) — change them to restyle the whole site.
- **Nudge messages** for the dodging "No" button: look for the `nudges` array in the `<script>` at the bottom.
- **Fonts**: currently Google Fonts "Fredoka" (headings) + "Quicksand" (body), loaded via the `<link>` tags in `<head>`.

## 2. Preview locally

**Simple preview (no click-logging):** just double-click `index.html`, or run:
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

**With live click-logging in VS Code** (see section 2.5 below) — run the included Node server instead.

## 2.5 See what she clicks, live in VS Code

This project includes a tiny local server (`server.js`) that writes every answer — her mood, whether she hit Yes, how many times she dodged "No", her food picks, and the date/time she chose — to a `responses.json` file in this folder, updated the moment she clicks.

1. Open this folder in VS Code and open a terminal (**Terminal → New Terminal**)
2. Install the one dependency:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open **http://localhost:3000** in your browser and click through the site yourself (or share that link on your local network to test with someone else's phone)
5. Open `responses.json` in VS Code — it updates in real time as clicks happen. VS Code will show a "file changed" indicator; click it to reload.

Each entry looks like this:
```json
{
  "sessionId": "a1b2c3...",
  "type": "answer",
  "value": "Yes",
  "time": "2026-07-18T10:15:00.000Z"
}
```
The `type` field is one of: `photo_uploaded`, `mood`, `no_click`, `answer`, `food`, `schedule`, `summary` (a full recap logged at the very end).

**Important:** this logging only works while `server.js` is running (i.e. local testing). Once you deploy to GitHub Pages, Netlify, or Vercel as a plain static site (section 3 below), there's no server to log to — the site still works perfectly for whoever opens the link, it just won't report answers back to you. If you want live logging on the deployed link too, you'd need to deploy `server.js` somewhere that runs Node (e.g. Render, Railway, or a Vercel serverless function) instead of a static host — happy to help set that up if you want it.

## 3. Deploy (pick one — all free)

### Netlify (easiest, drag & drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the folder containing `index.html` onto the page
3. Netlify gives you a shareable link instantly (you can rename the site in **Site settings → Change site name**)

### Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the project (or drag-and-drop the folder if using the Vercel CLI: `npx vercel`)
3. Deploy — you'll get a live link like `your-project.vercel.app`

### GitHub Pages
1. Create a new GitHub repository and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Will you go out with me 💖"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In the repo, go to **Settings → Pages**
3. Under **Source**, choose the `main` branch and `/ (root)` folder → **Save**
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two

## 4. Share the link

Once deployed, just send the link! It works great as a text message or a social media DM — the page is fully mobile-responsive and looks best opened on a phone.

## How it works

- **Screen 0 – Mood + photo**: greeting, an optional "cutie photo" upload (tap the circular frame's button to pick an image — it's saved in the browser so it's still there next visit), and a "Kasto xa aajaa?" mood check with three options (All right / Not bad / Bad), each with its own gentle reply.
- **Screen 1 – Welcome**: the proposal question, floating heart background, "Yes" and "No" buttons. Clicking/hovering "No" makes it jump to a random spot on screen (and grows the "Yes" button a little each time 😏).
- **Screen 2 – Celebration**: confetti + heart burst animation.
- **Screen 2.5 – Food picker**: multi-select chips (Momo, Chowmein, Chapati, Chatpat, Cold Drink) — tap any number of them, "Continue" unlocks once at least one is picked.
- **Screen 3 – Scheduling**: native date and time pickers (mobile-friendly), "Confirm" button enables once both are picked.
- **Screen 4 – Final**: personalized confirmation message with the chosen date, time, and selected food.

### Editing the food options
Look for `#foodGrid` in `index.html` — each option is one `<button class="food-chip" data-food="...">` line. Add, remove, or rename items there; the emoji is the first `<span class="food-emoji">`.

### Editing the mood options or replies
Look for `#moodRow` for the three buttons, and the `moodReplies` object in the `<script>` for the message shown under each choice.

### About the photo upload
The photo is picked with a normal file input and stored as a data URL in the browser's `localStorage`, so no server or backend is needed — it's private to whoever opens the link on that device/browser and persists across reloads. If she opens the link on a different device, she'll need to upload again there.

No frameworks, no build tools, no external JS libraries — just one HTML file you can host anywhere that serves static files.

Enjoy, and good luck! 🍀💖



https://nilkantha12.github.io/purposal-for-bestu/


<img width="760" height="797" alt="Screenshot 2026-07-18 104128" src="https://github.com/user-attachments/assets/c19fd2f6-6cd3-492d-b3e1-d43564a07996" />
<img width="872" height="740" alt="Screenshot 2026-07-18 104110" src="https://github.com/user-attachments/assets/6a494611-a2d2-4d2d-b7a6-60d83aa116f3" />
<img width="483" height="815" alt="Screenshot 2026-07-18 104058" src="https://github.com/user-attachments/assets/76eacb0d-060d-4f0d-ac52-5b26d7e8cd0b" />
<img width="786" height="900" alt="Screenshot 2026-07-18 104043" src="https://github.com/user-attachments/assets/7e5617e9-801b-474e-880a-26456be2ad34" />
<img width="786" height="900" alt="Screenshot 2026-07-18 104043" src="https://github.com/user-attachments/assets/81c9ac77-58e6-47c1-bcd8-e599db0ee633" />
<img width="743" height="866" alt="Screenshot 2026-07-18 104032" src="https://github.com/user-attachments/assets/d5fa5fe5-0480-4e59-a33e-17679c678010" />
<img width="1396" height="882" alt="Screenshot 2026-07-18 104020" src="https://github.com/user-attachments/assets/0e3956b7-4999-4e5b-82b8-deab0e5ef1be" />
<img width="1198" height="892" alt="Screenshot 2026-07-18 103953" src="https://github.com/user-attachments/assets/0bf30322-46f3-442b-869e-bf7280442fa3" />
