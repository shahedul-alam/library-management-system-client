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
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Pencil } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { useUpdateBookMutation } from "@/redux/apis/bookApi";
import Loading from "@/shared/Loading";
import Error from "@/shared/Error";
import type { Book } from "@/types/book.types";
import { successToast } from "@/shared/alerts";

const EditBookDialog = ({ data }: { data: Book }) => {
  const [open, setOpen] = useState(false);
  const { _id, author, description, copies, genre, isbn, title } = data;

  const form = useForm({
    defaultValues: {
      title,
      author,
      description,
      genre,
      isbn,
      copies,
    },
  });

  useEffect(() => {
    form.reset({
      title: data.title,
      author: data.author,
      description: data.description,
      genre: data.genre,
      isbn: data.isbn,
      copies: data.copies,
    });
  }, [data, form]);

  const [updateBook, { isLoading, isError, error }] = useUpdateBookMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const available: boolean = data.copies > 0 ? true : false;
    const copies: number = parseInt(data.copies);
    const updatedBookInfo = {
      ...data,
      available,
      copies,
      id: _id,
    };

    const res = await updateBook(updatedBookInfo).unwrap();

    successToast(res.message);
    setOpen(false);
  };

  if (isLoading) return <Loading />;
  if (isError) return <Error errorData={error} />;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Book</DialogTitle>
          <DialogDescription>
            Make changes to your book here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* title */}
            <FormField
              control={form.control}
              name="title"
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your title" />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* author */}
            <FormField
              control={form.control}
              name="author"
              rules={{ required: "Author is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your author" />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* description */}
            <FormField
              control={form.control}
              name="description"
              rules={{ required: "Description is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Enter your description" />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* genre */}
            <FormField
              control={form.control}
              name="genre"
              rules={{ required: "Genre is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={genre}>
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a genre" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="FICTION">FICTION</SelectItem>
                      <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                      <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                      <SelectItem value="HISTORY">HISTORY</SelectItem>
                      <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                      <SelectItem value="FANTASY">FANTASY</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            {/* ISBN */}
            <FormField
              control={form.control}
              name="isbn"
              rules={{ required: "ISBN is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ISBN</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your ISBN" />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* copies */}
            <FormField
              control={form.control}
              name="copies"
              rules={{
                required: "Copies is required",
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Copies</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Enter your copies"
                      min={0}
                    />
                  </FormControl>
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

export default EditBookDialog;
