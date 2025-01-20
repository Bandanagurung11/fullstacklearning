import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="py-16 space-y-12">
      <div className="flex gap-2 items-center justify-center">
        <p className="text-3xl">
          <span className="bg-[#E8EBF3] p-1 text-[#2563EB]">Frequently</span>{" "}
          Asked{" "}
          <span className="bg-[#EEE8F3] text-[#9333EA] p-1"> Questions</span>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            fill="#f8312f"
            d="M13.037 20.863c0 1.302 1.145 2.36 2.555 2.36s2.556-1.058 2.556-2.37V19.15c0-.111.073-.209.18-.242C21.676 17.85 24 14.919 24 11.562v-1.254c0-4.239-3.69-7.773-8.227-7.861c-2.28-.05-4.432.744-6.065 2.212c-1.622 1.469-2.523 3.447-2.523 5.552c0 1.311 1.155 2.369 2.566 2.369s2.555-1.058 2.555-2.36c0-.822.35-1.596.986-2.173a3.4 3.4 0 0 1 2.375-.872c1.78.04 3.223 1.45 3.223 3.143v1.244c0 1.468-1.124 2.731-2.683 2.996c-1.834.313-3.17 1.791-3.17 3.514zM15.5 30a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
          />
        </svg>
      </div>

      <Accordion type="multiple" className="p-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" />
                  <path d="M9 9c0-3.5 5.5-3.5 5.5 0c0 2.5-2.5 2-2.5 5m0 4.01l.01-.011" />
                </g>
              </svg>
              <p className="text-lg font-bold"> What does Fenzora offer?</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-base opacity-60">
            Fenzora offers a comprehensive e-commerce solution that includes a
            fully customizable store builder, complete sales management, and a
            range of advanced features to help you grow your business.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className=" flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" />
                  <path d="M9 9c0-3.5 5.5-3.5 5.5 0c0 2.5-2.5 2-2.5 5m0 4.01l.01-.011" />
                </g>
              </svg>
              <p className="text-lg font-bold">
                Can I customize the chosen template?
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-base opacity-60">
            Yes, we offer redesign services to tailor the chosen template
            according to your specific requirements and preferences, ensuring a
            unique look for your online store.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" />
                  <path d="M9 9c0-3.5 5.5-3.5 5.5 0c0 2.5-2.5 2-2.5 5m0 4.01l.01-.011" />
                </g>
              </svg>
              <p className="text-lg font-bold">
                How does the customization proce ss work?
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-base opacity-60">
            We start by understanding your needs. Our team then designs and
            develops an e-commerce solution that aligns perfectly with your
            business goals and user expectations.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" />
                  <path d="M9 9c0-3.5 5.5-3.5 5.5 0c0 2.5-2.5 2-2.5 5m0 4.01l.01-.011" />
                </g>
              </svg>
              <p className="text-lg font-bold">
                Can I request specific features for my e-commerce platform?
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-base opacity-60">
            YAbsolutely! We prioritize your requirements. Whether it's advanced
            functionalities, unique design elements, or specific integrations,
            we tailor the solution to match your vision.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" />
                  <path d="M9 9c0-3.5 5.5-3.5 5.5 0c0 2.5-2.5 2-2.5 5m0 4.01l.01-.011" />
                </g>
              </svg>
              <p className="text-lg font-bold">
                How long does it take to develop a custom e-commerce solution?
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-base opacity-60">
            Development timelines vary based on project scope and complexity.
            Normally it takes 4-6 weeks to complete the development process.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" />
                  <path d="M9 9c0-3.5 5.5-3.5 5.5 0c0 2.5-2.5 2-2.5 5m0 4.01l.01-.011" />
                </g>
              </svg>
              <p className="text-lg font-bold">
                What features are included in your e-commerce solutions?
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-base opacity-60">
            Our solutions include custom designs, social media integration, SEO
            optimization, Google Analytics integration, payment gateway
            integration, detailed sales reports, and mobile-friendly designs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" />
                  <path d="M9 9c0-3.5 5.5-3.5 5.5 0c0 2.5-2.5 2-2.5 5m0 4.01l.01-.011" />
                </g>
              </svg>
              <p className="text-lg font-bold">
                Is there support available after the integration?
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-base opacity-60">
            Yes, we provide ongoing support to ensure your e-commerce platform
            runs smoothly. Our team is available to assist with any issues or
            updates you may need.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" />
                  <path d="M9 9c0-3.5 5.5-3.5 5.5 0c0 2.5-2.5 2-2.5 5m0 4.01l.01-.011" />
                </g>
              </svg>
              <p className="text-lg font-bold">
                What is the cost of your e-commerce solutions?
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-base opacity-60">
            The cost varies based on the template selected and the extent of
            customizations required. Please contact us for a detailed quote
            tailored to your business needs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" />
                  <path d="M9 9c0-3.5 5.5-3.5 5.5 0c0 2.5-2.5 2-2.5 5m0 4.01l.01-.011" />
                </g>
              </svg>
              <p className="text-xl font-bold">
                How do I get started with Fenzora?
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-base opacity-60">
            Begin by contacting us with your project requirements. Our team will
            guide you through the process, from initial consultation to the
            successful launch of your customized e-commerce solution.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
