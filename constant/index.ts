import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { BsCopy } from "react-icons/bs";
import { SiTradingview } from "react-icons/si";
import { title } from "process";

export const NavItems = [{
    title: 'About',
    href: 'about'
},
{
    title:'Why Monily',
    href: 'why-monily'
},
{
    title:'FAQ',
    href: 'faq'
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