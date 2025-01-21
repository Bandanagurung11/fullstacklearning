import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function HelpSection() {
  return (
    <div className="py-12 lg:py-24 space-y-12">
      <div className="flex gap-2 items-center justify-center">
        <p className="text-lg lg:text-3xl">
          Let us help{" "}
          <span className="bg-[#EEE8F3] p-1 text-[#9333EA]">your business</span>{" "}
          <span className="bg-[#EBEFFF] p-1 text-[#3D61FF]">go online</span>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 128 128"
        >
          <path
            fill="#ca2c31"
            d="m3.77 71.73l16.34-16.1l27.82-4.93l-2.75 14.56L7.57 76.82l-2.43-1.05z"
          />
          <path
            fill="#a02422"
            d="M22.94 59.76L5.2 75.88l13.05 6.36l19.81-10.11v-4.77l4.05-10.92zm41.98 28.39l-8.57 3.72l-8.09 17.15s7.12 15.77 7.44 15.77s4.37.32 4.37.32l14.4-16.1l3.64-27.5z"
          />
          <path
            fill="#ca2c31"
            d="M56.5 100.84s4.77-.97 8.17-2.59s7.6-4.04 7.6-4.04l-1.54 13.43l-15.05 17.13s-.59-.73-3.09-6.17c-1.99-4.34-2.68-5.89-2.68-5.89z"
          />
          <path
            fill="#f7d74d"
            d="M31.58 80.66s-5.74-.48-12.03 7.47c-5.74 7.26-8.43 19.08-9.47 22.12s-3.53 3.66-2.7 5.05s4.42 1.31 8.85.76s8.23-1.94 8.23-1.94s-.19.48-.83 1.52c-.23.37-1.03.9-.97 1.45c.14 1.31 11.36 1.34 20.32-7.88c9.68-9.95 4.98-18.11 4.98-18.11z"
          />
          <path
            fill="#fbf0b4"
            d="M33.31 85.29s-6.19.33-11.31 8.28s-7.5 17.16-7.01 17.78c.48.62 10.02-2.83 12.31-2.14c1.57.48.76 2.07 1.18 2.49c.35.35 4.49.94 11.19-6.32c6.71-7.26 5.12-17.46 5.12-17.46z"
          />
          <path
            fill="#858585"
            d="M36.35 74.44s-3.11 2.77-4.22 4.36s-1.11 1.73-1.04 2.21s1.22 5.75 6.01 10.37c5.88 5.67 11.13 6.43 11.89 6.43s5.81-5.67 5.81-5.67z"
          />
          <path
            fill="#437687"
            d="M50.1 91.24s5.04 3.31 13.49.47c11.55-3.88 20.02-12.56 30.51-23.52c10.12-10.58 18.61-23.71 18.61-23.71l-5.95-19.93z"
          />
          <path
            fill="#3f545f"
            d="m67.99 80.33l1.39-4.32l3.48.49s2.65 1.25 4.6 2.16s4.46 1.6 4.46 1.6l-4.95 4.18s-2.7-1.02-4.67-1.88c-2.22-.97-4.31-2.23-4.31-2.23"
          />
          <path
            fill="#8dafbf"
            d="M84.32 16.14s-9.62 5.58-23.41 18.63c-12.43 11.76-21.64 22.4-23.87 31.45c-1.86 7.58-.87 12.18 3.36 17.15c4.47 5.26 9.71 7.87 9.71 7.87s3.94.06 20.38-12.59C91 62.86 107.43 36.42 107.43 36.42z"
          />
          <path
            fill="#d83f22"
            d="M104.18 41.84s-8.37-3.57-14.34-11.9c-5.93-8.27-5.46-13.86-5.46-13.86s4.96-3.89 16.11-8.34c7.5-2.99 17.71-4.52 21.07-2.03s-2.3 14.98-2.3 14.98l-10.31 19.96z"
          />
          <path
            fill="#6896a5"
            d="M68.17 80.4s-7.23-3.69-11.83-8.94c-8.7-9.91-10.5-20.79-10.5-20.79l4.37-5.13S51.3 57.1 60.63 67.09c6.08 6.51 12.43 9.49 12.43 9.49s-1.27 1.07-2.63 2.11c-.87.67-2.26 1.71-2.26 1.71"
          />
          <path
            fill="#a02422"
            d="M112.71 44.48s4.34-5.23 8.45-17.02c5.74-16.44.74-21.42.74-21.42s-1.69 7.82-7.56 18.69c-4.71 8.71-10.41 17-10.41 17s3.14 1.41 4.84 1.9c2.14.62 3.94.85 3.94.85"
          />
          <path
            fill="#b3e1ee"
            d="M39.81 69.66c1.3 1.24 3.27-.06 4.56-3.1c1.3-3.04 1.28-4.74.28-5.46c-1.24-.9-3.32 1.07-4.23 2.82c-1 1.94-1.59 4.8-.61 5.74m45.14-49.53s-7.61 5.47-15.73 12.91c-7.45 6.83-12.39 12.17-13.07 13.41c-.72 1.33-.73 3.21-.17 4.17s1.8 1.46 2.93.62c1.13-.85 9.18-9.75 16.45-16.11c6.65-5.82 11.78-9.51 11.78-9.51s2.08-3.68 1.74-4.52c-.34-.85-3.93-.97-3.93-.97"
          />
          <path
            fill="#ed6a65"
            d="M84.95 20.13s5.62-4.31 11.74-7.34c5.69-2.82 11.35-5.17 12.37-3.13c.97 1.94-5.37 4.58-10.95 8.14s-10.95 7.81-10.95 7.81s-.82-1.5-1.35-2.89a24 24 0 0 1-.86-2.59"
          />
          <path
            fill="#e1e1e1"
            d="M89.59 39.25c-5.57-5.13-13.32-3.75-17.14.81c-3.92 4.7-3.63 11.88 1 16.2c4.21 3.92 12.04 4.81 16.76-.69c4.2-4.88 3.94-12.13-.62-16.32"
          />
          <path
            fill="#3f545f"
            d="M75.33 41.87c-3.31 3.25-3.13 9.69.81 12.63c3.44 2.57 8.32 2.44 11.38-.69s3.06-8.82.19-11.76c-3.3-3.37-8.59-3.9-12.38-.18"
          />
          <path
            fill="#a02524"
            d="M50 76.89s6.19-6.28 6.87-5.6s.59 4.49-2.37 8.73C51.53 84.26 45 91.81 39.83 96.9c-5.1 5.01-12.29 10.74-12.97 10.64c-.53-.08-2.68-1.15-3.54-2.19c-.84-1.03 1.67-5.9 2.68-7.51c1.02-1.61 24-20.95 24-20.95"
          />
          <path
            fill="#ca2c31"
            d="M21.23 101.85c-.08 1.44 2.12 3.54 2.12 3.54L56.87 71.3s-1.57-1.77-6.19 1.1c-4.66 2.9-8.74 6.38-14.76 12.21c-8.39 8.14-14.61 15.8-14.69 17.24"
          />
          <path
            fill="#fff"
            d="M19.06 36.95c-1.11 1.11-1.16 2.89.08 3.91c1.1.91 2.89.32 3.56-.5s.59-2.6-.3-3.48c-.89-.89-2.66-.6-3.34.07"
          />
          <path
            fill="#fff"
            d="M41.02 35.65c-.84.93-.57 2.31.21 2.82s1.95.46 2.52-.24c.51-.63.57-1.89-.21-2.67c-.68-.67-1.98-.51-2.52.09"
            opacity="0.5"
          />
          <path
            fill="#fff"
            d="M55.55 11.89s1.22-3.48 1.94-3.52c.73-.04 1.78 3.48 1.78 3.48s3.61.04 3.85.57c.31.68-2.31 2.96-2.31 2.96s.85 3.4.45 3.81c-.45.45-3.56-1.34-3.56-1.34s-3.2 2.23-3.89 1.62c-.6-.53.65-4.13.65-4.13s-3-2.19-2.84-2.8c.23-.86 3.93-.65 3.93-.65m41.46 83.44c1.21.67 2.73.29 3.29-1c.51-1.15-.43-2.52-1.28-2.89s-2.34.12-2.88 1.09c-.53.96.14 2.4.87 2.8m17.18-29.49c-.69-1.07-2.18-1.42-3.15-.56c-.94.84-.71 2.16-.18 2.83s1.95.92 2.81.37s.94-2 .52-2.64"
          />
        </svg>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 p-4">
        <div className="space-y-6">
          <p className="text-lg">
            We're here to help and answer any question you might have. We look
            forward to hearing from you! Please fill out the form, or use the
            contact information below.
          </p>
          <div className="flex gap-12 lg:gap-20 items-center">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037t-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z"
                />
              </svg>
              <p className="text-lg">info@fenzora.com</p>
            </div>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.2 20q-2.702 0-5.418-1.244t-5.005-3.533q-2.27-2.289-3.523-5.021Q4 7.469 4 4.8V4h4.439l.848 4.083l-2.696 2.51q.684 1.186 1.417 2.167t1.527 1.769q.802.84 1.808 1.57t2.296 1.44l2.611-2.708l3.75.756V20zM6.121 9.654l2.092-1.92L7.635 5h-2.63q.03 1.144.309 2.305q.278 1.16.807 2.349m8.45 8.335q.923.463 2.09.723t2.339.277v-2.605l-2.388-.475zm0 0"
                />
              </svg>
              <p className="text-lg">+977 9769329984</p>
            </div>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"
              />
              <circle
                cx="256"
                cy="192"
                r="48"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
            <p className="text-lg">Kageshwori Manahara-9, Kathmandu, Nepal</p>
          </div>
        </div>
        {/* right */}

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send us your query</CardTitle>
              <CardDescription>
                We will get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-2">
                    {/* <Label htmlFor="name">Name</Label> */}
                    <Input id="name" placeholder="Your Full Name" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    {/* <Label htmlFor="framework">Framework</Label> */}
                    <Input id="email" placeholder="Your E-mail address" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    {/* <Label htmlFor="framework">Framework</Label> */}
                    <Input id="phone" placeholder="Your Phone Number" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Textarea placeholder="Message...." />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              
              <Button variant="outline" className="bg-[#5070FF] hover:bg-[#5070FF]">
                <div className=" text-white flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20.04 2.323c1.016-.355 1.992.621 1.637 1.637l-5.925 16.93c-.385 1.098-1.915 1.16-2.387.097l-2.859-6.432l4.024-4.025a.75.75 0 0 0-1.06-1.06l-4.025 4.024l-6.432-2.859c-1.063-.473-1-2.002.097-2.387z"
                    />
                  </svg>
                  <p className="font-bold">Send Message</p>
                </div>
              </Button>
              

              {/* <Button variant="outline">Cancel</Button> */}
              {/* <Button>Deploy</Button> */}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
