import {
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiReact,
    SiTypescript,
    SiAxios,
} from "react-icons/si";
import { TbBrandNextjs } from 'react-icons/tb'

const React = <SiReact />
const JavaScript = <SiJavascript />
const TypeScript = <SiTypescript />
const Css = <SiCss3 />
const Html = <SiHtml5 />
const Axios = <SiAxios />
const Next = <TbBrandNextjs />



const allIcons = [
    {
        title: 'react',
        icon: React
    },
    {
        title: 'js',
        icon: JavaScript
    },
    {
        title: 'ts',
        icon: TypeScript
    },
    {
        title: 'css',
        icon: Css
    },
    {
        title: 'html',
        icon: Html
    },
    {
        title: 'axios',
        icon: Axios
    },
    {
        title: 'next',
        icon: Next
    },
]


export const Icons = ({ icons }: { icons: string[] }) => {

    let filterdIcon: React.ReactNode[] = []

    allIcons.forEach(({ title, icon }) => {
        if (icons.includes(title))
            filterdIcon.push(icon)
    })

    return (
        <>
            {filterdIcon}
        </>)
}