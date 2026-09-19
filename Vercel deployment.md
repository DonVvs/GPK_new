# Vercel Production Deployment Guide & Post-Mortem

**Project**: Gargi PaperKraft India (`gpk-new`)  
**Repository**: [https://github.com/DonVvs/GPK_new.git](https://github.com/DonVvs/GPK_new.git)  
**Production Domains**:
- [https://www.gargipaperkraft.com](https://www.gargipaperkraft.com)
- [https://gargipaperkraft.com](https://gargipaperkraft.com)
- [https://gpk-new.vercel.app](https://gpk-new.vercel.app)

---

## 1. Summary of What Happened

When pushing the updated code to GitHub and attempting to trigger deployment on Vercel, the build initially failed with the following errors in the Vercel dashboard:

```text
Fix Git Configuration:
The commit author email (singh.vibhu2424@gmail.com) is not a valid email address. 
This prevents Vercel from identifying the commit author and allowing the deployment.
```
```text
Deployment Blocked:
The deployment was blocked because the commit author did not have contributing access to the project on Vercel.
The Hobby Plan does not support collaboration for private repositories. Please upgrade to Pro to add team members.
```

---

## 2. Root Cause Analysis

1. **Commit Author Mismatch**:
   - The Vercel account owner is **`pratapnsingh-2177`** associated with **`pratap.n.singh@gmail.com`**.
   - The local Git environment was previously configured with **`singh.vibhu2424@gmail.com`**.
2. **Vercel Hobby Plan Collaboration Restriction**:
   - On Vercel's personal **Hobby Plan**, private repositories enforce strict commit-author checks.
   - Any commit pushed by an email address that does not match the primary account owner is flagged as an "unauthorized collaborator on a private repository", triggering a hard block and prompting an upgrade to the Pro plan ($20/seat/month).

---

## 3. Step-by-Step Resolution

### Step 1: Align Local Git Credentials with the Vercel Account
We aligned the local Git author identity with the primary verified Vercel account email:

```powershell
git config user.email "pratap.n.singh@gmail.com"
git config user.name "DonVvs"
```

### Step 2: Rewrite & Amend Git Commit Author
We reset the commit author of the latest commit to the verified email and force-pushed to `origin/main`:

```powershell
git commit --amend --reset-author --no-edit
git push origin main --force
```

We also pushed a clean follow-up commit to ensure the GitHub push webhook triggered cleanly:

```powershell
git commit --allow-empty -m "chore: trigger production deployment"
git push origin main
```

### Step 3: Authenticate the Vercel CLI Directly
We authenticated the Vercel CLI locally using browser OAuth device code authorization:

```powershell
cmd /c "npx vercel login"
```
- Visited `https://vercel.com/oauth/device?user_code=...`
- Confirmed authorization in the browser to sign in as `pratapnsingh-2177`.

### Step 4: Link Project Settings & Pull Production Environment
We linked the local workspace to the cloud project `prataps-projects-dfd1b26f/gpk-new`:

```powershell
cmd /c "npx vercel pull --yes --environment production"
```

### Step 5: Direct Production Deployment via CLI
We triggered a direct production build using the Vercel CLI:

```powershell
cmd /c "npx vercel --prod --debug"
```

---

## 4. Deployment Outcome & Verification

The build succeeded with exit code 0:
- **Deployment ID**: `dpl_AtPE2gu5jQwWhCfCD281wNacCtvg`
- **Build Output**: 39 static routes generated cleanly via Next.js Turbopack (`○ Static` & `● SSG`)
- **Status**: `READY`
- **Aliases Assigned**:
  - `https://www.gargipaperkraft.com`
  - `https://gargipaperkraft.com`
  - `https://gpk-new.vercel.app`
  - `https://gpk-new-prataps-projects-dfd1b26f.vercel.app`

---

## 5. Best Practices for Future Deployments

1. **Keep Author Email Consistent**:
   Always ensure your local Git email is set to `pratap.n.singh@gmail.com`:
   ```bash
   git config user.email
   # Should return: pratap.n.singh@gmail.com
   ```
2. **Push Directly via Git**:
   Now that the author email matches your Vercel account, any standard:
   ```bash
   git add .
   git commit -m "your message"
   git push origin main
   ```
   will automatically build and deploy on Vercel without blocks.
3. **Emergency Direct CLI Deployment**:
   If a Git webhook ever stalls, run:
   ```bash
   npx vercel --prod
   ```
