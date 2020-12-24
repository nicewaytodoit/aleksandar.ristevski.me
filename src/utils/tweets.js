const loadTweeterEmbed = (callback) => {
    console.log('many times');
    const existingScript = document.getElementById('TweeterPlatform');
    if (existingScript) {
        existingScript.parentNode.removeChild(existingScript);
    }

    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.id = 'TweeterPlatform';
    script.charSet = 'utf-8';
    document.body.appendChild(script);
    script.onload = () => {
        if (callback) callback();
    };

    if (existingScript && callback) callback();
};
export default loadTweeterEmbed;
