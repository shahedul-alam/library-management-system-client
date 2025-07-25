import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import type { Book } from "@/types/book.types";
import { useDeleteBookMutation } from "@/redux/apis/libraryApi";
import Loading from "@/shared/Loading";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { errorToast, successToast } from "@/shared/alerts";

type HandleBookDelete = (id: string) => void;

const DeleteBook = ({ data }: { data: Book }) => {
  const [deleteBook, { isLoading }] = useDeleteBookMutation();
  const { _id } = data;

  const handleBookDelete: HandleBookDelete = async (id) => {
    const res = await deleteBook(id);
    if (res.data.success) {
      successToast(res.data.message);
    } else {
      errorToast(res.data.message);
    }
  };

  if (isLoading) return <Loading full={false} />;
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your book
            and remove the data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleBookDelete(_id)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteBook;
