import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Input } from "../ui/input";
import { CalendarIcon, HandHelping } from "lucide-react";
import { useBorrowBookMutation } from "@/redux/apis/borrowApi";
import Loading from "@/shared/Loading";
import { errorToast, successToast } from "@/shared/alerts";
import type { Book } from "@/types/book.types";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { useNavigate } from "react-router";

const BorrowBook = ({ data }: { data: Book }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { _id, copies } = data;

  const form = useForm();

  const [borrowBook, { isLoading }] = useBorrowBookMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (copies < data.quantity || copies === 0) {
      errorToast("Not enough copies available");
      return;
    }
    const borrowInfo = {
      quantity: parseInt(data.quantity),
      dueDate: new Date(data.dueDate).toISOString(),
      book: _id,
    };

    const res = await borrowBook(borrowInfo);
    if (res.data.success) {
      successToast(res.data.message);
    } else {
      errorToast(res.data.message);
    }
    setOpen(false);
    form.reset();
    navigate("/borrow-summary");
  };

  if (isLoading) return <Loading />;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <HandHelping />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Borrow Book</DialogTitle>
          <DialogDescription>
            Input details to borrow your book. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* quantity */}
            <FormField
              control={form.control}
              name="quantity"
              rules={{
                required: "Copies is required",
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Enter your copies"
                      min={1}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* due date */}
            <FormField
              control={form.control}
              name="dueDate"
              rules={{
                required: "Due date is required",
              }}
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Due Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            {/* submit button */}
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={!form.formState.isDirty}>
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BorrowBook;
