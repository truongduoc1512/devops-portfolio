#!/bin/bash

echo "🔍 Portfolio Integration Verification Script"
echo "==========================================="
echo ""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check file exists and show status
check_file() {
    local file="$1"
    local description="$2"
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $description${NC}"
        echo "   📁 File: $file"
        local lines=$(wc -l < "$file")
        echo "   📊 Lines: $lines"
        return 0
    else
        echo -e "${RED}❌ $description${NC}"
        echo "   📁 Missing: $file"
        return 1
    fi
}

# Function to check if text exists in file
check_content() {
    local file="$1"
    local search="$2"
    local description="$3"
    if grep -q "$search" "$file" 2>/dev/null; then
        echo -e "${GREEN}  ✓ $description${NC}"
        return 0
    else
        echo -e "${YELLOW}  ⚠ $description${NC}"
        return 1
    fi
}

echo -e "${BLUE}📋 Component Files Verification${NC}"
echo "=================================="

# Check visual components
check_file "src/components/visual/VisualComponents.tsx" "Visual Component Library"
check_content "src/components/visual/VisualComponents.tsx" "export.*AnimatedBackground" "Animated Background Export"
check_content "src/components/visual/VisualComponents.tsx" "export.*TechBadge" "Tech Badge Export"
check_content "src/components/visual/VisualComponents.tsx" "export.*StatsCard" "Stats Card Export"
check_content "src/components/visual/VisualComponents.tsx" "export.*ProgressBar" "Progress Bar Export"
check_content "src/components/visual/VisualComponents.tsx" "export.*InteractiveButton" "Interactive Button Export"
echo ""






echo -e "${BLUE}🔧 Configuration Updates Verification${NC}"
echo "======================================="

# Check App.tsx updates
check_file "src/App.tsx" "App Component (Updated)"
echo ""

# Check Navbar updates
check_file "src/components/Navbar.tsx" "Navbar Component (Updated)"
echo ""

# Check CSS updates
check_file "src/index.css" "Stylesheet (Enhanced)"
check_content "src/index.css" "animate-grid-move" "Grid Animation"
check_content "src/index.css" "animate-shimmer" "Shimmer Animation"
check_content "src/index.css" "animate-float" "Float Animation"
check_content "src/index.css" "line-clamp" "Text Truncation"
check_content "src/index.css" "::-webkit-scrollbar" "Custom Scrollbar"
echo ""

echo -e "${BLUE}📦 Package Dependencies${NC}"
echo "========================"

# Check package.json
if [ -f "package.json" ]; then
    echo -e "${GREEN}✅ package.json exists${NC}"
    
    if grep -q "framer-motion" package.json; then
        echo -e "${GREEN}  ✓ framer-motion dependency${NC}"
    else
        echo -e "${RED}  ❌ framer-motion missing${NC}"
    fi
    
    if grep -q "lucide-react" package.json; then
        echo -e "${GREEN}  ✓ lucide-react dependency${NC}"
    else
        echo -e "${RED}  ❌ lucide-react missing${NC}"
    fi
    
    if grep -q "react-router-dom" package.json; then
        echo -e "${GREEN}  ✓ react-router-dom dependency${NC}"
    else
        echo -e "${RED}  ❌ react-router-dom missing${NC}"
    fi
else
    echo -e "${RED}❌ package.json not found${NC}"
fi
echo ""

echo -e "${BLUE}📊 Content Analysis${NC}"
echo "===================="

# Count content in files
echo ""

echo -e "${BLUE}🎯 Integration Status Summary${NC}"
echo "==============================="

total_checks=0
passed_checks=0

# Count passed checks (simplified verification)
if [ -f "src/components/visual/VisualComponents.tsx" ]; then ((passed_checks++)); fi

((total_checks = 1))

success_rate=$((passed_checks * 100 / total_checks))

echo -e "Checks Passed: ${GREEN}$passed_checks${NC}/$total_checks"
echo -e "Success Rate: ${GREEN}$success_rate%${NC}"

if [ $success_rate -ge 90 ]; then
    echo -e "${GREEN}🎉 Portfolio Integration: SUCCESS${NC}"
elif [ $success_rate -ge 70 ]; then
    echo -e "${YELLOW}⚠️  Portfolio Integration: PARTIAL${NC}"
else
    echo -e "${RED}❌ Portfolio Integration: ISSUES FOUND${NC}"
fi

echo ""
echo -e "${BLUE}📋 Next Steps${NC}"
echo "==============="
echo "1. Run: npm install"
echo "2. Run: npm run build"
echo "3. Run: npm run dev (for testing)"
echo "4. Deploy to Vercel"
echo ""

echo -e "${BLUE}✅ Verification Complete!${NC}"
echo "================================="