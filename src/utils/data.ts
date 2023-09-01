import { BsFillTelephoneFill } from "react-icons/bs";

import { MdEmail } from "react-icons/md";

import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

//  * @description:
export const data: any = {
    contacts: [
        {
            id: 1,
            value: "baondforwork@gmail.com",
            icon: MdEmail,
        },
        {
            id: 2,
            value: "0838631706",
            icon: BsFillTelephoneFill,
        },
    ],
    others: [
        {
            id: 11,
            value: "FaceBook",
            icon: AiFillFacebook,
        },
        {
            id: 12,
            value: "LinkeDin",
            icon: AiFillLinkedin,
        },
        {
            id: 13,
            value: "Github",
            icon: AiFillGithub,
        },
        {
            id: 14,
            value: "My Club",
            icon: AiFillFacebook,
        },
    ],
};
