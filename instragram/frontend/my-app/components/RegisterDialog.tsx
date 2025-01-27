import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function RegisterDialog() {

    const [username, setUsername] = useState(" ");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"} variant="outline">Register</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register here</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              userName
            </Label>
            <Input id="username" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="profilepicture" className="text-right">
              profilePicture
            </Label>
            <Input id="profilepicture"  className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button size={"sm"} type="submit">Create an Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
