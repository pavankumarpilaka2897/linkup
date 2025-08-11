import appointment_img from './appointment_img.svg'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'

import pilot from './pilot.png'
import coun from './counselling.png'
import ali from './creditcard.png'
import aman from './aman-removebg-preview.png'
import ankur from './ankur_warikoo-removebg-preview.png'
import anubhav from './anubav_dubey-removebg-preview.png'
import arsh from './arshgoyal-removebg-preview.png'
import ayejude from './ayejude-removebg-preview.png'
import bvs_ganesh from './bvs_ganesh-removebg-preview.png'
import kowsik from './kowsiki_maridi-removebg-preview.png'
import lovebabbar from './love_babbar-removebg-preview.png'
import na_anveshana from './na_anveshana-removebg-preview.png'
import nancy_tyagi from './nancy_tyagi-removebg-preview.png'
import prasad_tech from './prasad-removebg-preview.png'
import rachit from './rachit_hirani-removebg-preview.png'
import ritesh from './ritesh_agarwal-removebg-preview.png'
import savi from './savi-removebg-preview.png'
import striver from './striver-removebg-preview.png'
import vivek_gupta from './striver-removebg-preview.png'
import travel from './travel.svg'
import tech from './tech.svg'
import finance from './finance.svg'
import fashion from './fashion.svg'
import company from './company.svg'
import vehicle from './vehicles.svg'
import sandhya from './sandhyanigam.png'
import chirag from './Chiragsharma.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Travel',
        image: travel
    },
    {
        speciality: 'Tech',
        image: tech
    },
    {
        speciality: 'Finance',
        image: finance
    },
    {
        speciality: 'Fashion',
        image: fashion
    },
    {
        speciality: 'EnterPrenuership',
        image: company
    },
    {
        speciality: 'AutoMobiles',
        image: vehicle
    },
]

export const Influencers = [
  {
    _id: "Inf1",
    name: 'Ali Hajiani',
    image: ali,
    speciality: 'Finance',
    degree: 'Thatcreditcardguy Instagram Channel ',
    experience: '4 Years',
    about: 'Ali Hajiani popularly known as Thatcreditcardguy is a famous instagram influencer who makes people aware of all the benefits of different creditcards.',
    fees: 2500,
    Instagram:'https://www.instagram.com/thatcreditcardguy/',
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: "Inf2",
    name: 'Surajkumar',
    image: pilot,
    speciality: 'Education',
    degree: 'Owner of pilot.suraj Instagram Handle',
    experience: '4 Years',
    about: 'Surajkumar is a Commerical pilot who loves to share his experience and his pilot journey with his followers',
    fees: 4000,
    Instagram:"https://www.instagram.com/pilot.suraj/",
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: "Inf3",
    name: 'Akhil Rama Raju Uppalapati',
    image: coun,
    speciality: 'Counselling',
    Instagram:"https://www.instagram.com/collegedost_telugu/",
    degree: 'Owner of Collegedost_telugu Instagram Handle',
    experience: '4 Years',
    about: 'Akhil Rama Raju is a Instagram Influencer who helps the students from AP and Telengana to secure educational seats in good colleges through counselling.',
    fees: 1500,
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },

    {
      _id: "Inf4",
      name: 'Aman Dhatrawall',
      image: aman,
      speciality: 'Tech',
      degree: 'Founder of Apna Colleg',
      experience: '4 Years',
      about: 'Aman Dhatrawall is a tech enthusiast with a passion for bringing new technologies to the forefront. With years of experience in the tech industry, Aman has helped many businesses innovate and grow.',
      fees: 2500,
      Instagram:"https://www.instagram.com/amandhattarwal/",
      address: {
        line1: '17th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
    {
      _id: 'Inf5',
      name: 'Ankur Warikoo',
      image: ankur,
      speciality: 'Finance',
      degree: 'Founder of Warikoo Youtube Channel',
      experience: '3 Years',
      about: 'Ankur Warikoo is a financial expert who specializes in helping individuals and businesses maximize their financial potential. With years of experience, Ankur offers valuable insights into personal finance and investment strategies.',
      fees: 3000,
      youtube:"https://www.youtube.com/@warikoo",
      address: {
        line1: '27th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
    {
      _id: 'Inf6',
      name: 'Anubhav Dubey',
      image: anubhav,
      speciality: 'EnterPrenuership',
      degree: 'Founder of Chai Sutta bar',
      experience: '1 Year',
      about: 'Anubhav Dubey is an inspiring entrepreneur with a passion for building successful startups. His journey into the world of entrepreneurship has been driven by a desire to create solutions that make a real impact.',
      fees: 3000,
      address: {
        line1: '37th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
   {
      _id: 'Inf7',
      name: 'Chirag Sharma',
      image: chirag,
      speciality: 'Fashion',
      degree: 'Instagram Influencer in Fashion',
      experience: '2 Years',
      about: 'Chirag Sharma is a popular Indian Instagram fashion influencer and model known for his stylish dressing sense, charming looks, and engaging short videos on Instagram Reels. He has gained a significant following of around 200k on Instagram by regularly sharing trendy fashion content and modeling photos from his base in Delhi.',
      fees: 4000,
      Instagram:"https://www.instagram.com/themanicstyle/",
      address: {
        line1: '47th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
    {
      _id: 'Inf8',
      name: 'Kowsik Maridi',
      image: kowsik,
      speciality: 'Finance',
      degree: 'Founder of Boss Wallah Youtube Channel',
      experience: '4 Years',
      about: 'Kowsik Maridi is a financial strategist who specializes in personal finance and investment planning. With years of expertise, he empowers his clients to take control of their financial future.',
      fees: 2500,
      youtube:"https://www.youtube.com/@KowshikMaridi",
      address: {
        line1: '17th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
    {
      _id: 'Inf9',
      name: 'Sandhya Nigam',
      image: sandhya,
      speciality: 'Travel',
      degree: 'Founder of Travelwithsandhya Instagram Channel',
      experience: '1 Year',
      about: 'Sandhya Nigam is a well-known travel influencer on Instagram, recognized for sharing her travel experiences and inspiring journeys with around 87k followers. She is a media professional and traveler who posts engaging travel content from various destinations, motivating her audience with the tagline "Suffer nahi, SAFAR karo!"',
      fees: 3000,
      Instagram:"https://www.instagram.com/travelwithsandhyaa/",
      address: {
        line1: '37th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
    {
      _id: 'Inf10',
      name: 'Nancy Tyagi',
      image: nancy_tyagi,
      speciality: 'Fashion',
      degree: 'Fashion Blogger & Influencer on Instagram',
      experience: '2 Years',
      about: 'Nancy Tyagi is a fashion influencer who blends style with comfort. She’s known for her unique fashion choices and helps her followers stay updated with the latest trends in the fashion world.',
      fees: 4000,
      address: {
        line1: '47th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
    {
      _id: 'Inf11',
      name: 'DevaraKonda Varaprasad',
      image: prasad_tech,
      speciality: 'AutoMobiles',
      degree: 'Founder of PrasadAutoMobiles',
      experience: '4 Years',
      youtube:"https://www.youtube.com/@Prasadtechintelugu",
      about: 'DevaraKonda Varaprasad is an automotive expert who is passionate about the latest car technologies. With deep industry knowledge, he offers valuable insights into automobile trends and future innovations.',
      fees: 5000,
      address: {
        line1: '57th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
    {
      _id: 'Inf12',
      name: 'Rachit Hirani',
      image: rachit,
      speciality: 'AutoMobiles',
      degree: 'Founder of MotorOctane Youtube Channel',
      experience: '4 Years',
      about: 'Rachit Hirani is a young and successful entrepreneur with a flair for innovation. He has founded multiple startups and provides expert guidance to aspiring entrepreneurs looking to build their own businesses.',
      fees: 500,
      youtube:"https://www.youtube.com/@motoroctane",
      address: {
        line1: '57th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
    {
      _id: 'Inf13',
      name: 'Ritesh Agarwal',
      image: ritesh,
      speciality: 'EnterPrenuership',
      degree: 'Founder of OYO Rooms',
      experience: '4 Years',
      about: 'Ritesh Agarwal is an inspiring entrepreneur who specializes in launching disruptive startups. He mentors new founders and helps them turn their ideas into successful businesses.',
      fees: 5000,
      Instagram:"https://www.instagram.com/riteshagar/",
      address: {
        line1: '17th Cross, Richmond',
        line2: 'Circle, Ring Road, London'

      }
    },
    {
      _id: 'Inf14',
      name: 'Savi And Vid',
      image: savi,
      speciality: 'Travel',
      degree: 'Travel Vloggers and Founders of SaviAndVid YouTube Channel',
      experience: '3 Years',
      about: 'Savi and Vid are travel influencers who share their adventures and travel tips with a global audience. They specialize in luxury travel and hidden gems around the world.',
      fees: 600,
      address: {
        line1: '27th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
    {
      _id: 'Inf15',
      name: 'Raj Vikram Aditya',
      image: striver,
      speciality: 'Tech',
      degree: 'SWE-3 ate Google India',
      experience: '1 Year',
      about: 'Raj Vikram Aditya is a tech enthusiast who focuses on creating content around innovative technologies and future trends. He is passionate about helping people understand the latest in tech.',
      fees: 3000,
      youtube:"https://www.youtube.com/@takeUforward",
      address: {
        line1: '37th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    }
  ];
  