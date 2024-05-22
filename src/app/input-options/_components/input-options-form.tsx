"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "~/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
// import { toast } from "~/components/ui/use-toast"

const FormSchema = z.object({
  type: z.enum(["file", "directory", "both"], {
    required_error: "You need to select a file selection type.",
  }),
  output: z.enum(["name", "webkitRelativePath", "path"], {
    required_error: "You need to select a file output type.",
  }),
});

interface InputOptionsFormProps {
  onSubmit: (data: z.infer<typeof FormSchema>) => void;
}

export function InputOptionsForm({ onSubmit }: InputOptionsFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: "file",
      output: "name",
    },
  });

  return (
    <Card>
      <CardHeader>Setup your input</CardHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <CardContent className="grid w-full grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>What do you want to select?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="file" />
                        </FormControl>
                        <FormLabel className="font-normal">File</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="directory" />
                        </FormControl>
                        <FormLabel className="font-normal">Directory</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="both" />
                        </FormControl>
                        <FormLabel className="font-normal">Both ???</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="output"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>How did you want the file to display?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="name" />
                        </FormControl>
                        <FormLabel className="font-normal">file.name</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="webkitRelativePath" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          file.webkitRelativePath
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="path" />
                        </FormControl>
                        <FormLabel className="font-normal">file.path</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit">Submit</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
