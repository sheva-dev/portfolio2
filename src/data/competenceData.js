import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

const competenceData = [
    {
        id: '1',
        icon: faUserShield,
        color: '#fff',
        size: '3x',
        title: 'Secure',
        des: 'Secure coding is essential on modern web development'
    },
    {
        id: '2',
        icon: faTachometerAlt,
        color: '#fff',
        size: '3x',
        title: 'Fast',
        des: 'Fast loading time, lags and bugs free applications, are my highest priority.'
    },
    {
        id: '3',
        icon: faMobileAlt,
        color: '#fff',
        size: '3x',
        title: 'Responsive',
        des: 'My layouts work on any device, regardless of screen size'
    },
    {
        id: '4',
        icon: faUserCheck,
        color: '#fff',
        size: '3x',
        title: 'User friendly',
        des: 'Powerful preference for easy use, intuitive UX/UI.'
    },
];

export default competenceData;
