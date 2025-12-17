# Deploy to Vercel Using GitHub - Step by Step

## Step 1: Create GitHub Account (If You Don't Have One)

1. Go to **[github.com](https://github.com/)**
2. Click **"Sign up"**
3. Enter your email and create a password
4. Verify your email
5. Complete signup (choose free plan)

## Step 2: Create a New Repository

1. After logging in, click the **"+"** icon in top-right
2. Select **"New repository"**
3. **Repository name:** `notimepod-landing` (or any name you want)
4. **Description:** (optional) "Landing page for No Time Podcast"
5. Select **"Public"** (it's fine, just static files)
6. **DON'T** check "Add a README file"
7. Click **"Create repository"**

## Step 3: Upload Your Files to GitHub

You'll see a page with upload options:

1. Click **"uploading an existing file"** link (in the blue box)
2. **Drag and drop** OR click **"choose your files"**
3. Upload these 2 files:
   - `index.html` (make sure you renamed `index-web3forms.html` to this!)
   - `styles.css`
4. Scroll down
5. Click **"Commit changes"** button (green button)

Your files are now on GitHub! ✅

## Step 4: Connect Vercel to GitHub

1. Go back to your **Vercel tab** (or go to vercel.com/new)
2. You should see **"Continue with GitHub"** button
3. Click it
4. GitHub will ask you to authorize Vercel - click **"Authorize"**
5. Vercel might ask which repos to access - choose **"All repositories"** or just your `notimepod-landing` repo

## Step 5: Import Your Repository in Vercel

1. Back in Vercel, you should now see **"Import Git Repository"**
2. You'll see a list of your repositories
3. Find **"notimepod-landing"** (or whatever you named it)
4. Click **"Import"** next to it

## Step 6: Configure and Deploy

1. Vercel will show you configuration options:
   - **Project Name:** Leave as-is or change if you want
   - **Framework Preset:** Leave as "Other" or "None"
   - **Root Directory:** Leave blank (default)
   - **Build Command:** Leave blank
   - **Output Directory:** Leave blank
2. Click **"Deploy"** button

## Step 7: Wait for Deployment

- Vercel will build and deploy your site
- Takes about 30-60 seconds
- You'll see a progress screen with confetti when done! 🎉

## Step 8: Get Your URL

After deployment:
1. You'll see your live site URL like: `notimepod-landing.vercel.app`
2. Click it to visit your site
3. Test the form!

## Step 9: Connect Custom Domain (Later)

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add `notimepod.com`
4. Follow instructions to add DNS records at GoDaddy

---

## Quick Checklist

- [ ] Create GitHub account
- [ ] Create new repository
- [ ] Upload `index.html` and `styles.css` (make sure index-web3forms.html is renamed!)
- [ ] Go to Vercel and click "Continue with GitHub"
- [ ] Authorize Vercel
- [ ] Import your repository
- [ ] Click Deploy
- [ ] Visit your live site!
- [ ] Test the form
- [ ] (Later) Connect custom domain

---

## Files You Need to Upload

✅ `index.html` (renamed from `index-web3forms.html`)
✅ `styles.css`

That's it! No other files needed.

---

## Troubleshooting

**"I can't find my repository in Vercel"**
- Make sure you authorized Vercel to access GitHub
- Try clicking "Adjust GitHub App Permissions" in Vercel

**"The form doesn't work"**
- Check that you uploaded the correct `index.html` (with your Web3Forms key)
- Make sure you renamed `index-web3forms.html` to `index.html`

**"The styling is broken"**
- Make sure `styles.css` was uploaded
- Check that it's in the same directory as `index.html`

---

## Need Help?

Let me know which step you're on and I'll guide you through it!
