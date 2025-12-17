# Deploy to Render Using GitHub - Step by Step

No problem! Let's get your files on GitHub and then deploy to Render.

## Step 1: Create a GitHub Repository

1. Go to **[github.com](https://github.com/)** (log in if needed)
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**

**Fill in these details:**
- **Repository name:** `notimepod-landing`
- **Description:** (optional) "Landing page for No Time Podcast"
- **Public** or **Private:** Choose **Public** (it's fine - just HTML/CSS)
- **Important:** Do NOT check "Add a README file"
- Click **"Create repository"**

## Step 2: Upload Your Files to GitHub

After creating the repository, you'll see a page with instructions. Look for the section that says **"uploading an existing file"** or **"Quick setup"**.

### Easy Way (Web Upload):

1. On the repository page, click **"uploading an existing file"** link (it's in a blue box)
2. You'll see a drag-and-drop area
3. **Drag these 2 files** from your folder:
   - `index.html`
   - `styles.css`
4. OR click **"choose your files"** and select them
5. Scroll down to the bottom
6. In the "Commit changes" box:
   - Leave the message as "Add files via upload" (or write something like "Initial commit")
7. Click the green **"Commit changes"** button

**Done!** Your files are now on GitHub at: `https://github.com/elderbas/notimepod-landing`

## Step 3: Connect Render to GitHub

1. Go back to **[Render.com](https://render.com/)** and log in
2. Click **"New +"** button (top right)
3. Select **"Static Site"**
4. You should now see options to connect Git repositories

## Step 4: Authorize Render to Access GitHub

1. Look for **"Connect GitHub"** or **"Continue with GitHub"** button
2. Click it
3. GitHub will ask you to **authorize Render** - click **"Authorize Render"**
4. GitHub might ask which repos Render can access:
   - Choose **"All repositories"** (easiest)
   - OR choose **"Only select repositories"** and pick `notimepod-landing`
5. Click **"Install & Authorize"**

## Step 5: Import Your Repository in Render

1. Back in Render, you should now see a list of your GitHub repositories
2. Find **"elderbas/notimepod-landing"** in the list
3. Click **"Connect"** button next to it

## Step 6: Configure Your Static Site

Render will show you configuration options:

**Fill these in:**
- **Name:** `notimepod` (or whatever you want - this becomes part of your URL)
- **Branch:** `main` (should be auto-selected)
- **Root Directory:** Leave BLANK
- **Build Command:** Leave BLANK (very important!)
- **Publish Directory:** Type just a dot: `.` 
  OR leave blank

**Don't change:**
- Auto-Deploy: Can leave as "Yes" (deploys automatically when you update GitHub)

## Step 7: Create Static Site

1. Review your settings one more time
2. Click **"Create Static Site"** button (green button at bottom)
3. Render will start deploying!

## Step 8: Wait for Deployment

- You'll see a build log with status
- Takes about 30-60 seconds
- When done, status will show **"Live"** with a green dot
- You'll get a URL like: **`notimepod.onrender.com`**

## Step 9: Test Your Site!

1. Click the URL Render gives you
2. Your landing page should load! 🎉
3. Fill out the form and submit
4. Check your email - Web3Forms should send you the submission

---

## Quick Checklist

- [ ] Go to github.com and create new repository `notimepod-landing`
- [ ] Upload `index.html` and `styles.css` to GitHub
- [ ] In Render, click "New +" → "Static Site"
- [ ] Click "Connect GitHub" and authorize
- [ ] Select your `notimepod-landing` repository
- [ ] Configure: Name, leave build blank, publish directory = `.`
- [ ] Click "Create Static Site"
- [ ] Wait for deployment
- [ ] Visit your live URL!
- [ ] Test the form

---

## Your URLs

- **GitHub Repo:** `https://github.com/elderbas/notimepod-landing`
- **Render Site:** `notimepod.onrender.com` (you'll get this after deployment)

---

## Update Your Site Later

To make changes in the future:
1. Go to your GitHub repository
2. Click on `index.html` or `styles.css`
3. Click the pencil icon to edit
4. Make your changes
5. Scroll down and click "Commit changes"
6. Render will automatically redeploy! (takes 30 seconds)

---

## Connect Custom Domain (Later)

After your site is live and working:
1. In Render dashboard → your site → **"Settings"**
2. Scroll to **"Custom Domain"**
3. Click **"Add Custom Domain"**
4. Enter: `notimepod.com`
5. Render gives you DNS records
6. Add those records in GoDaddy DNS settings
7. Wait 24-48 hours for DNS to propagate

---

## Troubleshooting

**"I don't see my repository in Render"**
- Make sure you authorized Render on GitHub
- Try refreshing the page
- Click "Configure GitHub App" and add the repo

**"Build failed"**
- Check that Build Command is BLANK
- Set Publish Directory to just `.` (a dot)
- Make sure both files are in the root of the repository (not in a subfolder)

**"Form doesn't work"**
- Verify your Web3Forms key is in `index.html`
- Check browser console for errors (F12)
- Test by submitting and checking your email

**"Site works but no styling"**
- Make sure `styles.css` is uploaded to GitHub
- Check that it's in the same directory as `index.html`
- Clear your browser cache and refresh

---

## Cost

- ✅ **GitHub:** FREE
- ✅ **Render Free Tier:** 100GB bandwidth/month
- ✅ **Web3Forms:** Already set up
- 💰 **Domain:** $15/year at GoDaddy

**Total: $15/year!**

---

Let me know when you're at any step and I can help if you get stuck!
