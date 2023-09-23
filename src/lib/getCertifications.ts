import { cloudinary } from "./getImages";

type Certification = {
    title: string;
    courseType: string;
    description?: string;
    place: string;
    date: string;
    certificateLink?: string;
    certificateAvailable: boolean;
    certificateImage: string;
}

export const certifications: Certification[] = [
    {
        title: "Android",
        courseType: "Android Training (CCIC)",
        place: "Mansoura University",
        date: "07/2019 - 10/2019",
        certificateAvailable: true,
        certificateImage: "./certification/Consulting of Computers and Information Center - Java & Android.png",
    },
    {
        title: "Flutter",
        courseType: "Internship",
        place: "Mega Trust Company",
        date: "02/2022 - 03/2022",
        certificateAvailable: true,
        certificateImage: "./certification/MegaTrust-Flutter.JPG",
    },
    {
        title: "HTML & CSS",
        courseType: "Mahara-Tech",
        place: "ITI",
        date: "05/2022 - 06/2022",
        certificateAvailable: true,
        certificateImage: "./certification/Mahara Tech -  HTML & CSS.png",
        certificateLink: "https://maharatech.gov.eg/mod/customcert/view.php?id=1404&downloadown=1"
    },
    {
        title: "Database",
        courseType: "Mahara-Tech",
        place: "ITI",
        date: "05/2022 - 06/2022",
        certificateAvailable: true,
        certificateImage: "./certification/Mahara Tech - Database.png",
        certificateLink: "https://maharatech.gov.eg/mod/customcert/view.php?id=7655&downloadown=1"
    },
    {
        title: "JavaScript",
        courseType: "Mahara-Tech",
        place: "ITI",
        date: "05/2022 - 06/2022",
        certificateAvailable: true,
        certificateImage: "./certification/Mahara Tech - Javascript.png",
        certificateLink: "https://maharatech.gov.eg/mod/customcert/view.php?id=7660&downloadown=1"
    },
    {
        title: "TypeScript",
        courseType: "Mahara-Tech",
        place: "ITI",
        date: "06/2022 - 07/2022",
        certificateAvailable: true,
        certificateImage: "./certification/Mahara Tech - Typescript.png",
        certificateLink: "https://maharatech.gov.eg/mod/customcert/view.php?id=8663&downloadown=1"
    },
    {
        title: "Front-End & Cross-Platform Intensive Code Camp",
        courseType: "ITI scholarship",
        place: "Information Technology Institute",
        date: "04/2022 - 08/2022",
        certificateAvailable: true,
        certificateImage: "./certification/ITI.JPG",
    },
    {
        title: "JavaScript (Basic)",
        courseType: "HackerRank",
        place: "Online",
        date: "08/2022",
        certificateAvailable: true,
        certificateImage: `${cloudinary}/v1695462880/Certifications/HackerRank/javascript_basic_certificate_qpffng.png`,
        certificateLink: "https://www.hackerrank.com/certificates/150b23da9a18"
    },
    {
        title: "React (Basic)",
        courseType: "HackerRank",
        place: "Online",
        date: "08/2022",
        certificateAvailable: true,
        certificateImage: `${cloudinary}/v1695462963/Certifications/HackerRank/react_basic_certificate_akykwl.png`,
        certificateLink: "https://www.hackerrank.com/certificates/240ca2891d46"
    },
    {
        title: "Problem Solving (Basic)",
        courseType: "HackerRank",
        place: "Online",
        date: "08/2022",
        certificateAvailable: true,
        certificateImage: `${cloudinary}/v1695462873/Certifications/HackerRank/problem_solving_basic_certificate_nggpyh.png`,
        certificateLink: "https://www.hackerrank.com/certificates/a3fb40835128"
    },
    {
        title: "JavaScript (Intermediate)",
        courseType: "HackerRank",
        place: "Online",
        date: "09/2022",
        certificateAvailable: true,
        certificateImage: `${cloudinary}/v1695462867/Certifications/HackerRank/javascript_intermediate_certificate_hyduus.png`,
        certificateLink: "https://www.hackerrank.com/certificates/a8db3bcdddae"
    },
    {
        title: "NodeJs (Intermediate)",
        courseType: "HackerRank",
        place: "Online",
        date: "09/2023",
        certificateAvailable: true,
        certificateImage: `${cloudinary}/v1695462878/Certifications/HackerRank/nodejs_intermediate_certificate_qypwwn.png`,
        certificateLink: "https://www.hackerrank.com/certificates/e87ef0597dd9"
    },
].reverse();
