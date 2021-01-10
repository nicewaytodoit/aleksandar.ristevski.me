const TWITTER_TAG = 'TwitterPlatform';

const loadTwitterEmbed = (callback) => {
    const existingScript = document.getElementById(TWITTER_TAG);
    if (existingScript) {
        existingScript.parentNode.removeChild(existingScript);
    }
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.id = TWITTER_TAG;
    script.charSet = 'utf-8';
    document.body.appendChild(script);
    script.onload = () => {
        if (callback) callback();
    };

    if (existingScript && callback) callback();
};
export default loadTwitterEmbed;
