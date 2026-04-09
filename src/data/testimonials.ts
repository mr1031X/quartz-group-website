export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jeffrey A Baum",
    title: "Director, Information Technology",
    company: "Aware Products, LLC",
    quote: "I have used Quartz for a couple years now. The team they have assembled proves to be a priceless asset every time I use them. I have never hesitated to make the call to solicit their help, thoughts and in many cases their ideas.",
    image: "/images/testimonial-1.jpg"
  },
  {
    id: "2",
    name: "Tom Keough",
    title: "Controller",
    company: "Thortex",
    quote: "Outstanding result! Quartz delivered our implementation of Epicor 9 on time and on budget. We opted for their Quick Launch program as we were so busy wrestling with the challenges of a growing business we needed our chosen partner to carry out all the heavy lifting for us. Each milestone step was delivered on or ahead of schedule.",
    image: "/images/testimonial-2.jpg"
  },
  {
    id: "3",
    name: "Gene Horlander",
    title: "CIO Chief Information Officer",
    company: "Techniks (NAP Gladu, Riverside Tool, RKO Saw, Intooligence, Techniks and Parlec)",
    quote: "We are very happy with the Epicor Product Configurator module, which replaced our legacy, highly-customized solution. We could not have been as successful without the support of Don Luoto and the Quartz team.",
    image: "/images/testimonial-3.jpg"
  },
  {
    id: "4",
    name: "Kathy Ward, CPA",
    title: "Chief Financial Officer",
    company: "Tru-Flex Metal Hose",
    quote: "Our previous consulting partners could not meet our ever-growing challenges as our business grew. Quartz Group quite literally came to our rescue with little notice and multiple resources who could dive into our project, delivering results on-time and on-budget well exceeding our expectations.",
    image: "/images/testimonial-4.jpg"
  }
];

export const stats = [
  { value: "99%", label: "Inventory Accuracy" },
  { value: "50%", label: "Less Search Time" },
  { value: "24h", label: "Setup Time" },
  { value: "<12", label: "Months ROI" }
];
