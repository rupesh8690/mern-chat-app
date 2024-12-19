
    const emojis = [
        "🐶", "🐱", "🐭", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁",  // Animals
        "🌸", "🌺", "🌻", "🌷", "🌹", "🍎", "🍌", "🍉", "🍍", "🥥",  // Plants & Fruits
        "🍕", "🍔", "🍣", "🍜", "🍩", "🍪", "🍿", "🍷", "🍺", "🥂",  // Food & Drinks
        "🚗", "🚕", "🚌", "🚲", "🛵", "🚀", "✈️", "🚁", "⛵", "🏎",  // Vehicles & Transport
        "🎨", "🎸", "🎤", "🎧", "🎮", "🎬", "🏀", "⚽", "🏆", "🏅",  // Arts & Sports
        "🔑", "🧰", "🛠", "🧳", "💡"  // Objects & Tools
    ];
const getRandomEmoji = () => {
    return emojis[Math.floor(Math.random()*emojis.length)];
}

export default getRandomEmoji;
