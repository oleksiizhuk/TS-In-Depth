//  сделать обьектный тип

type Props = 'home' | 'about' | 'contacts'; // keys
type PropType = { title: string; url: string }; // value of key

const pages: Record<Props, PropType> = {
    home: { title: 'Home Page ', url: 'https://example.com' },
    about: { title: 'Home Page ', url: 'https://example.com' },
    contacts: { title: 'Home Page ', url: 'https://example.com' },
};

