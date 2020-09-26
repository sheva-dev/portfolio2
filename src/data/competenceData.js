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
        title: 'SECURE',
        des: 'Modern web development has many challenges, and of those security is very important.'
    },
    {
        id: '2',
        icon: faTachometerAlt,
        color: '#fff',
        size: '3x',
        title: 'FAST',
        des: 'Fast load times and lag free interaction, my highest priority.'
    },
    {
        id: '3',
        icon: faMobileAlt,
        color: '#fff',
        size: '3x',
        title: 'RESPONSIVE',
        des: 'My layouts will work on any device, big or small.'
    },
    {
        id: '4',
        icon: faUserCheck,
        color: '#fff',
        size: '3x',
        title: 'USER FRIENDLY',
        des: 'Morbi mattis ullamcorper velit. Praesent adipiscing.'
    },
];

export default competenceData;
