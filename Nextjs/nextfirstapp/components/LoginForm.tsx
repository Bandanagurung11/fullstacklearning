"use client"

import { Mail, Lock } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function LoginForm() {
  return (
    <form className="w-full max-w-sm space-y-6">
      <div className="relative">
        <div className="absolute left-3 top-3 text-muted-foreground/60">
          <Mail className="h-5 w-5" />
        </div>
        <Input type="email" placeholder="Enter Email" className="pl-10 h-12 text-base bg-background" />
      </div>

      <div className="relative">
        <div className="absolute left-3 top-3 text-muted-foreground/60">
          <Lock className="h-5 w-5" />
        </div>
        <Input type="password" placeholder="Enter password" className="pl-10 h-12 text-base bg-background" />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" className="border-muted-foreground/30" />
          <Label
            htmlFor="remember"
            className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember me
          </Label>
        </div>
        <Link href="#" className="text-sm text-primary hover:underline">
          Forgot Password?
        </Link>
      </div>
    </form>
  )
}

