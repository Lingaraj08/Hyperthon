# Hyperthon
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CryptoVerse Gaming</title>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>

    <style>
        :root {
            --neon-blue: #00f3ff;
            --neon-purple: #b537f2;
            --neon-green: #3fff00;
        }

        body {
            font-family: 'Rajdhani', sans-serif;
            background: #0a0b1e;
            color: #ffffff;
        }

        .orbitron {
            font-family: 'Orbitron', sans-serif;
        }

        .neon-border {
            box-shadow: 0 0 10px var(--neon-blue),
                        inset 0 0 5px var(--neon-blue);
        }

        .asset-card {
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
        }

        .asset-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 20px var(--neon-purple);
        }

        .glow-text {
            text-shadow: 0 0 10px var(--neon-blue);
        }

        #particles-js {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        .loading-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid transparent;
            border-top-color: var(--neon-blue);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .modal {
            backdrop-filter: blur(8px);
            background: rgba(0, 0, 0, 0.8);
        }
    </style>
</head>
<body>
    <div id="particles-js"></div>

    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-opacity-30 backdrop-blur-md bg-black">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <h1 class="orbitron text-2xl text-white glow-text">CryptoVerse</h1>
                <div class="hidden md:flex space-x-6">
                    <a href="#" class="text-white hover:text-[#00f3ff] transition-colors">Home</a>
                    <a href="#inventory" class="text-white hover:text-[#00f3ff] transition-colors">Inventory</a>
                    <a href="#marketplace" class="text-white hover:text-[#00f3ff] transition-colors">Marketplace</a>
                </div>
                <button class="md:hidden text-white">
                    <i class="bi bi-list text-2xl"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center pt-20">
        <div class="container mx-auto px-4 text-center">
            <h1 class="orbitron text-4xl md:text-6xl mb-6 glow-text">Welcome to the Future of Gaming</h1>
            <p class="text-xl mb-8">Trade, Collect, and Play with Blockchain-Powered Assets</p>
            <button class="bg-gradient-to-r from-[#00f3ff] to-[#b537f2] px-8 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-opacity neon-border">
                Play Now
            </button>
        </div>
    </section>

    <!-- Inventory Section -->
    <section id="inventory" class="py-20">
        <div class="container mx-auto px-4">
            <h2 class="orbitron text-3xl mb-8 glow-text">Your Arsenal</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Asset Cards -->
                <div class="asset-card rounded-lg p-4">
                    <img src="https://source.unsplash.com/random/400x300?cyberpunk" alt="Asset" class="w-full h-48 object-cover rounded-lg mb-4">
                    <h3 class="text-xl mb-2">Plasma Rifle X-99</h3>
                    <div class="flex justify-between items-center">
                        <span class="text-[#3fff00]">0.05 ETH</span>
                        <div class="space-x-2">
                            <button class="px-3 py-1 bg-[#00f3ff] rounded hover:opacity-90">Sell</button>
                            <button class="px-3 py-1 bg-[#b537f2] rounded hover:opacity-90">Trade</button>
                        </div>
                    </div>
                </div>
                <!-- More asset cards... -->
            </div>
        </div>
    </section>

    <!-- Marketplace Section -->
    <section id="marketplace" class="py-20">
        <div class="container mx-auto px-4">
            <h2 class="orbitron text-3xl mb-8 glow-text">Marketplace</h2>
            <div class="flex flex-wrap gap-4 mb-6">
                <select class="bg-black border border-[#00f3ff] rounded px-4 py-2">
                    <option>All Types</option>
                    <option>Weapons</option>
                    <option>Skins</option>
                    <option>Power-ups</option>
                </select>
                <select class="bg-black border border-[#00f3ff] rounded px-4 py-2">
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <!-- Marketplace Items -->
            </div>
        </div>
    </section>

    <!-- Transaction Modal -->
    <div id="transactionModal" class="modal fixed inset-0 flex items-center justify-center hidden">
        <div class="bg-black bg-opacity-50 p-8 rounded-lg text-center">
            <div class="loading-spinner mx-auto mb-4"></div>
            <p class="text-xl">Transaction in Progress</p>
        </div>
    </div>

    <script>
        // Initialize particles.js
        particlesJS('particles-js', {
            particles: {
                number: { value: 80 },
                color: { value: '#00f3ff' },
                shape: { type: 'circle' },
                opacity: { value: 0.5 },
                size: { value: 3 },
                line_linked: {
                    enable: true,
                    color: '#00f3ff',
                    opacity: 0.4
                },
                move: {
                    enable: true,
                    speed: 2
                }
            }
        });

        // Generate marketplace items
        const marketplace = document.querySelector('#marketplace .grid');
        const items = [
            { name: 'Cyber Blade', price: '0.08 ETH', image: 'https://source.unsplash.com/random/400x300?blade' },
            { name: 'Neon Armor', price: '0.12 ETH', image: 'https://source.unsplash.com/random/400x300?armor' },
            { name: 'Power Shield', price: '0.05 ETH', image: 'https://source.unsplash.com/random/400x300?shield' },
            { name: 'Energy Core', price: '0.15 ETH', image: 'https://source.unsplash.com/random/400x300?energy' }
        ];

        items.forEach(item => {
            marketplace.innerHTML += `
                <div class="asset-card rounded-lg p-4">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover rounded-lg mb-4">
                    <h3 class="text-xl mb-2">${item.name}</h3>
                    <div class="flex justify-between items-center">
                        <span class="text-[#3fff00]">${item.price}</span>
                        <button onclick="showTransaction()" class="px-4 py-2 bg-[#00f3ff] rounded hover:opacity-90">Buy Now</button>
                    </div>
                </div>
            `;
        });

        // Transaction modal functionality
        function showTransaction() {
            const modal = document.getElementById('transactionModal');
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 3000);
        }
    </script>
</body>
