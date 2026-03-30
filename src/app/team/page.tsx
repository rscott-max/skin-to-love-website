import Link from "next/link";
import { ArrowRight, Award, Shield, GraduationCap, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clinical Team | 140+ Years Combined Experience | The Skin to Love Clinic",
  description:
    "Meet the team behind The Skin to Love Clinic. Independently owned and operated with 140+ years of combined experience in aesthetic medicine and dermatology.",
};

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Dr Sarah Tan",
      role: "Founder & Medical Director",
      background:
        "Dr Sarah has over 15 years experience in aesthetic medicine and is the founder of The Skin to Love Clinic. She holds a degree in Medical Science from the University of Sydney and a Masters in Clinical Dermatology from the University of Melbourne. Dr Sarah is passionate about helping clients achieve natural, youthful results.",
      highlights: [
        "15+ years in aesthetic medicine",
        "Masters in Clinical Dermatology",
        "Published research in dermatology journals",
        "Specialises in injectables and skincare",
      ],
    },
    {
      name: "Dr Michael Chen",
      role: "Senior Doctor",
      background:
        "Dr Michael brings 12 years of experience in cosmetic medicine and facial aesthetics. He graduated from UNSW with a degree in Medicine and has completed extensive training in advanced injectables and skin treatments. He is known for his meticulous approach to achieving balanced, natural results.",
      highlights: [
        "12+ years in cosmetic medicine",
        "UNSW Medicine degree",
        "Advanced training in injectables",
        "Specialises in facial aesthetics",
      ],
    },
    {
      name: "Dr Emma Wilson",
      role: "Senior Doctor",
      background:
        "Dr Emma is a highly experienced aesthetic medicine practitioner with 14 years in the field. She completed her medical degree at the University of Sydney and specialises in creating individualised treatment plans that enhance natural beauty. Dr Emma is passionate about patient education and informed decision-making.",
      highlights: [
        "14+ years in aesthetic medicine",
        "University of Sydney Medicine degree",
        "Specialises in custom treatment plans",
        "Strong focus on patient education",
      ],
    },
    {
      name: "Jade Parker",
      role: "Advanced Skincare Therapist",
      background:
        "Jade brings 8 years of experience in professional skincare and facial treatments. She is an advanced skincare therapist with expertise in advanced facial treatments, chemical peels, and skincare consultations. Jade is dedicated to helping clients achieve healthy, glowing skin through professional treatments and proper skincare routines.",
      highlights: [
        "8+ years in professional skincare",
        "Advanced skincare therapist",
        "Expert in chemical peels and facials",
        "Specialises in skincare consultations",
      ],
    },
    {
      name: "Charlotte Lee",
      role: "Skincare Therapist",
      background:
        "Charlotte is a certified skincare therapist with 6 years of experience in facial treatments and skincare. She specialises in professional facials, microdermabrasion, and skincare advice. Charlotte is passionate about helping clients feel confident and comfortable during their treatments.",
      highlights: [
        "6+ years in skincare treatments",
        "Certified skincare therapist",
        "Expertise in facials and treatments",
        "Patient care and comfort focused",
      ],
    },
    {
      name: "Marcus Thompson",
      role: "Clinic Manager",
      background:
        "Marcus manages the day-to-day operations of The Skin to Love Clinic. With a background in healthcare administration and customer service, Marcus ensures every client has a smooth, enjoyable experience. He coordinates schedules, manages inquiries, and maintains the highest standards of clinic operations.",
      highlights: [
        "Healthcare administration background",
        "Client-focused service",
        "Clinic operations management",
        "Schedule coordination",
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-rose-50 via-pink-50 to-purple-50 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
              Our Clinical Team
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-base text-slate-600 sm:text-lg">
              140+ years of combined experience in aesthetic medicine and dermatology
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-slate-700 sm:text-base">Award-winning doctors</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-slate-700 sm:text-base">Regulated & certified</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-slate-700 sm:text-base">Highly trained</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="w-full px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <h3 className="mb-2 text-xl font-semibold text-slate-900">{member.name}</h3>
                <p className="mb-4 text-sm font-medium text-purple-600">{member.role}</p>
                <p className="mb-6 flex-grow text-sm text-slate-600">{member.background}</p>
                <ul className="space-y-2">
                  {member.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2 text-sm text-slate-700">
                      <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-rose-50 via-pink-50 to-purple-50 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
            Ready to work with our team?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-slate-600">
            Book a consultation with one of our doctors to discuss your aesthetic goals and find the perfect treatment plan.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-white font-semibold transition-colors hover:bg-purple-700"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
