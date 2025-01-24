import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { BsCopy } from "react-icons/bs";
import { SiTradingview } from "react-icons/si";
import { title } from "process";

export const NavItems = [{
    title: 'About',
    href: '/about'
},
{
    title:'Why Monily',
    href: '/whymonily'
},
{
    title:'Faq',
    href: '/faq'
},
{
    title: 'Contact Us',
    href: '/contact'
}
];

export const FaeturesArray = [
    {
        title: 'Trade Desk',
        description: 'Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform',
        icon: HiOutlineArrowsRightLeft 

    },
    {
        title: 'Trading Volume',
        description: 'Our team of experts has traded over $100 billion in crypto since our launch',
        icon: BsCopy
    },
    {
        title: 'Instant Trading',
        description: 'Trade cryptocurrencies at the click of a button, no need for a brokerage account',
        icon: SiTradingview
    }
]

export const accordionData = [
    {
        question: "What cryptocurrencies do you support ?",
        id: 1,
        answer:
            "We support a wide range of cryptocurrencies, including Bitcoin and USDT",
    },
    {
        question: "What countries do you support for cashout?",
        id: 2,
        answer:
            "We support cashout to bank accounts and mobile wallet in a number of countries including Nigeria, Ghana, South Africa, Kenya and Rwanda",
    },
    {
        question: "How long does it take to convert crypto to cash ?",
        id: 3,
        answer:
            "Our platform can convert your crypto to cash in 100 seconds or less",
    },
    {
        question: "Do you hold assets during the conversion process ?",
        id: 4,
        answer:
            "No, we don't hold your assets. We directly convert your crypto into your chosen bank account.",
    },
    {
        question: "Are your fees transparent ?",
        id: 5,
        answer:
            "Yes, our pricing model is simple and transparent, with no hidden fees or charges.",
    },
    {
        question: "Is your platform compliant with regulations ?",
        id: 6,
        answer:
            "Yes, our platform is fully compliant with all relevant regulations, giving you peace of mind when using our service.",
    },
];
