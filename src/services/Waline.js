import Waline from '@waline/client';
const waline = Waline({
    el: '#waline',
    serverURL: 'https://eddiehe-favicons-waline.vercel.app',
    dark: 'auto',
    lang: 'en',
});
export default waline
