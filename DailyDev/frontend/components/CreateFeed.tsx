"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { Plus } from "lucide-react";
import { useState } from "react";

export function CreateFeed() {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>();

  const createFeed = async () => {
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    try {
      const response = await axios.post(
        "http://localhost:4000/feeds",
        formData
      );

      toast({
        title: "Feed created Successfully",
      });

      if (response) {
        setTitle("");
        setImage(null);
      }

      console.log(response.data, "response");
    } catch (error) {
      console.log("Something went wrong", error);
      toast({
        title: "Feed couldn't be created",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hover:shadow-2xl font-bold text-lg py-1 w-full translate-y-1 transition duration-700 ease-in-out">
          <Plus />
          New post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New post</DialogTitle>
          <DialogDescription>Create your Post</DialogDescription>
        </DialogHeader>
        <form onSubmit={createFeed} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              required
              className="col-span-3"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Image
            </Label>
            <Input
              id="image"
              type="file"
              required
              className="col-span-3"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <DialogFooter>
            <Button type="submit">Create Feed</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
