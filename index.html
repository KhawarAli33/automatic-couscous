
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <title>CHIMERA OMEGA v16.5 :: Hybrid AI Core</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Share Tech Mono', monospace; }
    .font-sans { font-family: 'Orbitron', sans-serif; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .signal-segment { transition: all 0.4s ease; }
    .signal-segment.lit-green { background-color: #28a745; box-shadow: 0 0 10px #28a745; }
    .signal-segment.lit-blue { background-color: #00e5ff; box-shadow: 0 0 10px #00e5ff; }
    .signal-segment.lit-yellow { background-color: #ffcc00; box-shadow: 0 0 10px #ffcc00; }
    .signal-segment.lit-red { background-color: #dc3545; box-shadow: 0 0 10px #dc3545; }
    .signal-segment.lit-purple { background-color: #9d00ff; box-shadow: 0 0 10px #9d00ff; }
    .history-outcome-win { color: #28a745; }
    .history-outcome-loss { color: #dc3545; }
    .type-rate { color: #00e5ff; }
    .key-button { transition: all 0.2s; }
    .key-button:hover { transform: scale(1.05); }
    .key-button:active { transform: scale(0.95); }
    .predict-button {
      transition: all 0.3s;
      box-shadow: 0 0 15px rgba(0, 229, 255, 0.5), 0 0 15px rgba(255, 0, 255, 0.5);
    }
    .predict-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 20px #00e5ff, 0 0 20px #ff00ff;
    }
    .lobby-btn.active {
      text-shadow: 0 0 5px #00e5ff;
      color: #00e5ff;
      background-color: #111827;
    }
    .lobby-btn:hover:not(.active) { color: #00e5ff; }
    .icon-btn { transition: all 0.2s ease; cursor: pointer; }
    .icon-btn:hover { transform: scale(1.1); color: #00e5ff; }
    .strategy-tag { 
      font-size: 0.65rem; 
      padding: 0.15rem 0.4rem;
      border-radius: 0.25rem;
      font-family: 'Orbitron', sans-serif;
      font-weight: bold;
      border: 1px solid currentColor;
    }
    .T-Rev { color: #d8b4fe; } /* purple-300 */
    .D-Alt { color: #7dd3fc; } /* sky-300 */
    .Alt { color: #fde047; } /* yellow-300 */
    .T-Cont { color: #fca5a5; } /* red-300 */
    .HYBRID { color: #6ee7b7; } /* emerald-300 */
    .COLD { color: #fdba74; } /* orange-300 */
  </style>
</head>
<body class="bg-gray-900 text-gray-100 flex flex-col items-center min-h-screen p-4 transition-colors duration-300">
  <!-- Header -->
  <div class="w-full max-w-md bg-gray-800 border border-cyan-500/20 rounded-xl shadow-lg shadow-cyan-500/10 flex justify-between items-center p-4 mb-6">
    <div class="flex items-center gap-2">
      <i id="internetStatus" class="icon-btn fa-solid fa-wifi text-gray-500 text-lg" title="Toggle MatchSync (Enhanced Learning Mode)"></i>
      <div class="text-left">
        <div id="winRateDisplay" class="text-xs text-gray-400">Type: 0%</div>
        <div id="winLossDisplay" class="text-xs text-gray-400">W/L: 0/0</div>
      </div>
    </div>
    
    <div class="font-sans text-xl font-bold text-cyan-400 tracking-tighter">
      CHIMERA OMEGA <span class="text-xs text-pink-500">v16.5</span>
    </div>
    
    <div class="flex items-center gap-3">
      <i id="languageToggle" class="icon-btn fa-solid fa-language text-lg" title="Toggle Voice Language"></i>
      <i id="themeToggle" class="icon-btn fa-solid fa-moon text-lg" title="Toggle Theme"></i>
      <i id="audioToggle" class="icon-btn fa-solid fa-volume-high text-lg" title="Toggle Audio"></i>
      <i id="resetButton" class="icon-btn fa-solid fa-refresh text-lg" title="Reset ALL Lobbies & Memory"></i>
    </div>
  </div>

  <!-- Main Content -->
  <div class="w-full max-w-md bg-gray-800 border border-cyan-500/20 rounded-xl shadow-lg shadow-cyan-500/10 p-6 flex flex-col gap-6">
    <!-- Lobby Selector -->
    <div class="flex justify-around bg-gray-900 p-1 rounded-lg mb-2">
      <button class="lobby-btn text-gray-400 px-3 py-1 font-sans text-sm rounded-md transition-colors" data-lobby="30s">30s</button>
      <button class="lobby-btn text-gray-400 px-3 py-1 font-sans text-sm rounded-md transition-colors" data-lobby="1m">1m</button>
      <button class="lobby-btn text-gray-400 px-3 py-1 font-sans text-sm rounded-md transition-colors" data-lobby="3m">3m</button>
      <button class="lobby-btn text-gray-400 px-3 py-1 font-sans text-sm rounded-md transition-colors" data-lobby="5m">5m</button>
    </div>
    
    <!-- Input Section -->
    <div class="flex flex-col gap-4">
      <input id="periodInput" class="w-full bg-gray-900 border border-cyan-500/30 text-cyan-400 font-sans text-3xl text-center rounded-lg p-3 shadow-inner shadow-cyan-500/10 focus:outline-none focus:ring-1 focus:ring-cyan-500" type="text" maxlength="20" placeholder="Period Number..." readonly>
      
      <div class="grid grid-cols-3 gap-2">
        <button class="key-button bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white font-sans text-2xl rounded-lg p-4" data-key="1">1</button>
        <button class="key-button bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white font-sans text-2xl rounded-lg p-4" data-key="2">2</button>
        <button class="key-button bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white font-sans text-2xl rounded-lg p-4" data-key="3">3</button>
        <button class="key-button bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white font-sans text-2xl rounded-lg p-4" data-key="4">4</button>
        <button class="key-button bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white font-sans text-2xl rounded-lg p-4" data-key="5">5</button>
        <button class="key-button bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white font-sans text-2xl rounded-lg p-4" data-key="6">6</button>
        <button class="key-button bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white font-sans text-2xl rounded-lg p-4" data-key="7">7</button>
        <button class="key-button bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white font-sans text-2xl rounded-lg p-4" data-key="8">8</button>
        <button class="key-button bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white font-sans text-2xl rounded-lg p-4" data-key="9">9</button>
        <button class="key-button bg-rose-700 hover:bg-rose-600 border border-rose-600 text-white font-sans text-xl rounded-lg p-4" data-key="C">C</button>
        <button class="key-button bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white font-sans text-2xl rounded-lg p-4" data-key="0">0</button>
        <button class="key-button bg-amber-700 hover:bg-amber-600 border border-amber-600 text-white font-sans text-xl rounded-lg p-4" data-key="B">←</button>
      </div>
      
      <button id="predictButton" class="predict-button bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-sans text-lg py-4 rounded-lg uppercase tracking-wider">
        <i class="fa-solid fa-bolt"></i> Quantum Analyze
      </button>
    </div>
    
    <!-- Results Container -->
    <div id="resultContainer" class="min-h-[264px] flex justify-center items-center"></div>
    
    <!-- Confidence Indicator -->
    <div class="mt-2 px-4">
      <h5 class="text-center text-sm text-gray-400 mb-2 font-sans tracking-widest">AI CONFIDENCE</h5>
      <div id="signalTower" class="flex flex-col gap-2 w-full mx-auto">
        <div class="signal-segment w-full h-4 rounded bg-gray-700 border border-gray-600/50"></div>
        <div class="signal-segment w-full h-4 rounded bg-gray-700 border border-gray-600/50"></div>
        <div class="signal-segment w-full h-4 rounded bg-gray-700 border border-gray-600/50"></div>
        <div class="signal-segment w-full h-4 rounded bg-gray-700 border border-gray-600/50"></div>
        <div class="signal-segment w-full h-4 rounded bg-gray-700 border border-gray-600/50"></div>
      </div>
    </div>
  </div>

  <!-- Strategy Performance Dashboard -->
  <div id="strategyDashboard" class="hidden w-full max-w-md bg-gray-800 border border-cyan-500/20 rounded-xl shadow-lg shadow-cyan-500/10 p-4 mt-6">
    <h4 class="font-sans text-lg font-bold text-center mb-3">STRATEGY PERFORMANCE</h4>
    <div id="strategyStats" class="grid grid-cols-2 gap-3 text-xs"></div>
  </div>

  <!-- History Log -->
  <div id="historyContainer" class="hidden w-full max-w-md bg-gray-800 border border-cyan-500/20 rounded-xl shadow-lg shadow-cyan-500/10 p-4 mt-6">
    <div class="flex justify-between items-center mb-2">
      <h4 class="font-sans text-lg font-bold">SESSION HISTORY LOG</h4>
      <button id="toggleStrategyDashboard" class="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600">
        <i class="fas fa-chart-line"></i> Stats
      </button>
    </div>
    <div id="historyLog" class="max-h-48 overflow-y-auto pr-2"></div>
  </div>

<script>
document.addEventListener('DOMContentLoaded', () => {
    // === DOM, State & Core Functions ===
    const periodInput = document.getElementById("periodInput"),
          keypadButtons = document.querySelectorAll(".key-button"),
          predictBtn = document.getElementById("predictButton"),
          resultContainer = document.getElementById("resultContainer"),
          themeToggle = document.getElementById("themeToggle"),
          audioToggle = document.getElementById("audioToggle"),
          resetButton = document.getElementById("resetButton"),
          winRateDisplay = document.getElementById("winRateDisplay"),
          winLossDisplay = document.getElementById("winLossDisplay"),
          internetStatus = document.getElementById("internetStatus"),
          languageToggle = document.getElementById("languageToggle"),
          htmlEl = document.documentElement,
          historyContainer = document.getElementById("historyContainer"),
          historyLog = document.getElementById("historyLog"),
          signalTower = document.getElementById("signalTower"),
          lobbyButtons = document.querySelectorAll('.lobby-btn'),
          strategyDashboard = document.getElementById("strategyDashboard"),
          strategyStats = document.getElementById("strategyStats"),
          toggleStrategyDashboard = document.getElementById("toggleStrategyDashboard");

    const createInitialLobbyState = () => ({
        history: [],
        wins: 0,
        losses: 0,
        strategyWeights: {
            "T-Rev": { weight: 9.0, recentAccuracy: [] },
            "D-Alt": { weight: 8.0, recentAccuracy: [] },
            "Alt": { weight: 7.0, recentAccuracy: [] },
            "T-Cont": { weight: 6.0, recentAccuracy: [] }
        }
    });
    
    let state = {
        isAudioEnabled: true,
        isMatchSync: false,
        language: 'en',
        activeLobby: '30s',
        lobbies: {
            '30s': createInitialLobbyState(),
            '1m': createInitialLobbyState(),
            '3m': createInitialLobbyState(),
            '5m': createInitialLobbyState()
        }
    };
    
    let currentPrediction = null;
    let audioCtx, synth = window.speechSynthesis, voices = [];
    
    // --- Initializing Core Functions ---
    const initAudioContext = () => {
        if (!audioCtx) audioCtx = new(window.AudioContext || window.webkitAudioContext)();
    };
    
    function populateVoiceList() {
        if(typeof speechSynthesis === 'undefined') return;
        voices = synth.getVoices();
        if (synth.onvoiceschanged !== undefined) {
            synth.onvoiceschanged = populateVoiceList;
        }
    }
    
    const speak = (text, priority = false, lang = state.language) => {
        if (!state.isAudioEnabled || !synth) return;
        if (priority) synth.cancel();
        if (synth.speaking && !priority) return;
        
        const utterance = new SpeechSynthesisUtterance(text);
        if (lang === 'ur') {
            utterance.lang = 'ur-PK';
            utterance.voice = voices.find(v => v.lang === 'ur-PK' || v.lang.startsWith('ur'));
        } else {
            utterance.lang = 'en-GB';
            utterance.voice = voices.find(v => v.name.includes('Google UK English') || v.name.includes('Google') || v.default);
        }
        utterance.pitch = 1.1;
        utterance.rate = 1.2;
        synth.speak(utterance);
    };
    
    const playSound = (type) => {
        if (!state.isAudioEnabled || !audioCtx) return;
        const osc = audioCtx.createOscillator(),
              gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        const now = audioCtx.currentTime;
        if (type === 'beep') { osc.type = "sine"; osc.frequency.setValueAtTime(620, now); } 
        else if (type === 'success') { osc.type = "sine"; osc.frequency.setValueAtTime(800, now); } 
        else if (type === 'error') { osc.type = 'square'; osc.frequency.setValueAtTime(200, now); } 
        else if (type === 'recal') { osc.type = 'sawtooth'; osc.frequency.setValueAtTime(400, now); }
        
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.00001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.3);
    };
    
    const getBigSmall = (num) => (num >= 5 ? (state.language === 'ur' ? 'بڑا' : 'Big') : (state.language === 'ur' ? 'چھوٹا' : 'Small'));
    
    const predictColdestNumber = (type, history) => {
        const lang = state.language;
        const pool = type === (lang === 'ur' ? 'بڑا' : 'Big') ? [5,6,7,8,9] : [0,1,2,3,4];
        if (history.length < 10) return pool[Math.floor(Math.random() * pool.length)];
        
        const recentNumbers = history.slice(-20).map(h => h.num);
        const counts = new Map(pool.map(n => [n, 0]));
        recentNumbers.forEach(num => {
            if (counts.has(num)) counts.set(num, counts.get(num) + 1);
        });
        
        return [...counts.entries()].reduce((a, b) => a[1] < b[1] ? a : b)[0];
    };
    
    // === NEXUS CORE v16.5: Hybrid AI Engine ===
    const chimeraOmegaCore = (history, strategyWeights, lang) => {
        const BIG = lang === 'ur' ? 'بڑا' : 'Big';
        const SMALL = lang === 'ur' ? 'چھوٹا' : 'Small';

        if (history.length < 5) {
            const lastType = history.length > 0 ? history[history.length - 1].type : (Math.random() > 0.5 ? BIG : SMALL);
            const fallbackType = lastType === BIG ? SMALL : BIG;
            const num = predictColdestNumber(fallbackType, history);
            return {
                num,
                type: fallbackType,
                confidence: 35,
                strategy: "COLD",
                reason: lang === 'ur' ? 'ڈیٹا ناکافی، بنیادی تجزیہ' : 'Insufficient Data, Basic Analysis'
            };
        }

        const lastResult = history[history.length - 1];
        const A = lastResult.type;
        const B = (A === BIG) ? SMALL : BIG;

        Object.keys(strategyWeights).forEach(strategy => {
            const log = strategyWeights[strategy].recentAccuracy;
            if (log.length > 0) {
                const successes = log.filter(x => x).length;
                const accuracy = successes / log.length;
                strategyWeights[strategy].weight = 5 + (accuracy * 10);
            }
        });
        
        const patterns = [
            { id: "T-Rev", sequence: [A, A, A], prediction: B, weight: strategyWeights["T-Rev"].weight },
            { id: "D-Alt", sequence: [B, A, B, A], prediction: A, weight: strategyWeights["D-Alt"].weight },
            { id: "Alt", sequence: [A, B, A], prediction: B, weight: strategyWeights["Alt"].weight },
            { id: "T-Cont", sequence: [B, A, A], prediction: A, weight: strategyWeights["T-Cont"].weight }
        ];
        
        const recentHistoryTypes = history.map(h => h.type).slice(-4);
        let bigScore = 0, smallScore = 0;
        let activeStrategies = [];

        patterns.forEach(pattern => {
            const pLen = pattern.sequence.length;
            if (recentHistoryTypes.length >= pLen && JSON.stringify(recentHistoryTypes.slice(-pLen)) === JSON.stringify(pattern.sequence)) {
                if (pattern.prediction === BIG) bigScore += pattern.weight;
                else smallScore += pattern.weight;
                activeStrategies.push(pattern.id);
            }
        });
        
        if (activeStrategies.length === 0) {
            const num = predictColdestNumber(B, history);
            return { num, type: B, confidence: 45, strategy: "COLD", reason: lang === 'ur' ? 'کوئی پیٹرن نہیں، ڈیفالٹ ریورسل' : 'No Pattern, Default Reversal' };
        }

        const totalWeight = bigScore + smallScore;
        const finalPrediction = bigScore >= smallScore ? BIG : SMALL;
        const confidence = totalWeight > 0 ? (Math.max(bigScore, smallScore) / totalWeight) * 100 : 50;

        if (confidence < 60) {
             const num = predictColdestNumber(finalPrediction, history);
             return { num, type: finalPrediction, confidence: Math.round(confidence), strategy: "COLD", reason: lang === 'ur' ? `کم اعتماد (${Math.round(confidence)}%) - کولڈ نمبر پر سوئچ` : `Low Confidence (${Math.round(confidence)}%) - Switched to Cold Number` }
        }

        const finalNum = predictColdestNumber(finalPrediction, history);
        return { num: finalNum, type: finalPrediction, confidence: Math.min(Math.round(confidence), 99), strategy: "HYBRID", reason: lang === 'ur' ? `ہائبرڈ تجزیہ: [${activeStrategies.join(', ')}]` : `Hybrid Analysis: [${activeStrategies.join(', ')}]` };
    };
    
    // === UI & State Management ===
    const saveState = () => {
        try { localStorage.setItem('chimeraOmegaState_v16_5', JSON.stringify(state)); } 
        catch(e) { console.error("Could not save state to localStorage:", e); }
    };
    
    const switchLobby = (lobbyId) => {
        state.activeLobby = lobbyId;
        lobbyButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.lobby-btn[data-lobby="${lobbyId}"]`).classList.add('active');
        updateUIForLobby();
        speak(state.language === 'ur' ? `${lobbyId} لابی فعال` : `${lobbyId} lobby active.`, true);
    };
    
    const updateUIForLobby = () => {
        const lobbyData = state.lobbies[state.activeLobby];
        const total = lobbyData.wins + lobbyData.losses;
        const typeRate = total > 0 ? ((lobbyData.wins / total) * 100).toFixed(0) : 0;
        
        winRateDisplay.innerHTML = `Type: <span class="type-rate">${typeRate}%</span>`;
        winLossDisplay.innerHTML = `W/L: ${lobbyData.wins}/${lobbyData.losses}`;
        
        updateHistoryLog();
        updateStrategyDashboard();
        resultContainer.innerHTML = '';
        updateSignalTower(null);
    };
    
    const updateHistoryLog = () => {
        const history = state.lobbies[state.activeLobby].history;
        historyLog.innerHTML = '';
        if (history.length === 0) { historyContainer.classList.add('hidden'); return; }
        
        historyContainer.classList.remove('hidden');
        history.slice().reverse().forEach(item => {
            const outcomeTypeClass = item.outcomeType === 'win' ? 'history-outcome-win' : 'history-outcome-loss';
            const outcomeTypeIcon = item.outcomeType === 'win' ? 'fa-check' : 'fa-times';
            const typeText = item.type === 'Big' || item.type === 'بڑا' ? 'Big' : 'Small';
            const typeClass = typeText === 'Big' ? 'text-pink-400' : 'text-cyan-400';
            const strategy = item.strategy || 'N/A';
            
            historyLog.innerHTML += `
                <div class="flex justify-between items-center py-2 border-b border-gray-700/50 text-sm">
                    <span class="text-gray-400">#...${item.period.slice(-4)}</span>
                    <span class="flex items-center gap-2">
                        <span class="text-white font-bold text-lg">${item.num}</span>
                        <span class="${typeClass} font-bold">${typeText}</span>
                        <span class="strategy-tag ${strategy}">${strategy}</span>
                    </span>
                    <i class="fa-solid ${outcomeTypeIcon} ${outcomeTypeClass} text-lg"></i>
                </div>`;
        });
    };
    
    const updateStrategyDashboard = () => {
        const strategyWeights = state.lobbies[state.activeLobby].strategyWeights;
        strategyStats.innerHTML = '';
        
        Object.keys(strategyWeights).forEach(strategy => {
            const log = strategyWeights[strategy].recentAccuracy;
            const successes = log.filter(x => x).length;
            const total = log.length;
            const accuracy = total > 0 ? ((successes / total) * 100).toFixed(0) : 0;
            const weight = strategyWeights[strategy].weight.toFixed(1);
            
            strategyStats.innerHTML += `
                <div class="bg-gray-900 p-2 rounded-lg border border-gray-700/50">
                    <div class="flex justify-between items-center">
                        <span class="strategy-tag ${strategy}">${strategy}</span>
                        <span class="text-lg font-bold ${accuracy >= 50 ? 'text-yellow-400' : 'text-red-400'}">${accuracy}%</span>
                    </div>
                    <div class="h-1.5 bg-gray-700 rounded-full overflow-hidden my-2">
                        <div class="h-full bg-yellow-400" style="width: ${accuracy}%"></div>
                    </div>
                    <div class="text-xs text-gray-500 flex justify-between">
                        <span>W/L: ${successes}/${total - successes}</span>
                        <span>WT: ${weight}</span>
                    </div>
                </div>`;
        });
    };
    
    const updateSignalTower = (prediction) => {
        const confidence = prediction ? prediction.confidence : 0;
        let colorClass = 'lit-red', segmentsToLight = 1;
        
        if (prediction?.strategy === 'COLD') colorClass = 'lit-purple';
        else if (confidence >= 85) { colorClass = 'lit-green'; segmentsToLight = 5; }
        else if (confidence >= 75) { colorClass = 'lit-blue'; segmentsToLight = 4; }
        else if (confidence >= 65) { colorClass = 'lit-blue'; segmentsToLight = 3; }
        else if (confidence >= 50) { colorClass = 'lit-yellow'; segmentsToLight = 2; }
        
        if (!prediction) segmentsToLight = 0;
        
        // Loop from top to bottom
        for (let i = 0; i < 5; i++) {
            const segment = signalTower.children[i];
            segment.className = 'signal-segment w-full h-4 rounded bg-gray-700 border border-gray-600/50';
            // Light up from top
            if (i < segmentsToLight) {
                segment.classList.add(colorClass);
            }
        }
    };
    
    const updateTheme = (theme) => {
        htmlEl.setAttribute('data-theme', theme);
        themeToggle.className = `icon-btn fa-solid fa-${theme === 'dark' ? 'sun' : 'moon'} text-lg`;
        localStorage.setItem('chimeraTheme', theme);
    };
    
    const updateAudioIcon = () => { audioToggle.className = `icon-btn fa-solid fa-volume-${state.isAudioEnabled ? 'high' : 'off'} text-lg`; };
    const updateLanguageIcon = () => { languageToggle.title = state.language === 'en' ? 'Switch to Urdu' : 'Switch to English'; };
    const updateMatchSyncIcon = () => { internetStatus.className = `icon-btn fa-solid fa-wifi ${state.isMatchSync ? 'text-green-500 animate-pulse' : 'text-gray-500'} text-lg`; };
    
    // === Core Event Handlers ===
    const handlePrediction = () => {
        const lobbyData = state.lobbies[state.activeLobby];
        try {
            const period = periodInput.value;
            if (!period || period.length < 4) {
                speak(state.language === 'ur' ? "کم از کم 4 ہندسے کا پیریڈ ڈالیں۔" : "Enter at least 4-digit period.", true);
                playSound('error'); return;
            }
            if (lobbyData.history.some(h => h.period === period)) {
                speak(state.language === 'ur' ? "پیریڈ پہلے سے موجود ہے۔" : "Period already logged.", true);
                playSound('error'); return;
            }
            
            predictBtn.disabled = true;
            resultContainer.innerHTML = `<div class="animate-pulse text-2xl text-cyan-400 font-sans">Analyzing...</div>`;
            speak(state.language === 'ur' ? "میٹالرننگ تجزیہ" : "Meta-Learning Analysis", true);
            
            setTimeout(() => {
                currentPrediction = chimeraOmegaCore(lobbyData.history, lobbyData.strategyWeights, state.language);
                currentPrediction.period = period;
                displayResult(currentPrediction);
                updateSignalTower(currentPrediction);
            }, 1200);
        } catch (error) {
            console.error("CRITICAL ERROR:", error);
            resultContainer.innerHTML = `<div class="text-red-500">Error: ${error.message}. Please reset.</div>`;
            predictBtn.disabled = true;
        }
    };
    
    const displayResult = (prediction) => {
        const { num, type, reason, confidence, strategy } = prediction;
        const typeText = (type === 'Big' || type === 'بڑا') ? 'Big' : 'Small';
        const typeClass = typeText === 'Big' ? 'text-pink-400' : 'text-cyan-400';
        const confidenceClass = confidence >= 70 ? 'text-green-400' : confidence >= 50 ? 'text-blue-400' : 'text-yellow-400';

        const feedbackHTML = state.isMatchSync ? `
            <div id="actualResultInput" class="mt-4"><label class="block text-sm text-gray-400 mb-1 text-center">Enter Actual Winning Number</label><div class="flex flex-col gap-2"><input id="actualNumInput" class="w-20 mx-auto bg-gray-900 border border-cyan-500/30 text-cyan-400 font-sans text-2xl text-center rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-cyan-500" type="number" min="0" max="9" maxlength="1"><button id="submitActualResultBtn" class="bg-green-600 hover:bg-green-700 text-white font-sans py-2 px-4 rounded-lg">Submit & Learn</button></div></div>` : 
            `<div class="mt-4" id="feedbackMatrix"><p class="text-center text-sm text-gray-400 mb-2">Was the TYPE correct?</p><div class="flex gap-2"><button class="flex-1 feedback-btn border border-green-500 text-green-500 py-2 rounded-lg" data-feedback="type-win">WIN</button><button class="flex-1 feedback-btn border border-red-500 text-red-500 py-2 rounded-lg" data-feedback="type-loss">LOSS</button></div></div>`;
        
        resultContainer.innerHTML = `
            <div class="w-full bg-gray-900 border border-cyan-500/30 rounded-xl p-4 animate-fadeIn">
                <h4 class="font-sans text-lg font-bold text-center mb-3 flex items-center justify-center gap-2"><i class="fas fa-lightbulb text-yellow-400"></i> AI PREDICTION <span class="strategy-tag ${strategy}">${strategy}</span></h4>
                <div class="text-center text-sm text-gray-400 mb-3">Confidence: <span class="font-bold ${confidenceClass}">${confidence}%</span></div>
                <div class="bg-gray-800 text-xs text-gray-300 p-3 rounded-lg mb-4 border-l-4 border-cyan-500"><strong class="text-cyan-400">AI THOUGHT:</strong> ${reason}</div>
                <div class="grid grid-cols-2 gap-3 mb-4">
                    <div class="bg-gray-800 p-3 rounded-lg border border-gray-700 text-center"><div class="text-xs text-gray-400 mb-1">NUMBER</div><div class="text-5xl font-bold font-sans text-cyan-400">${num}</div></div>
                    <div class="bg-gray-800 p-3 rounded-lg border border-gray-700 text-center"><div class="text-xs text-gray-400 mb-1">TYPE</div><div class="text-3xl font-bold font-sans ${typeClass}">${typeText}</div></div>
                </div>
                ${feedbackHTML}
            </div>`;
        
        speak(state.language === 'ur' ? `نتیجہ: نمبر ${num}, قسم ${type}` : `Prediction: Number ${num}, Type ${type}`, true);
        playSound('success');
        
        if (state.isMatchSync) {
            const submitBtn = document.getElementById('submitActualResultBtn');
            // Remove existing event listener to prevent memory leaks
            submitBtn.removeEventListener('click', handleActualResultSubmit);
            submitBtn.addEventListener('click', handleActualResultSubmit);
            document.getElementById('actualNumInput').focus();
        } else {
            const feedbackBtns = document.querySelectorAll('.feedback-btn');
            feedbackBtns.forEach(btn => {
                // Remove existing event listener to prevent memory leaks
                btn.removeEventListener('click', handleManualFeedback);
                btn.addEventListener('click', handleManualFeedback);
            });
        }
    };
    
    const handleManualFeedback = (e) => {
        if (!currentPrediction) return;
        const [, result] = e.target.dataset.feedback.split('-');
        currentPrediction.outcomeType = result;
        playSound(result === 'win' ? 'success' : 'error');
        e.target.closest('#feedbackMatrix').querySelectorAll('button').forEach(btn => btn.disabled = true);
        processFeedback(null);
    };
    
    const handleActualResultSubmit = () => {
        const input = document.getElementById('actualNumInput');
        const actualNum = parseInt(input.value);
        if (isNaN(actualNum) || actualNum < 0 || actualNum > 9) {
            speak(state.language === 'ur' ? "غلط نمبر۔" : "Invalid number.", true, 'en');
            playSound('error'); return;
        }
        processFeedback(actualNum);
    };

    function processFeedback(actualNum) {
        const lobbyData = state.lobbies[state.activeLobby];
        let historyEntry = { ...currentPrediction };
        let outcome;

        if (actualNum !== null) {
            const actualType = getBigSmall(actualNum);
            outcome = (historyEntry.type === actualType) ? 'win' : 'loss';
            historyEntry.num = actualNum;
            historyEntry.type = actualType;
        } else {
            outcome = historyEntry.outcomeType;
        }
        historyEntry.outcomeType = outcome;

        if (outcome === 'win') lobbyData.wins++; else lobbyData.losses++;
        
        const usedStrategies = (currentPrediction.reason.match(/\[(.*?)\]/)?.[1] || '').split(', ');
        if (currentPrediction.strategy === 'HYBRID' && usedStrategies.length > 0 && usedStrategies[0] !== '') {
            usedStrategies.forEach(strategy => {
                const trimmedStrategy = strategy.trim();
                if (lobbyData.strategyWeights[trimmedStrategy]) {
                    const accuracyLog = lobbyData.strategyWeights[trimmedStrategy].recentAccuracy;
                    accuracyLog.push(outcome === 'win');
                    if (accuracyLog.length > 20) accuracyLog.shift();
                }
            });
        }
        
        lobbyData.history.push(historyEntry);
        saveState();
        updateUIForLobby();
        speak(state.language === 'ur' ? "فیڈ بیک ریکارڈ ہوا۔" : "Feedback Logged.", true);
        
        setTimeout(() => {
            resultContainer.innerHTML = '';
            updateSignalTower(null);
            predictBtn.disabled = false;
        }, 1200);
    }
    
    const resetSystem = () => {
        const confirmMsg = state.language === 'ur' ? 'یہ تمام لابی کا ڈیٹا مٹا دے گا۔ کیا آپ کو یقین ہے؟' : 'This will RESET ALL LOBBIES. Are you sure?';
        if (confirm(confirmMsg)) {
            Object.keys(state.lobbies).forEach(lobbyId => { state.lobbies[lobbyId] = createInitialLobbyState(); });
            saveState();
            switchLobby('30s');
            speak("All lobbies have been reset.", true);
            playSound('recal');
        }
    };
    
    // === Event Listeners & Initial Load ===
    keypadButtons.forEach(button => {
        button.addEventListener('click', () => {
            initAudioContext();
            playSound('beep');
            const key = button.dataset.key;
            if (key === 'C') periodInput.value = '';
            else if (key === 'B') periodInput.value = periodInput.value.slice(0, -1);
            else periodInput.value += key;
        });
    });
    
    predictBtn.addEventListener('click', handlePrediction);
    themeToggle.addEventListener('click', () => { const newTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; updateTheme(newTheme); });
    audioToggle.addEventListener('click', () => { state.isAudioEnabled = !state.isAudioEnabled; updateAudioIcon(); speak(state.isAudioEnabled ? "Audio on" : "Audio off", true); saveState(); });
    languageToggle.addEventListener('click', () => { state.language = state.language === 'en' ? 'ur' : 'en'; updateLanguageIcon(); speak(state.language === 'en' ? "Language set to English" : "زبان اردو میں تبدیل", true, state.language); saveState(); });
    internetStatus.addEventListener('click', () => { state.isMatchSync = !state.isMatchSync; updateMatchSyncIcon(); const statusText = state.isMatchSync ? "MatchSync Engaged." : "MatchSync Disengaged."; const urduStatusText = state.isMatchSync ? "میچ سنک آن ہے۔" : "میچ سنک آف ہے۔"; speak(state.language === 'ur' ? urduStatusText : statusText, true); saveState(); });
    toggleStrategyDashboard.addEventListener('click', () => { strategyDashboard.classList.toggle('hidden'); });
    resetButton.addEventListener('click', resetSystem);
    lobbyButtons.forEach(btn => btn.addEventListener('click', () => switchLobby(btn.dataset.lobby)));
    
    const loadState = () => {
        const savedTheme = localStorage.getItem('chimeraTheme') || 'dark';
        updateTheme(savedTheme);
        const savedState = localStorage.getItem('chimeraOmegaState_v16_5');
        if (savedState) {
            try {
                const parsed = JSON.parse(savedState);
                state.isAudioEnabled = parsed.isAudioEnabled !== undefined ? parsed.isAudioEnabled : true;
                state.isMatchSync = parsed.isMatchSync || false;
                state.language = parsed.language || 'en';
                state.activeLobby = parsed.activeLobby || '30s';
                
                if (parsed.lobbies) {
                    Object.keys(state.lobbies).forEach(key => {
                        if (parsed.lobbies[key]) {
                            state.lobbies[key] = {
                                ...createInitialLobbyState(),
                                ...parsed.lobbies[key],
                                strategyWeights: {
                                    ...createInitialLobbyState().strategyWeights,
                                    ...(parsed.lobbies[key].strategyWeights || {})
                                }
                            };
                        }
                    });
                }
            } catch(e) { console.error("Failed to parse saved state, resetting.", e); localStorage.removeItem('chimeraOmegaState_v16_5'); }
        }
        populateVoiceList();
        updateAudioIcon();
        updateLanguageIcon();
        updateMatchSyncIcon();
        switchLobby(state.activeLobby);
    };
    
    loadState();
});
</script>
</body>
</html>
