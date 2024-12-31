import { logout, queryClient } from "@/api/api";
import { AppDispatch } from "@/store";
import { setUser } from "@/store/userSlice";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

const useLogoutProfile = () => {
  const dispatch: AppDispatch = useDispatch();

  const { mutateAsync, isPending, isError } = useMutation(
    {
      mutationFn: logout,
      onSuccess: () => {
        dispatch(setUser(null));
        queryClient.invalidateQueries({ queryKey: ["users", "me"] });
      },
      onError: (error) => {
        console.error("Failed logout profile:", error);
      },
    },
    queryClient
  );

  const logoutProfile = async () => {
    try {
      await mutateAsync();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return { logoutProfile, isPending, isError };
};

export default useLogoutProfile;
