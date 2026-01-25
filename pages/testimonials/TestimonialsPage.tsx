import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Quote, Linkedin } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Frank",
      title: "CEO",
      company: "Forge",
      photo: "/client logos/forge_logo.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/franksondors/",
      recommendation: "Driven, focused and has goals in life. That's something most people in sales don't have, hence David is a core asset to Whatagraph. Promoted 3x during his short tenure, which speaks volumes. Strong in sales ops, hiring people, mentoring peers, and owns a KR on mapping the big six agencies. You won't regret hiring him. Nuff said!",
      category: "Leadership",
      date: "May 2022"
    },
    {
      id: 2,
      name: "Vismantas",
      title: "Cybersecurity & Threat Intelligence",
      company: "Nord Security B2B",
      photo: "/client logos/nord_security_logo.png",
      linkedinUrl: "https://www.linkedin.com/in/vismantasbalcius/",
      recommendation: "David is one of the most dedicated professionals I've ever worked with. His ability to listen, analytical mindset, and clear communication make him an incredibly good salesperson. He worked his way up from an SDR to a team lead and then a Client Partner in one year. Moreover, he is not only an incredibly good salesperson but a true leader and trusted colleague as well. David is heavily involved in the hiring, training, and onboarding of new PDEs and Client Partners.",
      category: "Leadership",
      date: "April 2022"
    },
    {
      id: 3,
      name: "Janis",
      title: "Global Visibility | Employer Branding",
      company: "Aviation Recruitment",
      photo: "/client logos/glassique_logo.png",
      linkedinUrl: "https://www.linkedin.com/in/janisjeko/",
      recommendation: "Deividas was my mentor in Whatagraph for 3 years in multiple teams as we progressed through the sales engine and has not let me down once. He has truly been someone to look up to and gain motivation, knowledge, and advice at any point in the sales process. I copied his sales tactics and \"know-how\" style before I managed to develop my own and his teachings gave me strong foundations of SaaS sales process. He is someone who can be seen as a true leader who not only manages to look at the numbers and make sure the results are met, but also to the wellbeing of the team and each particular contributor within it.",
      category: "Career Mentorship",
      date: "April 2024"
    },
    {
      id: 4,
      name: "Augustas",
      title: "VP of New Sales",
      company: "NordSecurity",
      photo: "/client logos/nord_security_logo.png",
      linkedinUrl: "https://www.linkedin.com/in/augustas-ausra/",
      recommendation: "I had an amazing time working together with Deividas, seeing his journey through SDR, then team lead then Account Executive, and learning things fast was incredible. A marketing background is a great addition to Deividas skillsets, he's great with any sort of tech stack which is another great skill of his, not to talk about the ability to sell to any type of the business. Highly recommended to any senior sales-type roles!",
      category: "Leadership",
      date: "April 2022"
    },
    {
      id: 5,
      name: "Eddy",
      title: "Partner",
      company: "TPLC",
      photo: "/saleshouse-logo.png",
      linkedinUrl: "https://www.linkedin.com/in/eddy-pasiusis/",
      recommendation: "A true sales ninja. Skill that sets David apart from the others - ability to create his own system and follow it meticulously. Long working hours is not something that he is running from as well. It could be an early call with the client from Australia or late evening meeting with prospect from Canada, doesn't matter. David will gladly take into consideration any feedback and adjust based on the remarks, that's a skill that is rare these days - ability to receive feedback with an open mind.",
      category: "Work Ethic",
      date: "May 2022"
    },
    {
      id: 6,
      name: "Peter",
      title: "Marketingspecialist & Partner",
      company: "Advenue",
      photo: "/saleshouse-logo.png",
      linkedinUrl: "https://www.linkedin.com/in/peterseestedtweikop/",
      recommendation: "David was very helpful when I needed to figure out what dashboard solution me and my company needed. He was very patient, always had an useful answer and good at explaining the uses of Whatagraph in a nice manner. I was very delighted to work with David.",
      category: "Consulting",
      date: "August 2023"
    },
    {
      id: 7,
      name: "Greg",
      title: "Senior Leader | Digital Marketing & Programmatic Advertising",
      company: "Various",
      photo: "/saleshouse-logo.png",
      linkedinUrl: "https://www.linkedin.com/in/gregjrogers/",
      recommendation: "David is super attentive and knows the ins and outs of his product. He was always available to answer our questions and hop on calls. He's a true problem solver. We appreciated his commitment to our relationship, as well as his sense of humor. We would work with him again in any capacity!",
      category: "Consulting",
      date: "August 2023"
    },
    {
      id: 8,
      name: "Olivija",
      title: "Account Manager",
      company: "Oxylabs.io",
      photo: "/saleshouse-logo.png",
      linkedinUrl: "https://www.linkedin.com/in/olivija-stankovic/",
      recommendation: "I worked with David in the same unit for more than a year and I can say he is a great colleague and a person all around. Throughout my experience working alongside he stayed a top performer and pushed beyond expectations. He is also always the first to jump in if newer members of the team run into issues. David is able to think outside the box, thus he finds best solutions to major issues in shortest time. Always strived to do more and improve in every step. I strongly believe David would be an asset to any team.",
      category: "Leadership",
      date: "May 2022"
    },
    {
      id: 9,
      name: "Daniel",
      title: "AI Orchestration | Sales",
      company: "nexos.ai",
      photo: "/saleshouse-logo.png",
      linkedinUrl: "https://www.linkedin.com/in/daniel-aganson/",
      recommendation: "It was a great pleasure to work with someone like Deividas on my team both as his direct manager and later as a colleague on the account executive team. While Deividas had no previous experience in sales, he was a natural. He has a terrific personality for the job. He makes clients feel at ease by being able to identify their potential pain points and helping them find solutions for those. Deividas works exceptionally well by himself, or with others. Deividas was always a strong pillar to his teammates that they could rely on for advice or support.",
      category: "Career Mentorship",
      date: "April 2022"
    },
    {
      id: 10,
      name: "Lukas",
      title: "Account Management",
      company: "IPRoyal",
      photo: "/saleshouse-logo.png",
      linkedinUrl: "https://www.linkedin.com/in/lukas-turlajus/",
      recommendation: "When I first started at Whatagraph I was completely new not only to the company but it was my first going at this type of position. Back then David was my Team Lead and I can strongly say that my experience with him was amazing. A great leader who shows up and leads by example. Helped me and others grow not only as professionals but as people. Not only that but David always kept pushing and got promoted to a Client Partner position where he is smashing his targets every single month and still remains a go-to guy for professional and for personal support!",
      category: "Career Mentorship",
      date: "April 2022"
    },
    {
      id: 11,
      name: "Benas",
      title: "Lead TA Partner",
      company: "Nord Security",
      photo: "/client logos/nord_security_logo.png",
      linkedinUrl: "https://www.linkedin.com/in/benas-zibolis/",
      recommendation: "Top tier SaaS Account Executive. He worked his way up from SDR level all the way up to a top-performing AE in less than 1.5 years. Enough said, really.",
      category: "Work Ethic",
      date: "April 2022"
    },
    {
      id: 12,
      name: "Vėja",
      title: "Head of Business Development",
      company: "eany.io",
      photo: "/saleshouse-logo.png",
      linkedinUrl: "https://www.linkedin.com/in/veja-doveike/",
      recommendation: "Deividas is a very hard-working employee, passionate about his work, and always a go-to colleague for any advice. As my Team Lead, he helped me with onboarding and was available for questions, helped to maintain a positive attitude toward work, and complete my tasks. As an employee, Deividas is always exceeding expectations, doing his best not only on his personal and professional matters but on the company's as well.",
      category: "Career Mentorship",
      date: "April 2022"
    },
    {
      id: 13,
      name: "Rapolas",
      title: "GTM Lead | Advisor | Kitesurfer",
      company: "Various",
      photo: "/saleshouse-logo.png",
      linkedinUrl: "https://www.linkedin.com/in/rapolas-bernotas/",
      recommendation: "David is a great sales professional: tenacious and with a keen eye for detail. He has ample experience as an SDR, SDR team lead and Account Executive - the full package, really. I was especially impressed with David's active listening skills - he truly listens and not just waits for his turn to speak, which is an absolutely key skill for anyone not only for sales!",
      category: "Work Ethic",
      date: "April 2022"
    }
  ];


  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>Testimonials - What Sales Leaders Say | Sales House</title>
        <meta name="description" content="Read recommendations from sales leaders who've worked with David Varan. Career mentorship, tool implementation, and consulting testimonials from real professionals." />
      </Helmet>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <Breadcrumb />
      </div>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-slate-50 to-[#FEFEFE] border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
            <Quote className="w-8 h-8 text-indigo-600" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Sales Leaders Say
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            LinkedIn recommendations from professionals who've worked with me on career development,
            tool implementation, and sales operations consulting.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl hover:border-indigo-200 transition-all"
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900">{testimonial.name}</h3>
                  <p className="text-sm text-slate-600">{testimonial.title}</p>
                  <p className="text-sm text-indigo-600 font-medium">{testimonial.company}</p>
                </div>

                {/* Quote */}
                <div className="relative">
                  <p className="text-slate-700 leading-relaxed italic">
                    "{testimonial.recommendation}"
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end mt-6 pt-6 border-t border-slate-100">
                  <span className="text-sm text-slate-500">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {testimonials.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">No testimonials found.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Want to add your recommendation?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            If we've worked together, I'd appreciate your feedback on LinkedIn.
          </p>
          <a
            href="https://www.linkedin.com/in/davidvaran/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0077b5] hover:bg-[#006399] text-white font-bold rounded-lg transition-all shadow-lg"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
