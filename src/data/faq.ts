export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What hours are covered?",
    answer:
      "Coverage hours are agreed before the engagement starts. Most of our clients choose US business hours (typically 9am–6pm in their time zone), but we can discuss extended or split-shift arrangements depending on your needs. Hours are confirmed in writing as part of your service agreement.",
  },
  {
    question: "Which channels do you support?",
    answer:
      "We currently support email and live chat as primary channels, with social inbox management available as an add-on. Phone support is available from $250/month. Additional channels can be discussed. Everything is confirmed upfront so there are no surprises.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "For Managed Support packages, onboarding typically takes one to two weeks from the time we agree on scope. That time is used to document your procedures, set up access, and brief the agent. We will not start delivering support until we are confident in the setup.",
  },
  {
    question: "How is pricing calculated?",
    answer:
      "Our packages are based on staffed delivery hours per month — the time an agent spends actively handling your support. Hours do not equal a guaranteed number of tickets resolved, since resolution time varies by enquiry type. Volume assumptions are discussed and noted in your contract.",
  },
  {
    question: "How do you protect customer data?",
    answer:
      "We use secure, access-controlled tools and follow documented data-handling procedures. Agents only access the systems they need for your account. We are happy to discuss our data handling practices in detail during the discovery call, and we document responsibilities clearly in each agreement.",
  },
  {
    question: "Can I hire an agent directly after working with Avora Support?",
    answer:
      "Direct hire of an agent introduced through Avora Support during an active engagement would be subject to a placement fee. This is set out clearly in our terms of service before any engagement begins.",
  },
  {
    question: "What happens if an agent is absent?",
    answer:
      "For Managed Support packages, we maintain coverage arrangements so that a planned or unplanned absence does not leave your inbox unattended. We will inform you of any coverage changes and document how continuity is maintained. For dedicated staffing arrangements, backup coverage options are agreed at the outset.",
  },
  {
    question: "How do we communicate during the engagement?",
    answer:
      "We agree on a communication channel before the engagement starts — typically email, with a weekly check-in as standard. Monthly performance reports are included in Growth Care and above. You will have a named point of contact throughout.",
  },
];
