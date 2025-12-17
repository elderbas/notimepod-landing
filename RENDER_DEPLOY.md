# Deploy to Render - Quick Guide

Perfect choice! Render has a simple upload process - no Git required.

## Step 1: Prepare Your Files

**IMPORTANT:** Before you start, rename your file:
- Rename `index-web3forms.html` to `index.html`

You need these 2 files:
- ✅ `index.html` (the renamed file with your Web3Forms key)
- ✅ `styles.css`

## Step 2: Create a New Static Site

1. After logging into Render, you should see your **Dashboard**
2. Click the **"New +"** button (top right)
3. Select **"Static Site"** from the dropdown

## Step 3: Choose Deployment Method

You'll see several options:

1. Look for **"Public Git repository"** section
2. **SCROLL DOWN** - below that you should see:
   - **"Deploy an existing project from your computer"**
   - OR a section about **manual deploys**

3. Click **"Deploy without Git"** or **"Manual Deploy"** option

## Step 4: Upload Your Files

1. You'll see an upload area
2. **Drag and drop** your 2 files:
   - `index.html`
   - `styles.css`
3. OR click to browse and select them

## Step 5: Configure Your Site

Render will ask for some settings:

1. **Name:** `notimepod` or `notimepod-landing` (your choice)
2. **Build Command:** Leave BLANK or delete what's there
3. **Publish Directory:** Leave as `.` (dot) or blank
4. **Auto-Deploy:** Can leave off for now

## Step 6: Create Static Site

1. Review your settings
2. Click **"Create Static Site"** button (or similar)
3. Render will deploy your site!

## Step 7: Wait for Deployment

- Takes 30-60 seconds
- You'll see a build log
- When done, you'll get a URL like: `notimepod.onrender.com`

## Step 8: Visit Your Site!

1. Click the URL Render gives you
2. Your site is LIVE! 🎉
3. Test the form - submit something
4. Check your email for the Web3Forms notification

## Step 9: Connect Custom Domain (Later)

1. In Render dashboard, go to your site
2. Click **"Settings"**
3. Scroll to **"Custom Domain"** section
4. Add `notimepod.com`
5. Follow instructions to update DNS at GoDaddy

---

## Quick Checklist

- [x] Created Render account ✅
- [ ] Rename `index-web3forms.html` to `index.html`
- [ ] Click "New +" → "Static Site"
- [ ] Choose manual/upload deployment
- [ ] Upload `index.html` and `styles.css`
- [ ] Click "Create Static Site"
- [ ] Visit your live URL!
- [ ] Test the form
- [ ] (Later) Add custom domain

---

## Cost

- ✅ **Render Free Tier:** 100GB bandwidth/month (perfect for landing pages)
- ✅ **Web3Forms:** Already set up
- ✅ **Everything works together:** Your form will collect submissions via Web3Forms

**Total: $15/year** (just your domain!)

---

## Troubleshooting

**"I don't see an upload option"**
- Make sure you selected "Static Site" not "Web Service"
- Look for "Manual Deploy" or "Public Repository" - upload is usually nearby
- You might need to click "Connect a repository" then look for "Or deploy manually"

**"Build failed"**
- Check that you uploaded both files
- Make sure build command is blank
- Try setting publish directory to `.` (just a dot)

**"Form doesn't work"**
- Verify you renamed the correct file to `index.html`
- Check that your Web3Forms key is in the file
- Test by submitting and checking your email

**"Site works but styling is broken"**
- Make sure `styles.css` was uploaded
- Check both files are in the root directory (not in a subfolder)

---

## Update Your Site Later

To make changes:
1. Edit your local files
2. In Render dashboard → your site → **"Manual Deploy"**
3. Upload the updated files
4. New version deploys automatically

---

## What Happens When Someone Submits the Form?

1. Visitor fills out email, podcasts, and optional name
2. Clicks "Join Waitlist"
3. Web3Forms receives the data
4. **You get an email** with all the info
5. Visitor sees success message
6. You can view all submissions at web3forms.com

---

Let me know when you're at the deployment step and I'll help if you get stuck!
