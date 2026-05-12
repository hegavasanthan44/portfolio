#!/bin/bash
# Setup script for Hega's Portfolio Website

echo "🚀 Setting up Hega's Portfolio Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete!"
    echo ""
    echo "Next steps:"
    echo "1. Update your personal information in the components"
    echo "2. Run 'npm run dev' to start the development server"
    echo "3. Build for production with 'npm run build'"
    echo ""
    echo "Happy coding! 🚀"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
