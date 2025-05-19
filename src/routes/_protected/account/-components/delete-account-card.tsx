import { Button, buttonVariants } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { authClient } from "~/lib/auth-client";

const DeleteAccountCard = () => {
  const handleDelete = async () => {
    await authClient.deleteUser({
      callbackURL: "/",
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="border-destructive flex flex-col gap-4 rounded-xl border p-6 shadow-sm">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold">Delete Account</h2>

          <p className="text-muted-foreground text-sm leading-none">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
        </div>

        <div>
          <Dialog>
            <DialogTrigger
              className={buttonVariants({ variant: "destructive" })}
            >
              Delete Account
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and all associated data.
                </DialogDescription>
              </DialogHeader>

              <DialogFooter className="sm:justify-between">
                <DialogClose className={buttonVariants({ variant: "outline" })}>
                  Cancel
                </DialogClose>

                <Button
                  onClick={handleDelete}
                  variant="destructive"
                  type="button"
                >
                  Delete Account
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountCard;
