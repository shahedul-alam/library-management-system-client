import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useAddBookMutation } from "@/redux/apis/bookApi";
import Loading from "@/shared/Loading";
import { errorToast, successToast } from "@/shared/alerts";
import { useNavigate } from "react-router";

const AddBookForm = () => {
  const [addBook, { isLoading }] = useAddBookMutation();
  const form = useForm();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const newBookInfo = {
      ...data,
      copies: parseInt(data.copies),
      available: true,
    };

    const res = await addBook(newBookInfo);
    if (res.data.success) {
      successToast(res.data.message);
    } else {
      errorToast(res.data.message);
      return;
    }

    form.reset();
    navigate("/");
  };

  if (isLoading) return <Loading />;

  return (
    <div className="md:w-3/4 md:mx-auto my-12">
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
                <Select onValueChange={field.onChange}>
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
                    min={1}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {/* submit button */}
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button type="submit" disabled={!form.formState.isDirty}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </div>
  );
};

export default AddBookForm;
