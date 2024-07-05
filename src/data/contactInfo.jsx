import LinkedIn, { GitHub, GMail, Telegram, Resume } from "../components/Icons";
import ResumeLink from "../assets/resume.pdf"
const contactInfo = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/alan-johnson-2a1982250/",
        icon: <LinkedIn />,
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/kylo1330",
        icon: <GitHub />,
    },
    {
        id: 3,
        name: "Mail",
        link: "mailto:alanjohnsoncoc@gmail.com",
        icon: <GMail />,
    },

    {
        id: 4,
        name: "Telegram",
        link: "https://t.me/Ky_lo_ren",
        icon: <Telegram />,
    },
    {
        id: 5,
        name: "Resume",
        link: ResumeLink,
        icon: <Resume />,
        download: true
    }
];

export default contactInfo;