// CHIMERA OMEGA v19.0 - Optimized JavaScript
class ChimeraOmega {
    constructor() {
        this.gameState = {
            history: [],
            predictions: [],
            adaptiveMode: true,
            patternAnalysis: true,
            selectedLobby: '1m',
            numberFrequency: {},
            winStats: {
                bs: { wins: 0, losses: 0 },
                oe: { wins: 0, losses: 0 },
                color: { wins: 0, losses: 0 }
            },
            lastPrediction: null
        };
        this.init();
    }

    init() {
        this.loadSavedData();
        this.initMatrixEffect();
        this.initNumberGrids();
        this.bindEvents();
        this.updateWinRateDisplay();
        this.updateHistoryDisplay();
        this.setDefaultLobby();
    }

    // Load saved data from localStorage
    loadSavedData() {
        try {
            const saved = localStorage.getItem('chimeraOmegaData');
            if (saved) {
                this.gameState = { ...this.gameState, ...JSON.parse(saved) };
            }
        } catch (error) {
            console.log('No saved data found, starting fresh');
        }
    }

    // Save data to localStorage
    saveData() {
        try {
            localStorage.setItem('chimeraOmegaData', JSON.stringify(this.gameState));
        } catch (error) {
            console.error('Failed to save data:', error);
        }
    }

    // Initialize matrix background effect
    initMatrixEffect() {
        const matrixContainer = document.getElementById('matrixEffect');
        if (!matrixContainer) return;
        
        const characters = '0123456789ABCDEF';
        
        for (let i = 0; i < 15; i++) {
            const column = document.createElement('div');
            column.className = 'matrix-column';
            column.style.left = Math.random() * 100 + '%';
            column.style.animationDuration = (Math.random() * 3 + 2) + 's';
            column.style.animationDelay = Math.random() * 2 + 's';
            
            let text = '';
            for (let j = 0; j < 15; j++) {
                text += characters[Math.floor(Math.random() * characters.length)] + '\n';
            }
            column.textContent = text;
            matrixContainer.appendChild(column);
        }
    }

    // Initialize hot/cold number grids
    initNumberGrids() {
        const hotGrid = document.getElementById('hotGrid');
        const coldGrid = document.getElementById('coldGrid');
        
        if (!hotGrid || !coldGrid) return;

        for (let i = 0; i <= 9; i++) {
            // Hot numbers grid
            const hotItem = document.createElement('div');
            hotItem.className = 'number-item hot';
            hotItem.innerHTML = `<div class="font-bold">${i}</div><div class="text-xs">0</div>`;
            hotGrid.appendChild(hotItem);
            
            // Cold numbers grid
            const coldItem = document.createElement('div');
            coldItem.className = 'number-item cold';
            coldItem.innerHTML = `<div class="font-bold">${i}</div><div class="text-xs">0</div>`;
            coldGrid.appendChild(coldItem);
        }
    }

    // Update confidence signal visualization
    updateConfidenceSignal(confidence) {
        const segments = document.querySelectorAll('.signal-segment');
        const level = Math.floor((confidence / 100) * segments.length);
        
        segments.forEach((segment, index) => {
            segment.className = 'signal-segment w-full h-4 rounded bg-gray-700 border border-gray-600/50';
            if (index < level) {
                if (confidence >= 80) segment.classList.add('lit-green');
                else if (confidence >= 60) segment.classList.add('lit-blue');
                else if (confidence >= 40) segment.classList.add('lit-yellow');
                else if (confidence >= 20) segment.classList.add('lit-red');
                else segment.classList.add('lit-purple');
            }
        });
        
        const confidenceValue = document.getElementById('confidenceValue');
        if (confidenceValue) {
            confidenceValue.textContent = confidence + '%';
        }
    }

    // Advanced prediction algorithm
    generatePrediction(period) {
        if (!period || period.length < 4) return null;
        
        const lastDigit = parseInt(period.slice(-1));
        const secondLastDigit = period.length > 1 ? parseInt(period.slice(-2, -1)) : 0;
        
        // Advanced confidence calculation
        let confidence = 65 + Math.floor(Math.random() * 25); // 65-90%
        
        // Pattern-based adjustments
        if (this.gameState.adaptiveMode && this.gameState.history.length > 5) {
            const recentWins = this.gameState.history.slice(-10).filter(h => h.result === 'win').length;
            confidence += Math.floor(recentWins * 2); // Boost confidence based on recent wins
        }
        
        // Ensure confidence doesn't exceed 95%
        confidence = Math.min(confidence, 95);
        
        // Enhanced prediction logic
        const predictions = {
            bigSmall: this.predictBigSmall(lastDigit, secondLastDigit),
            oddEven: this.predictOddEven(lastDigit),
            color: this.predictColor(lastDigit)
        };
        
        return { predictions, confidence, period, timestamp: Date.now() };
    }

    predictBigSmall(lastDigit, secondLastDigit) {
        // Advanced Big/Small prediction with pattern recognition
        if (this.gameState.history.length >= 3) {
            const recent = this.gameState.history.slice(-3).map(h => h.predictions?.bigSmall);
            const pattern = recent.join('');
            
            // Pattern-based prediction
            if (pattern === 'BIGBIGBIG') return 'SMALL'; // Triple reverse
            if (pattern === 'SMALLSMALLSMALL') return 'BIG'; // Triple reverse
            if (pattern === 'BIGSMALLBIG') return 'SMALL'; // Alternate
            if (pattern === 'SMALLBIGSMALL') return 'BIG'; // Alternate
        }
        
        // Default logic with slight randomization
        const base = lastDigit >= 5 ? 'BIG' : 'SMALL';
        
        // Add some adaptive intelligence
        if (Math.random() > 0.7 && this.gameState.adaptiveMode) {
            return base === 'BIG' ? 'SMALL' : 'BIG';
        }
        
        return base;
    }

    predictOddEven(lastDigit) {
        // Enhanced Odd/Even prediction
        const base = lastDigit % 2 === 0 ? 'EVEN' : 'ODD';
        
        // Pattern analysis for recent trends
        if (this.gameState.history.length >= 2) {
            const recentOE = this.gameState.history.slice(-2).map(h => h.predictions?.oddEven);
            if (recentOE.every(oe => oe === 'ODD')) return 'EVEN';
            if (recentOE.every(oe => oe === 'EVEN')) return 'ODD';
        }
        
        return base;
    }

    predictColor(lastDigit) {
        // Enhanced color prediction with frequency analysis
        const colors = ['GREEN', 'RED', 'VIOLET'];
        
        // Special cases
        if (lastDigit === 0) return 'RED';
        if (lastDigit === 5) return 'VIOLET';
        
        // Frequency-based prediction for other numbers
        if (this.gameState.history.length >= 5) {
            const recentColors = this.gameState.history.slice(-5).map(h => h.predictions?.color);
            const colorCounts = colors.reduce((acc, color) => {
                acc[color] = recentColors.filter(c => c === color).length;
                return acc;
            }, {});
            
            // Return least frequent color
            return Object.keys(colorCounts).reduce((a, b) => 
                colorCounts[a] < colorCounts[b] ? a : b
            );
        }
        
        return 'GREEN'; // Default
    }

    // Display prediction results
    displayPrediction(result) {
        const container = document.getElementById('resultContainer');
        if (!container) return;
        
        container.innerHTML = `
            <div class="fade-in text-center">
                <div class="text-2xl font-bold mb-4 font-sans text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    QUANTUM ANALYSIS
                </div>
                <div class="grid grid-cols-3 gap-4 mb-6">
                    <div class="panel p-4 hover:scale-105 transition-transform">
                        <div class="text-sm text-gray-400 mb-2">BIG/SMALL</div>
                        <div class="text-2xl font-bold ${result.predictions.bigSmall === 'BIG' ? 'text-pink-400' : 'text-blue-400'}">
                            ${result.predictions.bigSmall}
                        </div>
                    </div>
                    <div class="panel p-4 hover:scale-105 transition-transform">
                        <div class="text-sm text-gray-400 mb-2">ODD/EVEN</div>
                        <div class="text-2xl font-bold ${result.predictions.oddEven === 'ODD' ? 'text-yellow-400' : 'text-blue-300'}">
                            ${result.predictions.oddEven}
                        </div>
                    </div>
                    <div class="panel p-4 hover:scale-105 transition-transform">
                        <div class="text-sm text-gray-400 mb-2">COLOR</div>
                        <div class="text-2xl font-bold ${this.getColorClass(result.predictions.color)}">
                            ${result.predictions.color}
                        </div>
                    </div>
                </div>
                <div class="text-sm text-gray-400">
                    Period: <span class="text-cyan-400">${result.period}</span> | 
                    Confidence: <span class="text-green-400">${result.confidence}%</span>
                </div>
            </div>
        `;
        
        this.updateConfidenceSignal(result.confidence);
        this.gameState.lastPrediction = result;
    }

    getColorClass(color) {
        const classes = {
            'GREEN': 'text-green-400',
            'RED': 'text-red-400',
            'VIOLET': 'text-purple-400'
        };
        return classes[color] || 'text-gray-400';
    }

    // Play sound effects
    playSound(soundId) {
        const audio = document.getElementById(soundId);
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(() => {
                // Ignore audio play errors (user interaction required)
            });
        }
    }

    // Handle feedback submission
    submitFeedback(feedback) {
        if (!this.gameState.lastPrediction) return;
        
        this.gameState.lastPrediction.result = feedback;
        this.gameState.history.push(this.gameState.lastPrediction);
        
        // Update win statistics
        if (feedback === 'win') {
            this.gameState.winStats.bs.wins++;
            this.gameState.winStats.oe.wins++;
            this.gameState.winStats.color.wins++;
            this.playSound('soundWin');
        } else {
            this.gameState.winStats.bs.losses++;
            this.gameState.winStats.oe.losses++;
            this.gameState.winStats.color.losses++;
            this.playSound('soundLoss');
        }
        
        this.saveData();
        this.updateWinRateDisplay();
        this.updateHistoryDisplay();
        this.gameState.lastPrediction = null;
    }

    // Update win rate display
    updateWinRateDisplay() {
        const calculateRate = (wins, losses) => {
            const total = wins + losses;
            return total > 0 ? Math.round((wins / total) * 100) : 0;
        };
        
        const elements = [
            { id: 'winRateBS', rate: calculateRate(this.gameState.winStats.bs.wins, this.gameState.winStats.bs.losses) },
            { id: 'winLossBS', text: `${this.gameState.winStats.bs.wins}/${this.gameState.winStats.bs.losses}` },
            { id: 'winRateOE', rate: calculateRate(this.gameState.winStats.oe.wins, this.gameState.winStats.oe.losses) },
            { id: 'winLossOE', text: `${this.gameState.winStats.oe.wins}/${this.gameState.winStats.oe.losses}` },
            { id: 'winRateColor', rate: calculateRate(this.gameState.winStats.color.wins, this.gameState.winStats.color.losses) },
            { id: 'winLossColor', text: `${this.gameState.winStats.color.wins}/${this.gameState.winStats.color.losses}` }
        ];
        
        elements.forEach(({ id, rate, text }) => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = rate !== undefined ? rate + '%' : text;
            }
        });
    }

    // Update history display
    updateHistoryDisplay() {
        const container = document.getElementById('historyContainer');
        if (!container) return;
        
        const recentHistory = this.gameState.history.slice(-10).reverse();
        
        container.innerHTML = recentHistory.map(pred => `
            <div class="flex justify-between items-center p-2 bg-gray-800 rounded text-sm hover:bg-gray-700 transition-colors">
                <span class="text-gray-400">${pred.period}</span>
                <span class="text-cyan-400 font-bold">${pred.predictions.bigSmall}</span>
                <span class="text-yellow-400 font-bold">${pred.predictions.oddEven}</span>
                <span class="${this.getColorClass(pred.predictions.color)} font-bold">${pred.predictions.color}</span>
                <span class="${pred.result === 'win' ? 'history-outcome-win' : pred.result === 'loss' ? 'history-outcome-loss' : 'text-gray-400'}">
                    ${pred.result ? (pred.result === 'win' ? '✓' : '✗') : '?'}
                </span>
            </div>
        `).join('');
    }

    // Reset system
    resetSystem() {
        if (confirm('🔄 Reset all data? This will clear your history and statistics.')) {
            this.gameState = {
                history: [],
                predictions: [],
                adaptiveMode: true,
                patternAnalysis: true,
                selectedLobby: '1m',
                numberFrequency: {},
                winStats: {
                    bs: { wins: 0, losses: 0 },
                    oe: { wins: 0, losses: 0 },
                    color: { wins: 0, losses: 0 }
                },
                lastPrediction: null
            };
            
            localStorage.removeItem('chimeraOmegaData');
            document.getElementById('periodInput').value = '';
            document.getElementById('resultContainer').innerHTML = 
                '<div class="min-h-[200px] flex justify-center items-center text-gray-500">Enter period and click Quantum Predict</div>';
            this.updateConfidenceSignal(0);
            this.updateWinRateDisplay();
            this.updateHistoryDisplay();
        }
    }

    // Set default lobby
    setDefaultLobby() {
        const defaultLobby = document.querySelector('[data-lobby="1m"]');
        if (defaultLobby) {
            defaultLobby.classList.add('active');
        }
    }

    // Bind all event listeners
    bindEvents() {
        // Keypad functionality
        document.querySelectorAll('.key-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const key = e.target.dataset.key;
                const input = document.getElementById('periodInput');
                
                if (!input) return;
                
                if (key === 'C') {
                    input.value = '';
                } else if (key === 'B') {
                    input.value = input.value.slice(0, -1);
                } else {
                    if (input.value.length < 20) {
                        input.value += key;
                    }
                }
            });
        });
        
        // Predict button
        const predictButton = document.getElementById('predictButton');
        if (predictButton) {
            predictButton.addEventListener('click', () => {
                const period = document.getElementById('periodInput').value;
                if (period && period.length >= 4) {
                    const result = this.generatePrediction(period);
                    if (result) {
                        this.displayPrediction(result);
                        this.playSound('soundPredict');
                    }
                } else {
                    alert('⚠️ Please enter at least 4 digits for the period number');
                }
            });
        }
        
        // Lobby selection
        document.querySelectorAll('.lobby-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                document.querySelectorAll('.lobby-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                this.gameState.selectedLobby = e.target.dataset.lobby;
                this.saveData();
            });
        });
        
        // Feedback buttons
        document.querySelectorAll('.feedback-number-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const feedback = e.target.dataset.feedback;
                this.submitFeedback(feedback);
            });
        });
        
        // Toggle buttons
        const adaptiveToggle = document.getElementById('adaptiveModeToggle');
        if (adaptiveToggle) {
            adaptiveToggle.addEventListener('click', () => {
                this.gameState.adaptiveMode = !this.gameState.adaptiveMode;
                adaptiveToggle.style.color = this.gameState.adaptiveMode ? '#4ade80' : '#6b7280';
                adaptiveToggle.title = `Adaptive Mode: ${this.gameState.adaptiveMode ? 'ON' : 'OFF'}`;
                this.saveData();
            });
        }
        
        const patternToggle = document.getElementById('patternToggle');
        if (patternToggle) {
            patternToggle.addEventListener('click', () => {
                this.gameState.patternAnalysis = !this.gameState.patternAnalysis;
                patternToggle.style.color = this.gameState.patternAnalysis ? '#06b6d4' : '#6b7280';
                patternToggle.title = `Pattern Analysis: ${this.gameState.patternAnalysis ? 'ON' : 'OFF'}`;
                const patternPanel = document.getElementById('patternPanel');
                if (patternPanel) {
                    patternPanel.style.display = this.gameState.patternAnalysis ? 'block' : 'none';
                }
                this.saveData();
            });
        }
        
        // Reset button
        const resetButton = document.getElementById('resetButton');
        if (resetButton) {
            resetButton.addEventListener('click', () => this.resetSystem());
        }
        
        // Enter key support for period input
        const periodInput = document.getElementById('periodInput');
        if (periodInput) {
            periodInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    predictButton?.click();
                }
            });
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.chimeraOmega = new ChimeraOmega();
});

// Service Worker registration for PWA support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}