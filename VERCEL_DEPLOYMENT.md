# 🚀 Vercel Deployment Guide

## ✅ Project Structure Verification

Your project **follows Vercel's structure and rules**:

- ✅ **API Functions**: `api/index.js` exports a serverless function
- ✅ **Frontend Build**: `Frontend/` uses Vite with proper build script
- ✅ **Configuration**: `vercel.json` properly configured
- ✅ **Workspace Setup**: Root `package.json` with workspaces
- ✅ **Serverless Ready**: Backend uses serverless-compatible patterns

## 📋 Pre-Deployment Checklist

### 1. Install Dependencies
```bash
# From the root directory (C:\Users\gajaw\Desktop\vercel)
npm install
```

### 2. Test Build Locally (Optional)
```bash
# Build frontend
npm run build

# Test with Vercel CLI (if installed)
npx vercel dev
```

## 🌐 Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub/GitLab/Bitbucket**
   - Commit all changes
   - Push to your repository

2. **Import Project to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect the configuration

3. **Configure Environment Variables**
   In Vercel Dashboard → Project Settings → Environment Variables, add:
   
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   FRONTEND_URL=https://your-project.vercel.app
   ```
   
   **Important**: Add these for **Production**, **Preview**, and **Development** environments.

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically:
     - Install dependencies
     - Build the frontend (`npm run build` in Frontend/)
     - Deploy the API serverless function
     - Serve static files

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not installed)
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # From root directory
   vercel
   
   # For production deployment
   vercel --prod
   ```

4. **Set Environment Variables**
   ```bash
   vercel env add MONGODB_URI
   vercel env add JWT_SECRET
   vercel env add FRONTEND_URL
   ```

## 🔧 Project Configuration

### Build Settings (Auto-detected by Vercel)

- **Root Directory**: `.` (project root)
- **Build Command**: `npm run build` (runs in Frontend/)
- **Output Directory**: `Frontend/dist`
- **Install Command**: `npm install` (installs workspace dependencies)

### API Routes

All API routes are available at:
- `https://your-project.vercel.app/api/*`
- Examples:
  - `/api/health`
  - `/api/auth/login`
  - `/api/buses`
  - `/api/routes`
  - `/api/notifications`

### Frontend Routes

- All frontend routes are served as a Single Page Application (SPA)
- React Router handles client-side routing
- All non-API routes serve `index.html`

## 🧪 Testing After Deployment

1. **Health Check**
   ```
   https://your-project.vercel.app/api/health
   ```
   Should return: `{"status":"ok","timestamp":"..."}`

2. **Frontend**
   ```
   https://your-project.vercel.app
   ```
   Should load your React app

3. **API Endpoints**
   Test your authentication and other API endpoints

## ⚠️ Important Notes

1. **MongoDB Connection**: Ensure your MongoDB Atlas (or other MongoDB service) allows connections from Vercel's IP addresses (or use 0.0.0.0/0 for all IPs in development)

2. **CORS**: The `FRONTEND_URL` environment variable should match your Vercel deployment URL

3. **Socket.IO**: Real-time features using Socket.IO may have limitations on Vercel's serverless functions. Consider using Vercel's Edge Functions or external WebSocket service for production.

4. **Function Timeout**: API functions on the Hobby plan have a 10-second timeout by default. For longer operations, consider background jobs or queueing.

## 🐛 Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify Node.js version (requires >=18.18.0)
- Check build logs in Vercel dashboard

### API Returns 500 Errors
- Verify `MONGODB_URI` is set correctly
- Check MongoDB connection allows Vercel IPs
- Review function logs in Vercel dashboard

### Frontend Not Loading
- Verify `FRONTEND_URL` matches your deployment URL
- Check that build completed successfully
- Verify routes in `vercel.json`

### CORS Errors
- Ensure `FRONTEND_URL` includes your Vercel domain
- Check CORS configuration in `Backend/app.js`

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Serverless Functions Guide](https://vercel.com/docs/functions)
- [Environment Variables](https://vercel.com/docs/environment-variables)


