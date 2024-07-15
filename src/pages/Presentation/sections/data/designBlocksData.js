/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import courseImg from "../../../../assets/images/course.png";
import letterImg from "../../../../assets/images/gade-bg.png";
import free1 from "../../../../assets/images/new-free1.png";
import free2 from "../../../../assets/images/new-free2.png";
import search from "../../../../assets/images/search.png";
import frebee from "../../../../assets/images/20free.png";
import prop from "../../../../assets/images/read-prop.png";
import diy from "../../../../assets/images/DIY.png";

const getClients =
  "https://medium.com/@gbengabiyi/how-to-make-clients-read-your-proposals-on-upwork-bd031e212f16";

export default [
  {
    title: "My Freelancing Courses",
    description: "This course addresses Lack Of Clients as a Freelancers and how to get Clients. ",
    items: [
      {
        image: `${courseImg}`,
        name: "Buy FREELANCER CLIENT MAGNET 2.0",
        route: "https://gbengabiyi.selar.co/clientmagnet?currency=NGN",
      },
    ],
  },
  {
    title: "Join My Newsletter",
    description: "Get freelancing tips straight to your inbox",
    items: [
      {
        image: `${letterImg}`,
        name: "Sign up for my newsletter",
        route: "https://unique-trailblazer-5940.ck.page/217efd7c2b",
      },
    ],
  },
  {
    title: "I am NEW to FREELANCING",
    description: "If you are new to Freenlancing then this Package is for you",
    items: [
      {
        image: `${free1}`,
        name: "How to be a Freelancer",
        route: "https://medium.com/@gbengabiyi/how-to-be-a-freelancer-6440d2f4813c",
      },
      {
        image: `${free2}`,
        name: "Introduction to Freelancing (VIDEO)",
        route: "https://www.youtube.com/watch?v=8rWSbHyIOI4",
      },
    ],
  },
  {
    title: "Free Freelancing Resources",
    description: "How to search for Freelancing GIGS, Free Proposal templates and more...",
    items: [
      {
        image: `${search}`,
        name: "How to SEARCH for FREELANCING GIGS and REMOTE JOBS like a Pro",
        route: "https://www.youtube.com/watch?v=B4gdZeBgbA8",
      },
      {
        image: `${frebee}`,
        name: "20 Free Proposal templates",
        route: "https://unique-trailblazer-5940.ck.page/131f73aba9",
      },
      {
        image: `${prop}`,
        name: "How To Make CLIENTS Read Your Proposals on UPWORK",
        route: `${getClients}`,
      },
      {
        image: `${diy}`,
        name: "Do It Yourself - FREELANCING STEP BY STEP GUIDE (FREE VIDEOS + EBOOKS)",
        route: "https://unique-trailblazer-5940.ck.page/7f43f63fc8",
      },
    ],
  },
];
