#!/bin/bash

# ISM4421 Project Setup Script for Mac
# Run this from your ISM4421 root folder

echo "=== ISM4421 Project Setup ==="
echo ""

# Step 1: Clone the repository
echo "[Step 1/7] Cloning repository..."
if [ -d "fenago21" ]; then
    echo "  - fenago21 folder already exists. Skipping clone."
else
    git clone https://github.com/fenago/fenago21.git
    if [ $? -eq 0 ]; then
        echo "  ✓ Repository cloned successfully"
    else
        echo "  ✗ Failed to clone repository"
        exit 1
    fi
fi

# Step 2: Navigate to the project
echo ""
echo "[Step 2/7] Navigating to project folder..."
cd fenago21
echo "  ✓ Now in: $(pwd)"

# Step 3: Install dependencies
echo ""
echo "[Step 3/7] Installing npm dependencies..."
echo "  (This may take a few minutes)"
npm install
if [ $? -eq 0 ]; then
    echo "  ✓ Dependencies installed successfully"
else
    echo "  ✗ Failed to install dependencies"
    exit 1
fi

# Step 4: Remove git remote origin
echo ""
echo "[Step 4/7] Removing original git remote..."
git remote remove origin
echo "  ✓ Remote origin removed"

# Step 5: Rename .env.sample to .env
echo ""
echo "[Step 5/7] Configuring environment file..."
if [ -f ".env" ]; then
    echo "  - .env file already exists. Skipping."
elif [ -f ".env.sample" ]; then
    mv .env.sample .env
    echo "  ✓ .env.sample renamed to .env"
else
    echo "  ⚠ .env.sample file not found"
fi

# Step 6: Create research folder
echo ""
echo "[Step 6/7] Creating research folder..."
if [ -d "research" ]; then
    echo "  - research folder already exists. Skipping."
else
    mkdir research
    echo "  ✓ research folder created"
fi

# Step 7: Open browser for manual downloads
echo ""
echo "[Step 7/7] Opening resources for manual download..."
echo "  - Opening GitHub repository in browser..."
open https://github.com/fenago/VibeBusinessPlanning
echo "  ✓ Browser opened"

# Summary
echo ""
echo "=== Setup Complete! ==="
echo ""
echo "📋 NEXT STEPS (Manual):"
echo ""
echo "1. Download these 4 files from the opened GitHub page:"
echo "   • Avatar Research"
echo "   • Diary Entries"
echo "   • Brand Identity"
echo "   • Landing Page (LP) Specs"
echo ""
echo "2. Place all 4 files in the 'research' folder"
echo ""
echo "3. Open this project in Windsurf IDE:"
echo "   - Use 'Open Folder' and select: $(pwd)"
echo ""
echo "4. In Windsurf terminal, run:"
echo "   npm run dev"
echo ""
echo "5. Your app will be available at:"
echo "   http://localhost:3000"
echo ""
echo "6. Follow the AI-Assisted Implementation steps in your assignment"
echo ""

# Ask if user wants to start dev server now
echo "Would you like to start the development server now? (y/n)"
read -r response
if [ "$response" = "y" ] || [ "$response" = "Y" ]; then
    echo ""
    echo "Starting development server..."
    echo "Press Ctrl+C to stop the server when done"
    echo ""
    npm run dev
else
    echo ""
    echo "Setup script finished. Run 'npm run dev' when ready to start."
fi