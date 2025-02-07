import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Star, Bell } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';
import { Link } from 'react-router-dom';

const newsletters = [
  {
    title: "February 2025 Newsletter",
    date: "February 1, 2025",
    highlights: [
      "Winter Indoor League Higlights and Results",
      "2025 Camps & Clinics Details",
      "New Training Facility Updates",
      "Coach of the Month: Coach Mike",
      "Pro Game Day: NY City FC vs Inter Miami",
      "Player Spotlights: Player of The Month",
    
    ],
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673b8a9115ee066c37b605ad.png",
    content: `
      Dear UST FC Academy Family,
    The past two weeks have been nothing short of incredible! Our teams have been making waves, racking up awards at recent local tournaments and showcasing the hard work and dedication that defines UST. A huge congratulations to all our players, coaches, and families who continue to represent UST with passion and excellence!
    
    Upcoming Events & Opportunities
    
    Spring Break Camp – April 14th-17th
    
    Looking to stay sharp over the break? Our Spring Break Camp is the perfect opportunity to refine skills, enhance game IQ, and train with top-tier coaches. Spots are limited, so be sure to sign up soon!
    UST Intense Summer Camps Series – Registration is Live!
    Summer is around the corner, and our UST Summer Camps Series are officially open for registration! These camps provide elite training, competitive gameplay, and a fun environment for players to elevate their game. Don’t miss out—secure your spot today!
    
    Camp 1: June 30 - July 3
    
    Camp 2: July 28 - July 31
    
    Camp 3: August 4 - August 7
    
    Camp 4: August 25 - August 28
    
    Time: 9am - 12pm
    
    venue: Burr Winkle Park, Harvest Ln, Commack NY 11725
    
    2025 UST Residential Camp

    Date: July 19th - 26th
    
    ⚽ NYCFC vs. Inter Miami – Exclusive UST Ticket Offer!
    We’re thrilled to announce that UST Academy members have the exclusive opportunity to purchase discounted tickets for the highly anticipated NYCFC vs. Inter Miami match! This is a fantastic chance to watch top-level soccer while enjoying special UST pricing. Stay tuned for more details on how to claim your tickets!
    
    Date: September 2025
    Time: TBD
    
    Thank you for being a part of the UST family—we can’t wait for all that’s ahead!

    `
  },
  {

    title: "March 2024 Newsletter",
    date: "March 1, 2024",
    highlights: [
      "Spring Season Registration Now Open",
      "Elite Training Program Launch",
      "Player Spotlight: Sarah Johnson",
      "Upcoming Spring Break Camp Details",
      
    ],
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png",
    content: `
      Winter Indoor League Success
      Congratulations to all teams on a successful Winter Indoor League season. Special mention to our U14 boys and U16 girls teams for reaching the finals!

      College Signing Day
      Proud moment for UST Academy as five of our players signed with Division 1 colleges. We wish them continued success in their academic and athletic careers.

      Facility Updates
      Our new indoor training facility is now complete with state-of-the-art equipment and technology. Book your training session today!

      Coach Spotlight
      Coach Mike Thompson has been named Coach of the Month for his outstanding work with our youth development program.
    `
  }
];

export default function Newsletter() {
  return (
    <>
      <Helmet>
        <title>Newsletter - UST Soccer Academy</title>
        <meta name="description" content="Stay updated with UST Soccer Academy's latest news, events, and announcements through our newsletter." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">UST Academy Newsletter</h1>
          <p className="text-xl text-gray-600">
            Stay connected with the latest updates from UST Soccer Academy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Newsletter Archive */}
          <div className="md:col-span-2 space-y-8">
            {newsletters.map((newsletter, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={newsletter.image}
                  alt={newsletter.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">{newsletter.title}</h2>
                    <span className="text-gray-500">{newsletter.date}</span>
                  </div>
                  <div className="mb-6">
                    <h3 className="font-semibold text-[#8ED204] mb-2">Highlights</h3>
                    <ul className="space-y-2">
                      {newsletter.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <Star className="h-4 w-4 text-[#8ED204] mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="prose max-w-none">
                    {newsletter.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <div className="bg-black rounded-lg p-6">
              <NewsletterSignup />
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/events" className="flex items-center text-gray-600 hover:text-[#8ED204]">
                    <Calendar className="h-4 w-4 mr-2" />
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://ustsoccer.demosphere-secure.com/_registration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-[#8ED204]"
                  >
                    <Bell className="h-4 w-4 mr-2" />
                    Register Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
