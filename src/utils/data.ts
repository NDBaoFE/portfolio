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
            id: 1,
            value: "FaceBook",
            icon: AiFillFacebook,
        },
        {
            id: 2,
            value: "LinkeDin",
            icon: AiFillLinkedin,
        },
        {
            id: 3,
            value: "Github",
            icon: AiFillGithub,
        },
        {
            id: 4,
            value: "My Club",
            icon: AiFillFacebook,
        },
    ],
};
