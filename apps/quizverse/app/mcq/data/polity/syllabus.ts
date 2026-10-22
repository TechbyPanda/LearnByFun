import { chapterBuilder } from "../build";
import type { Syllabus } from "../types";

// Indian Polity, in the chapter order of M. Laxmikanth's "Indian Polity".
export const politySyllabus = [
  {
    title: "Historical Background",
    subtopics: [
      "Company Rule (1773–1858)",
      "Crown Rule (1858–1947)",
      "Independence & First Governments",
    ],
  },
  {
    title: "Making of the Constitution",
    subtopics: ["Constituent Assembly", "Committees & Drafting", "Enactment & Commencement"],
  },
  {
    title: "Salient Features & Sources",
    subtopics: ["Salient Features", "Sources of the Constitution", "Schedules"],
  },
  {
    title: "Preamble",
    subtopics: ["Text & Key Words", "Amendability & Significance"],
  },
  {
    title: "Union, Territory & Citizenship",
    subtopics: ["Union & its Territory", "Reorganisation of States", "Citizenship"],
  },
  {
    title: "Fundamental Rights",
    subtopics: [
      "Features & Definition of State",
      "Right to Equality",
      "Right to Freedom",
      "Right against Exploitation",
      "Freedom of Religion",
      "Cultural & Educational Rights",
      "Right to Constitutional Remedies",
    ],
  },
  {
    title: "Directive Principles of State Policy",
    subtopics: [
      "Features & Sanction",
      "Criticism & Utility",
      "Classification & Articles",
      "Amendments & New Directives",
      "Conflict with Fundamental Rights",
      "Implementation & Directives outside Part IV",
    ],
  },
  {
    title: "Fundamental Duties",
    subtopics: ["List & Features", "Significance & Criticism"],
  },
  {
    title: "Amendment of the Constitution",
    subtopics: ["Procedure (Article 368)", "Types of Amendments", "Important Amendments"],
  },
  {
    title: "Basic Structure",
    subtopics: ["Evolution of the Doctrine", "Elements of the Basic Structure"],
  },
  {
    title: "Parliamentary & Federal System",
    subtopics: ["Parliamentary System", "Federal Features"],
  },
  {
    title: "Centre–State Relations",
    subtopics: [
      "Legislative Relations",
      "Administrative Relations",
      "Financial Relations",
      "Commissions on Centre–State Relations",
    ],
  },
  {
    title: "Inter-State Relations",
    subtopics: [
      "Inter-State Water Disputes (Article 262)",
      "Inter-State Council (Article 263)",
      "Articles 262 & 263 Compared",
      "Zonal Councils",
    ],
  },
  {
    title: "Emergency Provisions",
    subtopics: [
      "National Emergency (Article 352)",
      "President's Rule (Article 356)",
      "Financial Emergency (Article 360)",
    ],
  },
  {
    title: "Union Executive",
    subtopics: [
      "President",
      "Vice-President",
      "Prime Minister & Council of Ministers",
      "Attorney General",
    ],
  },
  {
    title: "Parliament",
    subtopics: [
      "Composition",
      "Membership",
      "Disqualification",
      "Presiding Officers",
      "Devices of Proceedings",
      "Parliamentary Motions",
      "Legislative Procedure",
      "Lapsing of Bills",
      "Joint Sitting",
      "Budget & Funds",
      "Special Powers of Rajya Sabha",
      "Privileges",
    ],
  },
  {
    title: "Parliamentary Committees",
    subtopics: ["Financial Committees", "Other Standing & Ad Hoc Committees"],
  },
  {
    title: "Judiciary",
    subtopics: [
      "Appointment & Removal of Judges",
      "Supreme Court",
      "High Courts",
      "Judicial Review & Activism",
      "Subordinate Courts & Tribunals",
    ],
  },
  {
    title: "State Government",
    subtopics: ["Governor", "Chief Minister & Council of Ministers", "State Legislature"],
  },
  {
    title: "Local Government",
    subtopics: ["Panchayati Raj", "Urban Local Bodies"],
  },
  {
    title: "Union Territories & Special Areas",
    subtopics: ["Union Territories", "Scheduled & Tribal Areas", "Special Provisions for Some States"],
  },
  {
    title: "Constitutional Bodies",
    subtopics: [
      "Election Commission",
      "UPSC & State PSCs",
      "Finance Commission",
      "Comptroller & Auditor General",
      "National Commissions for SCs, STs & BCs",
      "GST Council",
    ],
  },
  {
    title: "Non-Constitutional Bodies",
    subtopics: ["NITI Aayog", "Human Rights Commissions", "Information Commissions"],
  },
  {
    title: "Lokpal & Lokayukta",
    subtopics: [
      "Background & Evolution",
      "Nature & Legal Status",
      "Composition & Appointment",
      "Jurisdiction",
      "Inquiry, Investigation & Other Agencies",
      "Lokayukta & Comparison",
    ],
  },
  {
    title: "Elections",
    subtopics: ["Electoral System", "Anti-Defection Law", "Political Parties", "Electoral Reforms"],
  },
  {
    title: "Governance",
    subtopics: [
      "Right to Information",
      "CVC, CBI & Anti-Corruption Laws",
      "Citizen's Charter, Social Audit & Service Delivery",
      "E-Governance, Aadhaar & Data Protection",
      "Statutory, Regulatory & Quasi-Judicial Bodies",
      "Civil Services & Administrative Reforms",
      "NGOs, SHGs & Civil Society",
    ],
  },
] as const satisfies Syllabus;

export const polityChapter = chapterBuilder("Polity", politySyllabus);
